import { useState, useEffect } from "react";

// Function that gets the current time of the video
export const useCurrentTime = (player) => {
    const getCurrentTime = (e) => {
      if (player) {
        const time = player.getCurrentTime();
        const loop_start_time = document.getElementById('loop-start-time');
        const loop_end_time = document.getElementById('loop-end-time');
  
        // Format the time to minutes and seconds
        const minutes = Math.floor(time / 60);
        let seconds = Math.floor(time - minutes * 60);
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        
        let button_id = null;
        
        if (e.target == undefined) {
          button_id = e.id;
        } else {
          button_id = e.target.id;
        }
          
        if (button_id === 'btn-now-loopstart') {
          loop_start_time.value = `${minutes}:${seconds}`;
        } else if (button_id === 'btn-now-loopend') {
          loop_end_time.value = `${minutes}:${seconds}`;
        } 
  
        // Store the value of loop_start_time and loop_end_time in local storage
        localStorage.setItem('loop_start_time', loop_start_time.value);
        localStorage.setItem('loop_end_time', loop_end_time.value);
      }
    }
  
    useEffect(() => {
      const savedLoopStartTime = localStorage.getItem('loop_start_time');
      const savedLoopEndTime = localStorage.getItem('loop_end_time');
  
      if (savedLoopStartTime) {
        const loop_start_time = document.getElementById('loop-start-time');
        loop_start_time.value = savedLoopStartTime;
      }
  
      if (savedLoopEndTime) {
        const loop_end_time = document.getElementById('loop-end-time');
        loop_end_time.value = savedLoopEndTime;
      }
  
      if (player) {
        const handleKeyDown = (e) => {
          if (e.code === 'BracketLeft') {
            const button_id = document.getElementById('btn-now-loopstart');
            getCurrentTime(button_id);
          } else if (e.code === 'BracketRight') {
            const button_id = document.getElementById('btn-now-loopend');
            getCurrentTime(button_id);
          }
        };
  
        window.addEventListener('keydown', handleKeyDown);
  
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }
    }, [player]);
  
    return { getCurrentTime };
  }