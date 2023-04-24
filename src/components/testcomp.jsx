import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">00 : 00</div>;
  }

  let minutes = Math.floor(remainingTime / 60);
  minutes = minutes < 10 ? "0" + minutes + " : " : minutes + " : ";

  return (
    <div className="timer" style={{width: '50px'}}>
      
      <div className="value" style={{ display: 'inline-block', width: '66%'}}>{minutes}</div>
      <div className="value" style={{ display: 'inline-block', width: '34%'}}>{remainingTime}</div>

    </div>
  );
};

export const TestComp = () => {
  const [time, setTime] = useState(0);
  return (
    <div className="App ml-11 mt-5">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={12}
          size={130}
          colors={["#0D21A1","#0069E4", "#00E6E5", "#FFFFFF"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 2 })}
          strokeWidth={26}
          strokeLinecap={"butt"}
          onUpdate={(remainingTime) => setTime(remainingTime)}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};
