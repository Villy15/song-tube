import { useState, useEffect } from "react";

// Saving the input URL to local storage 
export const useSavedInputURL = () => {
    const [inputURL, setinputURL] = useState('');
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        const savedinputURL = localStorage.getItem('inputURL');

        if (savedinputURL) {
            setinputURL(savedinputURL);
            setVideoId(savedinputURL.split('v=')[1]);
        }
    }, []);

    const handleChange = (e) => {
        const newValue = e.target.value;

        setinputURL(newValue);
        setVideoId(newValue.split('v=')[1]);

        localStorage.setItem('inputURL', newValue);
    }
    return { inputURL, videoId, handleChange };
};