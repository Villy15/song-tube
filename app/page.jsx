'use client'
import Form from "./components/Form"
import Video from "./components/Video"
import { useState, useEffect } from "react"

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [videoId, setVideoId] = useState('');

  // Load saved input value from localStorage on initial render
  useEffect(() => {
    const savedInputValue = localStorage.getItem('inputValue');
    
    if (savedInputValue) {
      setInputValue(savedInputValue);
      setVideoId(savedInputValue.split('v=')[1]);
    }
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setVideoId(newValue.split('v=')[1]);
    
    // Save input value to localStorage
    localStorage.setItem('inputValue', newValue);
  }

  return (
    <>
      <Video videoId={videoId}/>
      <Form inputValue={inputValue} handleChange={handleChange}/>
    </>
  )
}

export default HomePage