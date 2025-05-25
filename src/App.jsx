// Import necessary things from React
import React, { useState, useRef, useEffect } from 'react';

// Import CSS and subtitles file
import './App.css';
import subtitles from './subtitles.json';

function App() {
    // State to hold the playback speed value (1x by default)
    const [speedValue, setSpeedValue] = useState(1);

    // State to hold the currently active subtitle (highlighted one)
    const [activeSubtitle, setActiveSubtitle] = useState(null);

    // useRef to reference the video element
    const videoRef = useRef(null);

    // useRef to reference each subtitle element (for scrolling)
    const subtitleRefs = useRef({});

    // Helper function to convert seconds into MM:SS format (for subtitle timing)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    // Automatically scroll the active subtitle into view when it changes
    useEffect(() => {
        if (activeSubtitle && subtitleRefs.current[activeSubtitle]) {
            subtitleRefs.current[activeSubtitle].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [activeSubtitle]); // Only run when activeSubtitle changes

    return (
        <>
        <main className="p-8 w-full h-screen border border-black">
            <div className="max-w-7xl mx-auto">
                <p className="text-3xl font-bold text-gray-800 mb-5">Video Player by Aron Tech.</p>

                {/* Main Video Player Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden h-[70%] w-[80%] mx-auto">
                    <div className="flex flex-col md:flex-row">
                        
                        {/* Left: Video Area */}
                        <div className="w-3/5">
                            <div className="relative pb-[56.25%]">
                                <video
                                    id="main-video"
                                    ref={videoRef} // Connect videoRef to this video
                                    src="/daisy-day-book.mp4"
                                    className="absolute inset-0"
                                    controls
                                    onTimeUpdate={() => {
                                        // Every second, get the current video time
                                        if (videoRef.current) {
                                            const currentTime = videoRef.current.currentTime;

                                            // Find the subtitle that matches the current time
                                            const currentSubtitle = subtitles.find(
                                                (subtitle) =>
                                                    currentTime >= subtitle.start &&
                                                    currentTime <= subtitle.end
                                            );

                                            // If we find a matching subtitle, update activeSubtitle
                                            if (currentSubtitle) {
                                                setActiveSubtitle(currentSubtitle.id);
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Right: Subtitles & Speed Control */}
                        <div className="w-2/5 border-l border-gray-200">

                            {/* Subtitles Section */}
                            <div className="p-4 border-b border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-semibold text-gray-800">Subtitles</h2>
                                </div>

                                {/* Scrollable Subtitle List */}
                                <div className="h-[150px] overflow-y-auto pr-2">
                                    {subtitles.map(subtitle => {
                                        return (
                                            <div
                                                key={subtitle.id}
                                                id={`subtitle-${subtitle.id}`}
                                                ref={(el) => (subtitleRefs.current[subtitle.id] = el)} // Save ref for scrolling
                                                className={`p-3 text-sm border-b border-gray-100 hover:bg-gray-50 cursor-pointer 
                                                    ${activeSubtitle === subtitle.id ? 'bg-indigo-100' : ''}`}
                                                onClick={() => {
                                                    // Jump to clicked subtitle time
                                                    if (videoRef.current) {
                                                        videoRef.current.currentTime = subtitle.start;
                                                        videoRef.current.play(); // Start video
                                                    }
                                                }}
                                            >
                                                {/* Show subtitle time */}
                                                <div className="text-xs text-gray-500 mb-1">
                                                    {formatTime(subtitle.start)} - {formatTime(subtitle.end)}
                                                </div>

                                                {/* Show subtitle text */}
                                                <div className="text-sm text-gray-800">
                                                    {subtitle.text}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Playback Speed Control */}
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-3">Playback Speed</h2>

                                {/* Slider bar for speed control */}
                                <div className="relative mt-8 mb-2 flex ">
                                    {/* Speed marker labels */}
                                    <div className='text-indigo-600 text-lg'>
                                    <div className="speed-marker left-[2%]">0.25x</div>
                                    <div className="speed-marker left-[19%]">0.5x</div>
                                    <div className="speed-marker left-[44%]">1x</div>
                                    <div className="speed-marker left-[69%]">1.5x</div>
                                    <div className="speed-marker left-[100%]">2x</div>

                                    </div>
                                    

                                    {/* Slider input */}
                                    <input
                                        type="range"
                                        className="speed-slider w-full h-2 rounded-lg cursor-pointer"
                                        min="0.25"
                                        max="2"
                                        step="0.05"
                                        value={speedValue}
                                        onChange={(e) => {
                                            setSpeedValue(e.target.value); // Update speed in state
                                            if (videoRef.current) {
                                                videoRef.current.playbackRate = e.target.value; // Change video speed
                                            }
                                        }}
                                    />
                                </div>

                                {/* Display current speed */}
                                <div className="flex justify-between items-center mt-8">
                                    <div className=" text-gray-500">
                                        Current speed: <span className="font-semibold text-indigo-600">{speedValue}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default App;
