import { useState, useEffect } from "react";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    function formatTime() {
        const hours = time.getHours() % 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`;
    }
    function padZero(num) {
        return (num < 10 ? "0" + num : num);
    }
    return (
        <div className="clock-container">
            <p>
                {formatTime()}
            </p>
        </div>
    );
}

export default Clock;