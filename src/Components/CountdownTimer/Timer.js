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
        <TimePeriod>{timerDays}</TimePeriod>
        <TimePeriodName>DAYS</TimePeriodName>
      </TimerBoard>
      <TimerBoard>
        <TimePeriod>{timerHours}</TimePeriod>
        <TimePeriodName>HOURS</TimePeriodName>
      </TimerBoard>
      <TimerBoard>
        <TimePeriod>{timerMins}</TimePeriod>
        <TimePeriodName>MINS</TimePeriodName>
      </TimerBoard>
      <TimerBoard>
        <TimePeriod>{timerSecs}</TimePeriod>
        <TimePeriodName>SECS</TimePeriodName>
      </TimerBoard>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.section`
  display: flex;
  margin: 30px 0 0 0;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
const TimerBoard = styled.div`
  background: var(--clr-grey-1);
  color: var(--clr-white);
  margin-right: 1rem;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const TimePeriod = styled.p`
  font-size: 20px;
  color: white;
  letter-spacing: var(--spacing);
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin: 2px;
  }
`;

const TimePeriodName = styled.p`
  color: white;
  font-size: 0.8rem;
  margin: 4px;
  letter-spacing: var(--spacing);
  @media screen and (max-width: 768px) {
    font-size: 7px;
    margin: 2px;
  }
`;

export default Timer;
