// Import necessary things from React
import React, { useState, useRef, useEffect } from 'react';
import SpeakWord from './SpeakWord';

// Import CSS and subtitles file
import './App.css';
import subtitles from './subtitles.json';

function App() {
    // State to hold the playback speed value (1x by default)
    const [speedValue, setSpeedValue] = useState(1);

    // State to hold the currently active subtitle (highlighted one)
    const [activeSubtitle, setActiveSubtitle] = useState(null);
    const [activeDefinition, setActiveDefinition] = useState(null); // For glossary toggle

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

    // Glossary data for easier mapping
    const glossary = [
        {
            key: "example",
            buttonClass: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700",
            title: "Example",
            definition: "An example is something that shows you how to do something or what something means. For instance, if you don't understand a word, a teacher might give you an example to help you learn.",
            related: "Sample, Model, Demonstration",
            colorClass: "bg-indigo-50 text-indigo-800",
            relatedClass: "text-indigo-600"
        },
        {
            key: "hurry-up",
            buttonClass: "bg-purple-50 hover:bg-purple-100 text-purple-700",
            title: "Hurry up",
            definition: "Hurry up means to do something faster. If someone says \"hurry up,\" they want you to move quickly or finish soon.",
            related: "Quick, Fast, Rush",
            colorClass: "bg-purple-50 text-purple-800",
            relatedClass: "text-purple-600"
        },
        {
            key: "talk",
            buttonClass: "bg-red-50 hover:bg-red-100 text-red-700",
            title: "Talk",
            definition: "To talk means to use your voice to say words to someone. People talk to share ideas, ask questions, or just have fun with friends.",
            related: "Speak, Chat, Say",
            colorClass: "bg-red-50 text-red-800",
            relatedClass: "text-red-600"
        },
        {
            key: "paint",
            buttonClass: "bg-green-50 hover:bg-green-100 text-green-700",
            title: "Paint",
            definition: "To paint means to use colors and a brush to make pictures on paper, walls, or other things. Painting is a way to make art and show your ideas with colors.",
            related: "Draw, Color, Art",
            colorClass: "bg-green-50 text-green-800",
            relatedClass: "text-green-600"
        }
    ];

    return (
        <>
        <main className="p-2 sm:p-4 w-full min-h-screen border border-black bg-gray-50">
            <div className="max-w-7xl mt-8 mx-auto h-full flex flex-col items-center justify-center">
                <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-5 text-center">Video Player by Aron Tech.</p>

                {/* Main Video Player Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full sm:w-[90%] md:w-[80%] mx-auto h-auto md:h-[70%]">
                    <div className="flex flex-col md:flex-row">
                        
                        {/* Left: Video Area */}
                        <div className="w-full md:w-3/5">
                            <div className="relative pb-[56.25%] md:pb-[56.25%]">
                                <video
                                    id="main-video"
                                    ref={videoRef}
                                    src="/daisy-day-book.mp4"
                                    className="absolute inset-0 w-full h-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                                    controls
                                    onTimeUpdate={() => {
                                        if (videoRef.current) {
                                            const currentTime = videoRef.current.currentTime;
                                            const currentSubtitle = subtitles.find(
                                                (subtitle) =>
                                                    currentTime >= subtitle.start &&
                                                    currentTime <= subtitle.end
                                            );
                                            if (currentSubtitle) {
                                                setActiveSubtitle(currentSubtitle.id);
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Right: Subtitles & Speed Control */}
                        <div className="w-full md:w-2/5 border-t md:border-t-0 md:border-l border-gray-200 bg-white">
                            {/* Subtitles Section */}
                            <div className="p-2 sm:p-4 border-b border-gray-200">
                                <div className="flex items-center justify-between mb-2 sm:mb-4">
                                    <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">Subtitles</h2>
                                </div>
                                {/* Scrollable Subtitle List */}
                                <div className="h-[120px] sm:h-[180px] md:h-[250px] overflow-y-auto pr-1 sm:pr-2">
                                    {subtitles.map(subtitle => {
                                        return (
                                            <div
                                                key={subtitle.id}
                                                id={`subtitle-${subtitle.id}`}
                                                ref={(el) => (subtitleRefs.current[subtitle.id] = el)}
                                                className={`p-2 sm:p-3 text-xs sm:text-sm border-b border-gray-100 hover:bg-gray-50 cursor-pointer 
                                                    ${activeSubtitle === subtitle.id ? 'bg-indigo-100' : ''}`}
                                                onClick={() => {
                                                    if (videoRef.current) {
                                                        videoRef.current.currentTime = subtitle.start;
                                                        videoRef.current.play();
                                                    }
                                                }}
                                            >
                                                <div className="text-[10px] sm:text-xs text-gray-500 mb-1">
                                                    {formatTime(subtitle.start)} - {formatTime(subtitle.end)}
                                                </div>
                                                <div className="text-xs sm:text-sm text-gray-800">
                                                    {subtitle.text}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Playback Speed Control */}
                            <div className="p-2 sm:p-4">
                                <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Playback Speed</h2>
                                {/* Slider bar for speed control */}
                                <div className="relative mt-4 sm:mt-8 mb-2 flex">
                                    {/* Speed marker labels */}
                                    <div className="text-gray-500 hidden sm:block">
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
                                            const newValue = parseFloat(e.target.value);
                                            setSpeedValue(newValue);
                                            if (videoRef.current) {
                                                videoRef.current.playbackRate = newValue;
                                            }
                                        }}
                                        style={{
                                            background: `linear-gradient(to right, #4f46e5 ${(speedValue - 0.25) / 1.75 * 100}%, #e5e7eb ${(speedValue - 0.25) / 1.75 * 100}%)`
                                        }}
                                    />
                                </div>
                                {/* Display current speed */}
                                <div className="flex justify-between items-center mt-4 sm:mt-8">
                                    <div className="text-xs sm:text-gray-500">
                                        Current speed: <span className="font-semibold text-indigo-600">{speedValue}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/* Key Terms Glossary Section */}                      
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Terms Glossary</h2>
                        <div className="mb-4">
                            <p className="text-gray-600 mb-4">Click on any keyword to see its definition:</p>
                            {/* Keywords Container */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {glossary.map(term => (
                                    <button
                                        key={term.key}
                                        className={`keyword px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${term.buttonClass} ${activeDefinition === term.key ? 'ring-2 ring-offset-2 ring-indigo-300' : ''}`}
                                        onClick={() => setActiveDefinition(activeDefinition === term.key ? null : term.key)}
                                        type="button"
                                    >
                                        {term.title}
                                    </button>
                                ))}
                            </div>
                            {/* Definitions Container */}
                            <div id="definitions-container" className="border-t border-gray-200 pt-4">
                                {glossary.map(term => (
                                    <div
                                        key={term.key}
                                        className={`definition-container transition-all duration-300 ease-in-out ${activeDefinition === term.key ? 'active max-h-[500px] mb-4' : 'max-h-0 overflow-hidden'}`}
                                        id={`${term.key}-definition`}
                                    >
                                        <div className={`${term.colorClass} p-4 rounded-lg`}>
                                            <div className='flex items-center justify-start mb-2'>
                                                <h3 className={`text-lg font-semibold ${term.colorClass.split(' ')[1]}`}>{term.title}</h3>
                                                <SpeakWord word={term.title} color={term.relatedClass}/>
                                            </div>
                                            
                                            <p className="text-gray-700">{term.definition}</p>
                                            <div className="mt-3 flex items-center text-sm">
                                                <span className={`${term.relatedClass} font-medium`}>Related terms:</span>
                                                <span className="ml-2 text-gray-600">{term.related}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
