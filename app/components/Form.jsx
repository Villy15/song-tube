const Form = ({ inputURL, handleChange, 
                isPlaying, handlePlay, 
                skipForward, skipBackward,
                handlePlaybackSpeed,
                handleLoop,
                getCurrentTime }) => {
  return (
    <div className="form-container">
        <div className="form-group">
            <label htmlFor="inputURL">YouTube URL</label>
            <input type="text" id='inputURL' value={inputURL} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <div className="form-row" id="form-loop">
                <div className="loop">
                    <label>Loop</label>
                    <input id="loop-checkbox" type="checkbox" onChange={handleLoop}/>
                </div>
                <div className="loop-start">
                    <label>Loop Start</label>
                    <input type="text" id="loop-start-time" onChange={getCurrentTime}/>
                    <button className="btn-now" id="btn-now-loopstart" onClick={getCurrentTime}>Now</button>
                </div>
                <div className="loop-end">
                    <label>Loop End</label>
                    <input type="text" id="loop-end-time" onChange={getCurrentTime}/>
                    <button className="btn-now" id="btn-now-loopend" onClick={getCurrentTime}>Now</button>
                </div>
            </div>
        </div>
        <div className="form-group">
            <label>Playback speed</label>
            <div className="form-row">
                <button value={0.5} onClick={handlePlaybackSpeed}>0.5x</button>
                <button value={0.75} onClick={handlePlaybackSpeed}>0.75x</button>
                <button value={1} onClick={handlePlaybackSpeed}>1x</button>
                <button>Custom</button>
            </div>
        </div>
        <div className="form-group">
            <label>Position</label>
            <div className="form-row">
                {/* <button>Video Start</button> */}
                <button onClick={skipBackward}>-5 sec</button>
                <button onClick={skipForward}>+5 sec</button>
            </div>
        </div>
        <div className="form-group">
            <div className="form-row">
                <button onClick={handlePlay}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                {/* <button>Share</button> */}
            </div>
        </div>
    </div>
  )
}

export default Form
