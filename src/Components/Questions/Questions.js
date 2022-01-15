import "./questions.css";
import "./logo.svg";
import React, { useState } from "react";
import qaData from "./qaData";
import styled, { css } from "styled-components";

function Questions() {
	const [isOpenAccord, setIsOpenAccord] = useState(null);
	const toggle = (i) => {
		if (isOpenAccord == i) {
			return setIsOpenAccord(null);
		}

		setIsOpenAccord(i);
	};

	const QaWrapper = styled.div`
		display: flex;
		width: 100vw;
		height: auto;
		align-items: center;
		flex-direction: column;
	`;
	const QaTitle = styled.h1`
		margin-bottom: 30px;
		font-size: 40px;
		text-align: center;
		color: var(--clr-gold);
		font-family: "Great Vibes", cursive;
		text-align: center;
	`;

	const Accordion = styled.div`
		background: var(--clr-white);
		border-radius: var(--radius);
		box-shadow: var(--light-shadow);
		padding: 1.5rem 1.5rem 1.5rem 1.5rem;
		width: 600px;
	`;

	const AccordionItem = styled.div`
		margin-bottom: 5px;
		padding: 10px 20px;
	`;

	const ItemTittle = styled.h1`
		text-transform: capitalize;
		font-size: 20px;
		margin-bottom: 0;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-1);
		margin-bottom: 5px;
	`;

	const AcContainer = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	`;

	return (
		<QaWrapper>
			<QaTitle>General Questions</QaTitle>
			<Accordion>
				{qaData.map((item, i) => (
					<AccordionItem>
						<AcContainer onClick={() => toggle(i)}>
							<ItemTittle>{item.question}</ItemTittle>
							<i
								className={
									isOpenAccord == i
										? "fas fa-angle-right move"
										: "fas fa-angle-right"
								}
							/>
						</AcContainer>
						<div
							className={
								isOpenAccord == i
									? "accordion-content show"
									: "accordion-content"
							}
						>
							{item.answer}
						</div>
					</AccordionItem>
				))}
			</Accordion>
		</QaWrapper>
	);
}

export default Questions;
