export const usePlaybackSpeed = (player) => {
  const handlePlaybackSpeed = (e) => {
    if (player) {
      const speed = e.target.value;
      player.setPlaybackRate(parseFloat(speed));
    }
  };

  return { handlePlaybackSpeed };
}