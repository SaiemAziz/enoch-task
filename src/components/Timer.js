import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { useEffect, useState } from "react";

const Timer = ({endTime}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

//   const deadline = "December, 31, 2022";

  const getTime = () => {
    const time = Date.parse(endTime) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(endTime), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer" style={{display: 'flex', color: "white", fontSize: '20px', justifyContent: 'space-between'}}>
      
        <div className="box">
          <p id="day">{days < 10 ? "0" + days : days}</p>
        </div>
        <p>:</p>
        <div className="box">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        </div>
        <p>:</p>
        <div className="box">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        </div>
        <p>:</p>
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}s</p>
        </div>
      
    </div>
  );
};

export default Timer