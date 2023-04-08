import Youtube from 'react-youtube';

const Video = ({ videoId, setPlayer }) => {
  // Sets the player state
  const onReady = (e) => {
    setPlayer(e.target);
  };

  // Options for the Youtube player
  const opts = {
    playerVars: {
      autoplay: 0, 
    },
  };

  return (
    <div className="video-container">
      <Youtube videoId={videoId} opts={opts} onReady={onReady}/>
    </div>
  )
};

export default Video