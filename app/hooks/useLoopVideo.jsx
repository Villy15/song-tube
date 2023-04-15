import { useState, useEffect } from "react";

// Function that gets that always gets the current time of the video
export const useLoopVideo = (player, loopStartTime, loopEndTime) => {
    const [isLooping, setIsLooping] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
  
    const handleLoop = () => {
      if (player) {
        setIsLooping(!isLooping);
      }
    };
  
    useEffect(() => {
      let intervalId;
  
      if (player && isLooping) {
        intervalId = setInterval(() => {
          const newTime = player.getCurrentTime();
          setCurrentTime(newTime);
  
          if (currentTime >= loopEndTime.current.timestamp) {
            player.seekTo(loopStartTime.current.timestamp, true);
          } else if (currentTime < loopStartTime.current.timestamp) {
            player.seekTo(loopStartTime.current.timestamp, true);
          }
        }, 100); // update the current time every 100 milliseconds
      }
  
      return () => clearInterval(intervalId);
    }, [player, isLooping, currentTime]);
  
    useEffect(() => {
      if (player) {
        const handleKeyDown = (e) => {
          if (e.code === 'KeyL') {
            const loopCheckbox = document.getElementById('loop-checkbox');
            if (loopCheckbox && loopCheckbox.checked == false) {
              loopCheckbox.checked = true;
              handleLoop();
            } else if (loopCheckbox && loopCheckbox.checked == true) {
              loopCheckbox.checked = false;
              handleLoop();
            }
          }
        };
  
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }
    }, [player, isLooping]);
  
    return { isLooping, handleLoop };
  }