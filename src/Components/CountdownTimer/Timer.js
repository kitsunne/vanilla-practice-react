import React, { useEffect, useRef, useState } from "react";
import "./timer.css";

const Timer = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMins, setTimerMins] = useState("00");
	const [timerSecs, setTimerSecs] = useState("00");

	let interval = useRef();

	const startTimer = () => {
		const countdownDate = new Date("October 31,2021 11:30:00").getTime();
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
		<div className="deadline">
			<section className="deadline-format">
				<p className="date">{timerDays}</p>
				<p>DAYS</p>
			</section>
			<section className="deadline-format">
				<p>{timerHours}</p>
				<p>HOURS</p>
			</section>
			<section className="deadline-format">
				<p>{timerMins}</p>
				<p>MINS</p>
			</section>
			<section className="deadline-format">
				<p>{timerSecs}</p>
				<p>SECS</p>
			</section>
		</div>
	);
};

export default Timer;
