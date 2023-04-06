import Youtube from 'react-youtube';

const Video = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="video-container">
      <Youtube videoId={videoId} opts={opts} />
    </div>
  )
};

export default Video