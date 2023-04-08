import { useState, useEffect } from "react";

// Saving the input URL to local storage 
export const useSavedInputURL = () => {
    const [inputURL, setinputURL] = useState('');
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        const savedinputURL = localStorage.getItem('inputURL');

        if (savedinputURL) {
            setinputURL(savedinputURL);
            setVideoId(savedinputURL.split('v=')[1]);
        }
    }, []);

    const handleChange = (e) => {
        const newValue = e.target.value;

        setinputURL(newValue);
        setVideoId(newValue.split('v=')[1]);

        localStorage.setItem('inputURL', newValue);
    }
    return { inputURL, videoId, handleChange };
};

// Playing the video
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

// Skips the video forward or backward 5 seconds
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

export const usePlaybackSpeed = (player) => {
  const handlePlaybackSpeed = (e) => {
    if (player) {
      const speed = e.target.value;
      player.setPlaybackRate(parseFloat(speed));
    }
  };

  return { handlePlaybackSpeed };
}

// Function that loops the video from start to end
export const useLoopVideo = (player) => {
  const [isLooping, setIsLooping] = useState(false);

  const handleLoop = () => {
    if (player) {
      setIsLooping(!isLooping);
    }
  };

  return { isLooping, handleLoop };
}

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
