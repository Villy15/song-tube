import { useState, useEffect } from "react";

export const usePlayVideo = (player) => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlay = () => {
      if (player) {
        if (!isPlaying) {
          player.playVideo();
        } else {  
          player.pauseVideo();
        }
        
        setIsPlaying(!isPlaying);
      }
    };
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.code === 'Space') {
          handlePlay();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [handlePlay]);
  
    return { isPlaying, handlePlay };
  };