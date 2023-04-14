import React from 'react'

const Sections = ({ sections, time, seekSection}) => {
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
           {sections.map((section) => (
             <button key={`${section.name}-${section.time}`} className='btn-section' onClick={handleButtonClick(section.name)}>
               {section.name}
             </button>
           ))}
        </div>
      </div>
      <div className='section-container'>
        <div>
           {sections.map((section) => (
             <button key={`${section.name}-${section.time}-seek`} className='btn-section' onClick={handleSeekSection(section.time)}>
               {section.time}
             </button>
           ))}
         </div>
       </div>
     </>
  );
}

export default Sections