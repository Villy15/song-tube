import React from 'react'

const Sections = ({ timeA, timeB, timeC, timeD, timeE, time, seekSection}) => {
  const handleButtonClick = (buttonName) => {
    return () => {
      time(buttonName);
    };
  };

  const handleSeekSection = (seekTime) => {
    return () => {
      seekSection(seekTime);
    };
  };


  return (
    <>
      <div className='section-container'>
        <div>
          <button className='btn-section' onClick={handleButtonClick('A')}>
            A
          </button>
          <button className='btn-section' onClick={handleButtonClick('B')}>
            B
          </button>
          <button className='btn-section' onClick={handleButtonClick('C')}>
            C
          </button>
          <button className='btn-section' onClick={handleButtonClick('D')}>
            D
          </button>
          <button className='btn-section' onClick={handleButtonClick('E')}>
            E
          </button>
        </div>
      </div>
      <div className='section-container'>
        <div>
          <button className='btn-section' onClick={handleSeekSection(timeA)}>
            {timeA}
          </button>
          <button className='btn-section' onClick={handleSeekSection(timeB)}>
            {timeB}
          </button>
          <button className='btn-section' onClick={handleSeekSection(timeC)}>
            {timeC}
          </button>
          <button className='btn-section' onClick={handleSeekSection(timeD)}>
            {timeD}
          </button>
          <button className='btn-section' onClick={handleSeekSection(timeE)}> 
            {timeE}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sections