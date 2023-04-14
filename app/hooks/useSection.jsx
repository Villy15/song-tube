import { useState, useEffect } from 'react';

export const useSection = (player) => {
    const [times, setTimes] = useState({
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
        H: 0,
        I: 0,
        J: 0,
    });

    const sections = Object.entries(times).map(([name, time]) => ({ 
        name, time 
    }));

    const time = (buttonName) => {    // this function takes in the button name as an argument
        if (player) {                   // if the video player is available
            const currentTime = player.getCurrentTime();    // get the current time of the video using the player
            setTimes((prevTimes) => ({      // update the state of the component with the new time
                ...prevTimes,                // using the previous times object
                [buttonName]: currentTime,   // and setting the current time for the section whose button was clicked
            }));
            localStorage.setItem(`time${buttonName}`, currentTime);    // save the current time in the browser's local storage
        }
    };

    const seekSection = (seekTime) => {
        if (player) {
            player.seekTo(seekTime);
        }
    };

    useEffect(() => {
        const savedTimes = {};
        Object.keys(times).forEach((name) => {
            const savedTime = localStorage.getItem(`time${name}`);
            if (savedTime) {
                savedTimes[name] = parseFloat(savedTime);
            }
        });
        setTimes((prevTimes) => ({ ...prevTimes, ...savedTimes }));

        // Add event listeners for each letter in the times object
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();
            if (times[key] !== undefined) {
                seekSection(times[key]);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [times, seekSection]);

    return { sections, time, seekSection };
};