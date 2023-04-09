import { useState, useEffect } from "react";

export const useSkipVideo = (player) => {
    const skipForward = () => {
      if (player) {
        const currentTime = player.getCurrentTime();
        player.seekTo(currentTime + 5, true);
      }
    };
  
    const skipBackward = () => {
      if (player) {
        const currentTime = player.getCurrentTime();
        player.seekTo(currentTime - 5, true);
      }
    };
  
    useEffect(() => {
      if (player) {
        const handleKeyDown = (e) => {
          if (e.code === 'ArrowRight') {
            skipForward();
          } else if (e.code === 'ArrowLeft') {
            skipBackward();
          }
        };
  
        window.addEventListener('keydown', handleKeyDown);
  
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }
    }, [player, skipForward, skipBackward]);
  
    return { skipForward, skipBackward };
  };