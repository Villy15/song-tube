import { useState, useEffect } from "react";

export const usePlaybackSpeed = (player) => {
  const [speed, setSpeed] = useState(1);
  const [isClicked05, setClicked05] = useState(false);
  const [isClicked075, setClicked075] = useState(false);
  const [isClicked1, setClicked1] = useState(true);

  const handlePlaybackSpeed = (e) => {
    if (player) {
      setSpeed(e.target.value)

      if (e.target.value === '0.5') {
        setClicked05(true);
        setClicked075(false);
        setClicked1(false);
      } else if (e.target.value === '0.75') {
        setClicked05(false);
        setClicked075(true);
        setClicked1(false);
      } else {
        setClicked05(false);
        setClicked075(false);
        setClicked1(true);
      }
    }
  };

  useEffect(() => {
    if (player?.h)
      player.setPlaybackRate(parseFloat(speed));
  }, [player, speed]);

  return { isClicked05, isClicked075, isClicked1, handlePlaybackSpeed };
}