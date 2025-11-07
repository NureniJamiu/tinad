import { useEffect, useState } from "react";
import { useMusic } from "../context/MusicContext";

const MusicPlayer = () => {
  const { isPlaying, setIsPlaying, isMuted, audioRef, togglePlay, unmute } = useMusic();
  const [showUnmutePrompt, setShowUnmutePrompt] = useState(false);

  useEffect(() => {
    // Auto-play muted on mount (always works)
    const playAudio = async () => {
      if (audioRef.current) {
        audioRef.current.muted = true;
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          // Show unmute prompt after a short delay, only if still muted
          setTimeout(() => {
            if (audioRef.current?.muted) {
              setShowUnmutePrompt(true);
            }
          }, 1000);
        } catch (error) {
          console.log("Failed to autoplay:", error);
          // If autoplay fails, show prompt immediately
          setShowUnmutePrompt(true);
        }
      }
    };

    playAudio();
  }, [audioRef, setIsPlaying]);

  const handleUnmute = () => {
    unmute();
    setShowUnmutePrompt(false);
  };

  const handleTogglePlay = () => {
    // Hide unmute prompt when user interacts with play button
    setShowUnmutePrompt(false);
    togglePlay();
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Unmute prompt */}
      {showUnmutePrompt && isMuted && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-50 animate-fade-in px-4 md:px-0">
          <button
            onClick={handleUnmute}
            className="flex items-center gap-2 px-4 py-2.5 md:px-4 md:py-3 bg-yellow/95 hover:bg-yellow text-black text-sm md:text-base font-medium rounded-full shadow-lg hover:shadow-yellow/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
            <span>Click the play button below to enable sound</span>
          </button>
        </div>
      )}

      {/* Play/Pause button */}
      <button
        onClick={handleTogglePlay}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <div className="relative flex-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow/90 hover:bg-yellow transition-all duration-300 shadow-lg hover:shadow-yellow/50 hover:scale-110">
          {isPlaying ? (
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </button>
    </>
  );
};

export default MusicPlayer;
