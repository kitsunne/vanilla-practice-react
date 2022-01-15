import "./reviews.css";
import React, { useState } from "react";
import authorList from "./authorList";

const Reviews = () => {
	const [authorIdx, setAuthorIdx] = useState(0);
	console.log(authorIdx);
	return (
		<section className="container-reviews">
			<div className="title-reviews">
				<h2>our reviews</h2>
				<div className="underline"></div>
			</div>
			<article className="review">
				<div className="img-container">
					<Img id="person-img" src={authorList[authorIdx].img} />
				</div>
				<InfoAuthor id="author" text={authorList[authorIdx].name} />
				<InfoJob id="job" text={authorList[authorIdx].job} />
				<InfoContent id="info" text={authorList[authorIdx].text} />
				<div className="button-container">
					<ButtonSwitch
						text={<i className="prev-btn fas fa-chevron-left" />}
						onClick={() => setAuthorIdx(authorList === 0 ? 0 : authorIdx - 1)}
					/>
					<ButtonSwitch
						text={<i className=" next-btn fas fa-chevron-right" />}
						onClick={() =>
							setAuthorIdx(
								authorIdx >= authorList.length - 1 ? 0 : authorIdx + 1
							)
						}
					/>
				</div>
				<ButtonRandom
					text="surprise me"
					onClick={() =>
						setAuthorIdx(Math.floor(Math.random() * authorList.length))
					}
				/>
			</article>
		</section>
	);
};

const Img = ({ src }) => {
	return <img src={src} id="person-img" alt="image" />;
};
const InfoAuthor = ({ text }) => {
	return <h4 id="author">{text}</h4>;
};
const InfoJob = (props) => {
	return <p id="job">{props.text}</p>;
};
const InfoContent = ({ text }) => {
	return <p id="info">{text}</p>;
};

const ButtonRandom = ({ text, onClick }) => {
	return (
		<button className="random-btn" onClick={onClick}>
			{text}
		</button>
	);
};

const ButtonSwitch = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>;
};

export default Reviews;
