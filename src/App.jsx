import "./App.css";
import { useState, useEffect } from "react";
import { getPadTime } from "./getPadtime";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0);
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    }
  }, [timeLeft, isCounting]);

  const handleStart = () => {
    if (timeLeft === 0)
      setTimeLeft(25 * 60);
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const handleReset = () => {
    setIsCounting(false);
    setTimeLeft(25 * 60);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className='h1'>Pomodoro</h1>
        <div className="logo">
          <svg width="45" height="55" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25.5" stroke="black" />
            <path d="M12.0327 36V34.2741L18.5142 27.179C19.2749 26.348 19.9013 25.6257 20.3935 25.0121C20.8857 24.392 21.25 23.8104 21.4865 23.267C21.7294 22.7173 21.8509 22.142 21.8509 21.5412C21.8509 20.8509 21.6847 20.2532 21.3523 19.7482C21.0263 19.2433 20.5788 18.8533 20.0099 18.5785C19.4411 18.3036 18.8018 18.1662 18.0923 18.1662C17.3381 18.1662 16.6797 18.3228 16.1172 18.636C15.5611 18.9428 15.1296 19.3743 14.8228 19.9304C14.5224 20.4865 14.3722 21.1385 14.3722 21.8864H12.1094C12.1094 20.7358 12.3746 19.7259 12.9052 18.8565C13.4357 17.9872 14.158 17.3097 15.0721 16.8239C15.9925 16.3381 17.0249 16.0952 18.169 16.0952C19.3196 16.0952 20.3391 16.3381 21.2276 16.8239C22.1161 17.3097 22.8129 17.9648 23.3178 18.7894C23.8228 19.614 24.0753 20.5312 24.0753 21.5412C24.0753 22.2635 23.9442 22.9698 23.6822 23.6602C23.4265 24.3441 22.979 25.108 22.3398 25.9517C21.707 26.7891 20.8281 27.8118 19.7031 29.0199L15.2926 33.7372V33.8906H24.4205V36H12.0327ZM34.1117 36.2685C32.9867 36.2685 31.9736 36.0447 31.0723 35.5973C30.171 35.1499 29.4487 34.5362 28.9054 33.7564C28.362 32.9766 28.0648 32.0881 28.0137 31.0909H30.3148C30.4043 31.9794 30.807 32.7145 31.5229 33.2962C32.2452 33.8714 33.1081 34.1591 34.1117 34.1591C34.9171 34.1591 35.633 33.9705 36.2594 33.5934C36.8922 33.2163 37.3876 32.6985 37.7456 32.0401C38.1099 31.3754 38.2921 30.6243 38.2921 29.7869C38.2921 28.9304 38.1035 28.1665 37.7264 27.4954C37.3557 26.8178 36.8443 26.2841 36.1923 25.8942C35.5403 25.5043 34.7956 25.3061 33.9583 25.2997C33.3574 25.2933 32.7406 25.386 32.1078 25.5778C31.475 25.7631 30.954 26.0028 30.5449 26.2969L28.3205 26.0284L29.5094 16.3636H39.7111V18.473H31.5037L30.8134 24.2642H30.9285C31.3312 23.9446 31.8361 23.6793 32.4434 23.4684C33.0506 23.2575 33.6834 23.152 34.3418 23.152C35.5435 23.152 36.6142 23.4396 37.5538 24.0149C38.4998 24.5838 39.2413 25.3636 39.7782 26.3544C40.3216 27.3452 40.5932 28.4766 40.5932 29.7486C40.5932 31.0014 40.312 32.12 39.7495 33.1044C39.1934 34.0824 38.4263 34.8558 37.4483 35.4247C36.4704 35.9872 35.3581 36.2685 34.1117 36.2685Z" fill="black" />
          </svg>
        </div>
      </nav>
      <hr />
      <h2>Timer</h2>
      <div className="app">
        <div className="timer">
          <span className="minutes">{minutes}<span className="minutes-text">min</span></span>
          <span className="seconds">{seconds}<span className="seconds-text">sec</span></span>
        </div>
        <div className="buttons">
          {isCounting ? (<button onClick={handleStop}>Stop</button>) : (<button onClick={handleStart}>Start</button>)}
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="paragraph-text">
          <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Repellendus ratione deleniti quisquam vitae quo illo alias, dignissimos sit, eaque odio ab, dolorum quos recusandae cum enim. Vero optio recusandae ullam!</p>
        </div>
        <footer>Code by Jenny Nguyen Öberg.<br /> Design credit <a href="https://dribbble.com/ruslanlatypov" target="_blank">Ruslanlatypov</a> on Dribble.</footer>
      </div>
    </>
  )
};

export default App;