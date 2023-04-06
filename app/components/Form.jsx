import { useState } from 'react';

const Form = ({ inputValue, handleChange }) => {
  return (
    <div className="form-container">
        <div className="form-group">
            <label htmlFor="inputURL">YouTube URL</label>
            <input type="text" id='inputURL' value={inputValue} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <div className="form-row">
                <div className="loop">
                    <label>Loop</label>
                    <input type="checkbox" />
                </div>
                <div className="loop-start">
                    <label>Loop Start</label>
                    <input type="text" />
                </div>
                <div className="loop-end">
                    <label>Loop End</label>
                    <input type="text" />
                </div>
            </div>
        </div>
        <div className="form-group">
            <label>Playback speed</label>
            <div className="form-row">
                <button className='btn'>0.75x</button>
                <button className='btn'>0.5x</button>
                <button className='btn'>1x</button>
                <button className='btn'>Custom</button>
            </div>
        </div>
        <div className="form-group">
            <label>Position</label>
            <div className="form-row">
                <button className='btn'>Video Start</button>
                <button className='btn'>-5 sec</button>
                <button className='btn'>+5 sec</button>
            </div>
        </div>
    </div>
  )
}

export default Form
