import { useState, useEffect } from 'react';

export const useSection = (player) => {
    const [timeA, setTimeA] = useState(0);
    const [timeB, setTimeB] = useState(0);
    const [timeC, setTimeC] = useState(0);
    const [timeD, setTimeD] = useState(0);
    const [timeE, setTimeE] = useState(0);
    const [timeF, setTimeF] = useState(0);
    const [timeG, setTimeG] = useState(0);
    const [timeH, setTimeH] = useState(0);
    const [timeI, setTimeI] = useState(0);
    const [timeJ, setTimeJ] = useState(0);

    const sections = [ 
        { name: 'A', time: timeA },
        { name: 'B', time: timeB },
        { name: 'C', time: timeC },
        { name: 'D', time: timeD },
        { name: 'E', time: timeE },
        { name: 'F', time: timeF },
        { name: 'G', time: timeG },
        { name: 'H', time: timeH },
        { name: 'I', time: timeI },
        { name: 'J', time: timeJ }, 
    ];

    const time = (buttonName) => {
        if (player) {
            const currentTime = player.getCurrentTime();
    
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
                case 'F':
                    setTimeF(currentTime);
                    localStorage.setItem('timeF', currentTime);
                    break;
                case 'G':
                    setTimeG(currentTime);
                    localStorage.setItem('timeG', currentTime);
                    break;
                case 'H':
                    setTimeH(currentTime);
                    localStorage.setItem('timeH', currentTime);
                    break;
                case 'I':
                    setTimeI(currentTime);
                    localStorage.setItem('timeI', currentTime);
                    break;
                case 'J':
                    setTimeJ(currentTime);
                    localStorage.setItem('timeJ', currentTime);
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
        const savedTimeF = localStorage.getItem('timeF');
        const savedTimeG = localStorage.getItem('timeG');
        const savedTimeH = localStorage.getItem('timeH');
        const savedTimeI = localStorage.getItem('timeI');
        const savedTimeJ = localStorage.getItem('timeJ');


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
        if (savedTimeF) {
            setTimeF(savedTimeF);
        }
        if (savedTimeG) {
            setTimeG(savedTimeG);
        }
        if (savedTimeH) {
            setTimeH(savedTimeH);
        }
        if (savedTimeI) {
            setTimeI(savedTimeI);
        }
        if (savedTimeJ) {
            setTimeJ(savedTimeJ);
        }

    }, []);

    return { sections, time, seekSection };
}