import React, { useState, useEffect } from "react";
import "./App.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const App: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const nextYear = new Date(`January 1, ${now.getFullYear() + 1} 00:00:00`);
    const difference = nextYear.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-900 via-black to-indigo-900 text-white animate-bg-pan-slow">
      <h1 className="text-5xl font-extrabold mb-10 animate-fadeInAndRotate">
        Countdown to New Year 🎉
      </h1>
      <div className="flex space-x-8">
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <div className="flex flex-col items-center bg-blue-500 p-8 rounded-xl shadow-xl transform hover:scale-110 hover:rotate-6 hover:bg-blue-600 transition-all duration-500 ease-out animate-pulse">
              <span className="text-6xl font-extrabold">{timeLeft.days}</span>
              <span className="mt-2 text-xl">Days</span>
            </div>
            <div className="flex flex-col items-center bg-purple-500 p-8 rounded-xl shadow-xl transform hover:scale-110 hover:-rotate-6 hover:bg-purple-600 transition-all duration-500 ease-out animate-pulse">
              <span className="text-6xl font-extrabold">{timeLeft.hours}</span>
              <span className="mt-2 text-xl">Hours</span>
            </div>
            <div className="flex flex-col items-center bg-green-500 p-8 rounded-xl shadow-xl transform hover:scale-110 hover:rotate-6 hover:bg-green-600 transition-all duration-500 ease-out animate-pulse">
              <span className="text-6xl font-extrabold">
                {timeLeft.minutes}
              </span>
              <span className="mt-2 text-xl">Minutes</span>
            </div>
            <div className="flex flex-col items-center bg-red-500 p-8 rounded-xl shadow-xl transform hover:scale-110 hover:-rotate-6 hover:bg-red-600 transition-all duration-500 ease-out animate-pulse">
              <span className="text-6xl font-extrabold">
                {timeLeft.seconds}
              </span>
              <span className="mt-2 text-xl">Seconds</span>
            </div>
          </>
        ) : (
          <h2 className="text-3xl animate-bounce">Happy New Year! 🎆</h2>
        )}
      </div>
      <h2 className="mt-10 text-xl font-semibold flex items-center">
        <a
          href="https://x.com/codewithkara"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          with  CodeWithKara
        </a>
      </h2>
    </div>
  );
};

export default App;
