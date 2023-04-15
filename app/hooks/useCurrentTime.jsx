import { useState, useEffect, useRef } from "react";

export const useCurrentTime = (player) => {
  const loopStartTime = useRef(null);
  const loopEndTime = useRef(null);

  const getCurrentTime = (e) => {
    if (!player) return;

    const time = player.getCurrentTime();
    const timestamp = formatTimestamp(time);

    if (e.target.id === "btn-now-loopstart") {
      loopStartTime.current.value = timestamp;
      loopStartTime.current.timestamp = time;
    } else if (e.target.id === "btn-now-loopend") {
      loopEndTime.current.value = timestamp;
      loopEndTime.current.timestamp = time;
    }

    localStorage.setItem("loop_start_time", loopStartTime.current.timestamp);
    localStorage.setItem("loop_end_time", loopEndTime.current.timestamp);
  };

  useEffect(() => {
    const savedLoopStartTime = localStorage.getItem("loop_start_time");
    const savedLoopEndTime = localStorage.getItem("loop_end_time");

    if (savedLoopStartTime) {
      const timestamp = formatTimestamp(savedLoopStartTime);
      loopStartTime.current.value = timestamp;
      loopStartTime.current.timestamp = savedLoopStartTime;
    }

    if (savedLoopEndTime) {
      const timestamp = formatTimestamp(savedLoopEndTime);
      loopEndTime.current.value = timestamp;
      loopEndTime.current.timestamp = savedLoopEndTime;
    }

    const handleKeyDown = (e) => {
      if (e.code === "BracketLeft") {
        getCurrentTime({ target: { id: "btn-now-loopstart" } });
      } else if (e.code === "BracketRight") {
        getCurrentTime({ target: { id: "btn-now-loopend" } });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [player]);

  const formatTimestamp = (time) => {
    const date = new Date(time * 1000);
    const timestamp = date.toISOString().substr(14, 5);
    return timestamp;
  };

  return { getCurrentTime, loopStartTime, loopEndTime };
};