import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMins, setTimerMins] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 30,2022 11:30:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMins(mins);
        setTimerSecs(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <TimerWrapper>
      <TimerBoard>
        <h1>{timerDays}</h1>
        <p>DAYS</p>
      </TimerBoard>
      <TimerBoard>
        <h1>{timerHours}</h1>
        <p>HOURS</p>
      </TimerBoard>
      <TimerBoard>
        <h1>{timerMins}</h1>
        <p>MINS</p>
      </TimerBoard>
      <TimerBoard>
        <h1>{timerSecs}</h1>
        <p>SECS</p>
      </TimerBoard>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.section`
  display: flex;
  margin: 30px 0 0 0;
`;
const TimerBoard = styled.div`
  background: var(--clr-grey-1);
  color: var(--clr-white);
  margin-right: 1rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1rem;
    color: white;
    letter-spacing: var(--spacing);
  }
  p:nth-child(even) {
    color: white;
    font-size: 0.8rem;
    margin: 4px;
    letter-spacing: var(--spacing);
  }
`;

export default Timer;
