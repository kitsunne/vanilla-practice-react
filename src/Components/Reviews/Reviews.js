import "./reviews.css";
import React, { useState } from "react";
import authorList from "./authorList";
import styled from "styled-components";
import devices from "../../Propreties/sizes";

const Reviews = (props) => {
	const [authorIdx, setAuthorIdx] = useState(0);

	return (
		<ReviewsWrapper>
			<div style={{ textAlign: "center" }}>
				<h2>our reviews</h2>
				<Underline />
			</div>
			<Review>
				<ImgContainer>
					<Img id="person-img" src={authorList[authorIdx].img} />
				</ImgContainer>
				<InfoAuthor id="author" text={authorList[authorIdx].name}></InfoAuthor>
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
				>
					surprise me
				</ButtonRandom>
			</Review>
		</ReviewsWrapper>
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

const ReviewsWrapper = styled.section`
	@media ${devices.desktop} {
		max-width: var(--fixed-width);
	}
	@media ${devices.laptopL} {
		max-width: var(--fixed-width);
	}
	@media ${devices.laptop} {
		margin-top: 200px;
		width: 55vw;
		min-height: 65vh;
		display: grid;
		place-items: center;
	}
	@media ${devices.tablet} {
		width: 90vw;
		margin: 0 auto;
		min-height: 100vh;
		margin-top: 100px;
		display: flex;
		flex-direction: column;
	}
`;

const Underline = styled.div`
	width: 5rem;
	height: 0.25rem;
	background: var(--clr-primary-5);
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
`;

const Review = styled.article`
	background: var(--clr-white);
	padding: 1.5rem 2rem;
	border-radius: var(--radius);
	box-shadow: var(--light-shadow);
	transition: var(--transition);
	text-align: center;
	&:hover {
		box-shadow: var(--dark-shadow);
	}
`;

const ImgContainer = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin: 0 auto;
	margin-bottom: 1.5rem;
	&:before {
		content: "";
		width: 100%;
		height: 100%;
		background: var(--clr-primary-5);
		position: absolute;
		top: -0.25rem;
		right: -0.5rem;
		border-radius: 50%;
	}
	&:after {
		font-family: "Font Awesome 5 Free";
		font-weight: 900;
		content: "\f10e";
		position: absolute;
		top: 0;
		left: 0;
		width: 2.5rem;
		height: 2.5rem;
		display: grid;
		place-items: center;
		border-radius: 50%;
		transform: translateY(25%);
		background: var(--clr-primary-5);
		color: var(--clr-white);
	}
`;

export default Reviews;
