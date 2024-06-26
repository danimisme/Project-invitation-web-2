import { useState, useEffect } from 'react';
import './Countdown.css';
import CountdownSection from '../../ui/CountdownSection';

export default function Countdown() {
    const initialTime = 99999999;
    const [timeRemaining, setTimeRemaining] = useState(
        localStorage.getItem('timeRemaining') || initialTime
    );

    useEffect(() => {
        const timerId = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
                localStorage.setItem('timeRemaining', timeRemaining - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [timeRemaining]);

    const days = Math.floor(timeRemaining / 86400);
    const hours = Math.floor((timeRemaining % 86400) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="countdown">
            <div>
                <CountdownSection time={days} text="Hari" />
                <CountdownSection time={hours} text="Jam" />
                <CountdownSection time={minutes} text="Menit" />
                <CountdownSection time={seconds} text="Detik" />
            </div>
        </div>
    );
}
