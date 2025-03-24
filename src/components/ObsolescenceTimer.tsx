
import React, { useState, useEffect } from 'react';

const ObsolescenceTimer: React.FC = () => {
  const getRandomTime = () => {
    // Return a random time between 5 to 30 days
    const days = 5 + Math.floor(Math.random() * 25);
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [time, setTime] = useState(getRandomTime());
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Occasionally cause a glitch in the timer
    const glitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() < 0.2; // 20% chance of glitching
      
      if (shouldGlitch) {
        setGlitching(true);
        // Temporary random changes to the timer
        setTime(prevTime => {
          const tempTime = {
            ...prevTime,
            days: prevTime.days + (Math.random() < 0.5 ? -1 : 1),
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 60),
            seconds: Math.floor(Math.random() * 60)
          };
          
          // Ensure days doesn't go below 0
          if (tempTime.days < 0) tempTime.days = 0;
          
          return tempTime;
        });
        
        // Revert the glitch after a short time
        setTimeout(() => {
          setGlitching(false);
        }, 500);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  const formatDigit = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="mt-6 text-center">
      <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-cyber-blue">
        TIME UNTIL HUMAN OBSOLESCENCE
      </h3>
      <div className={`cyber-box mx-auto inline-flex items-center justify-center gap-4 px-6 py-3 text-2xl font-bold ${glitching ? 'animate-text-glitch' : ''}`}>
        <div className="flex flex-col items-center">
          <span className={`text-3xl ${glitching ? 'text-cyber-red' : 'text-cyber-blue'}`}>{formatDigit(time.days)}</span>
          <span className="text-xs font-normal uppercase text-gray-400">Days</span>
        </div>
        <span className="text-cyber-blue">:</span>
        <div className="flex flex-col items-center">
          <span className={`text-3xl ${glitching ? 'text-cyber-purple' : 'text-cyber-blue'}`}>{formatDigit(time.hours)}</span>
          <span className="text-xs font-normal uppercase text-gray-400">Hours</span>
        </div>
        <span className="text-cyber-blue">:</span>
        <div className="flex flex-col items-center">
          <span className={`text-3xl ${glitching ? 'text-cyber-red' : 'text-cyber-blue'}`}>{formatDigit(time.minutes)}</span>
          <span className="text-xs font-normal uppercase text-gray-400">Minutes</span>
        </div>
        <span className="text-cyber-blue">:</span>
        <div className="flex flex-col items-center">
          <span className={`text-3xl ${glitching ? 'text-cyber-purple' : 'text-cyber-blue'}`}>{formatDigit(time.seconds)}</span>
          <span className="text-xs font-normal uppercase text-gray-400">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default ObsolescenceTimer;
