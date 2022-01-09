import React from "react";
import "./slider.css";
import { useState } from "react";
import { sliderContent } from "./sliderContent";

const Slider = () => {
	const [slideIdx, setSlideIdx] = useState(0);

	return (
		<section>
			<div className="slider-container">
				<img src={sliderContent[slideIdx].img} class="slide" alt="image" />
			</div>
			<div className="btn-container-slider">
				{slideIdx > 0 ? (
					<ButtonScroll
						onClick={() => setSlideIdx(slideIdx === 0 ? 0 : slideIdx - 1)}
						text="prev"
					/>
				) : null}

				{slideIdx >= sliderContent.length - 1 ? null : (
					<ButtonScroll
						onClick={() =>
							setSlideIdx(
								slideIdx >= sliderContent.length - 1 ? 0 : slideIdx + 1
							)
						}
						text="next"
					/>
				)}
			</div>
		</section>
	);
};

const ButtonScroll = ({ text, onClick }) => {
	return (
		<button class="next-prev-btn" onClick={onClick}>
			{text}
		</button>
	);
};

export default Slider;
