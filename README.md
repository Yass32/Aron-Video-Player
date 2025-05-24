# Yass32.github.io

## Video Player App

This is a React-based video player application that features a custom video player with subtitles and playback speed control. The app is designed to provide an interactive and user-friendly experience for watching videos with synchronized subtitles.

## Features

- **Custom Video Player**: A responsive video player with playback controls.
- **Subtitles Support**: Displays subtitles synchronized with the video playback.
- **Auto-Scroll Subtitles**: Automatically scrolls to the active subtitle as the video plays.
- **Subtitle Navigation**: Click on a subtitle to jump to its corresponding time in the video.
- **Playback Speed Control**: Adjust the playback speed using a slider (0.25x to 2x).

## Project Structure

```
videoapp/
├── public/
│   ├── Daisy's Day Book.mp4   # Sample video file
│   ├── vite.svg               # Vite logo
├── src/
│   ├── App.jsx                # Main React component
│   ├── App.css                # Styles for the app
│   ├── index.css              # Global styles
│   ├── main.jsx               # Entry point for the React app
│   ├── subtitles.json         # Subtitles data in JSON format
│   └── assets/
│       └── react.svg          # React logo
├── .gitignore                 # Git ignore file
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
├── vite.config.js             # Vite configuration
└── eslint.config.js           # ESLint configuration
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-player-app.git
   cd video-player-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

## Usage

1. **Play the Video**: Use the video controls to play, pause, or seek the video.
2. **View Subtitles**: Subtitles will appear on the right side of the player. The active subtitle is highlighted.
3. **Jump to Subtitles**: Click on any subtitle to jump to its corresponding time in the video.
4. **Adjust Playback Speed**: Use the slider below the subtitles to change the playback speed.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: Core programming language for the app.

## File Descriptions

- **`App.jsx`**: Contains the main React component for the video player and subtitles.
- **`subtitles.json`**: Stores the subtitles data, including start and end times and text.
- **`App.css`**: Custom styles for the video player and subtitles.
- **`vite.config.js`**: Configuration file for Vite.

## Subtitles JSON Format

The subtitles are stored in a JSON file (`subtitles.json`) with the following structure:

```json
[
  {
    "id": 1,
    "start": 4,
    "end": 16,
    "text": "Subtitle text here."
  },
  {
    "id": 2,
    "start": 17,
    "end": 25,
    "text": "Another subtitle text."
  }
]
```

- `id`: Unique identifier for the subtitle.
- `start`: Start time of the subtitle in seconds.
- `end`: End time of the subtitle in seconds.
- `text`: The subtitle text.

## Customization

- **Subtitles**: Replace the `subtitles.json` file with your own subtitle data.
- **Video**: Replace the video file in the `public` folder with your own video.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).
- Styled using [Tailwind CSS](https://tailwindcss.com/).
