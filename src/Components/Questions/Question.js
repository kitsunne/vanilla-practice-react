import React, { useState } from "react";
import styled from "styled-components";
import devices from "../../Properties/sizes";

const Question = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<QuestionWrapper>
			<QuestionHeader>
				<h4>{title}</h4>
				<QuestionButton onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? (
						<ChangedBtn className="fas fa-angle-right move" />
					) : (
						<DefaultBtn className="fas fa-angle-right" />
					)}
				</QuestionButton>
			</QuestionHeader>
			{showInfo && <QuestionInfo>{info}</QuestionInfo>}
		</QuestionWrapper>
	);
};

const QuestionWrapper = styled.article`
	@media ${devices.laptop} {
		padding: 1rem 1.5rem;
		border: 2px solid var(--clr-grey-special);
		margin-bottom: 1rem;
		border-radius: var(--radius);
		box-shadow: var(--light-shadow);
		width: 30vw;
		border: 2px solid var(--clr-primary-5);
	}
	@media ${devices.mobileM} {
		padding: 1rem 1rem;
		margin-bottom: 1rem;
		border: 1px solid var(--clr-primary-5);
	}
	@media ${devices.mobileS} {
		padding: 1rem 1rem;
		margin-bottom: 1rem;
		border: 1px solid var(--clr-primary-5);
	}
`;
const QuestionHeader = styled.header`
	@media ${devices.mobileM} {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const QuestionInfo = styled.p`
	@media ${devices.laptop} {
		color: var(--clr-grey-3);
		margin-bottom: 0;
		margin-top: 0.5rem;
	}
`;

const QuestionButton = styled.button`
	@media ${devices.laptop} {
		background: transparent;
		border-color: transparent;
		width: 2rem;
		height: 2rem;
		background: var(--clr-grey-special);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: var(--clr-red-special);
		cursor: pointer;
		margin-left: 1rem;
		align-self: center;
		min-width: 2rem;
	}
`;
const ChangedBtn = styled.i`
	transform: rotate(270deg);
	color: var(--clr-gold);
	font-size: 25px;
	font-weight: bold;
`;
const DefaultBtn = styled.i`
	font-size: 25px;
	font-weight: bold;
`;

export default Question;
