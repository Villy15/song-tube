import { useState, useEffect } from 'react';

export const useSection = (player) => {
    const [timeA, setTimeA] = useState(0);
    const [timeB, setTimeB] = useState(0);
    const [timeC, setTimeC] = useState(0);
    const [timeD, setTimeD] = useState(0);
    const [timeE, setTimeE] = useState(0);

    const time = (buttonName) => {
        if (player) {
            const currentTime = player.getCurrentTime();
            console.log(buttonName);
    
            switch(buttonName) {
                case 'A':
                    setTimeA(currentTime);
                    localStorage.setItem('timeA', currentTime);
                    break;
                case 'B':
                    setTimeB(currentTime);
                    localStorage.setItem('timeB', currentTime);
                    break;
                case 'C':
                    setTimeC(currentTime);
                    localStorage.setItem('timeC', currentTime);
                    break;
                case 'D':
                    setTimeD(currentTime);
                    localStorage.setItem('timeD', currentTime);
                    break;
                case 'E':
                    setTimeE(currentTime);
                    localStorage.setItem('timeE', currentTime);
                    break;
                default:
                    console.log(`Unknown button name: ${buttonName}`);
            }
        }
    }

    const seekSection = (seekTime) => {
        if (player) {
            player.seekTo(seekTime);
        }
    }

    useEffect(() => {
        const savedTimeA = localStorage.getItem('timeA');
        const savedTimeB = localStorage.getItem('timeB');
        const savedTimeC = localStorage.getItem('timeC');
        const savedTimeD = localStorage.getItem('timeD');
        const savedTimeE = localStorage.getItem('timeE');

        if (savedTimeA) {
            setTimeA(savedTimeA);
        }
        if (savedTimeB) {
            setTimeB(savedTimeB);
        }
        if (savedTimeC) {
            setTimeC(savedTimeC);
        }
        if (savedTimeD) {
            setTimeD(savedTimeD);
        }
        if (savedTimeE) {
            setTimeE(savedTimeE);
        }
    }, []);

    return { timeA, timeB, timeC, timeD, timeE, time, seekSection };
}