import "./countDownTimer.css";
import Timer from "./Timer";

const CountDownTimer = () => {
	return (
		<div className="wrapper-countdown">
			<div className="count-down-img-container">
				<img src="https://github.com/john-smilga/javascript-basic-projects/blob/master/12-countdown-timer/final/gift.jpeg?raw=true"></img>
			</div>
			<div className="info-container">
				<div className="countdown-header">
					<h1>OLD IPHONE GIVEAWAY</h1>
					<p>Giveaway Ends On Wednesday, 27 October 2021 11:30am</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Reprehenderit molestiae cum libero atque ut voluptate qui
						consectetur aliquid incidunt voluptatem quos, dolore, non commodi
						quaerat aliquam eligendi, quisquam totam blanditiis.
					</p>
					<Timer />
				</div>
			</div>
		</div>
	);
};

export default CountDownTimer;
