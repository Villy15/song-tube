import { useState, useEffect } from "react";

// Function that gets that always gets the current time of the video
export const useLoopVideo = (player) => {
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
        const loop_start_time = document.getElementById('loop-start-time');
        const loop_end_time = document.getElementById('loop-end-time');
  
        const start_time = loop_start_time.value;
        const end_time = loop_end_time.value;
  
        const start_time_seconds = start_time.split(':').reduce((acc, time) => (60 * acc) + +time);
        const end_time_seconds = end_time.split(':').reduce((acc, time) => (60 * acc) + +time);
  
        intervalId = setInterval(() => {
          const newTime = player.getCurrentTime();
          setCurrentTime(newTime);
  
          if (currentTime >= end_time_seconds) {
            player.seekTo(start_time_seconds, true);
          } else if (currentTime < start_time_seconds) {
            player.seekTo(start_time_seconds, true);
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