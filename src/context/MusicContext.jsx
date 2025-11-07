import { createContext, useContext, useState, useRef } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    // Always unmute when user clicks play
    if (audioRef.current.muted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Failed to play:", error);
      }
    }
  };

  const unmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying, isMuted, audioRef, togglePlay, unmute }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within MusicProvider");
  }
  return context;
};
