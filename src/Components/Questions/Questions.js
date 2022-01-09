import "./questions.css";
import "./logo.svg";
import React, { useState } from "react";

const accordData = [
	{
		question: "Do You Accept All Major Credit Cards?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		question: "Do You Suppport Local Farmers?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		question: "Do You Use Organic Ingredients?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
];

function Questions() {
	const [isOpenAccord, setIsOpenAccord] = useState(null);
	const toggle = (i) => {
		if (isOpenAccord == i) {
			return setIsOpenAccord(null);
		}

		setIsOpenAccord(i);
	};

	return (
		<div className="wrapper">
			<h1 className="title-qa">General Questions</h1>
			<div className="accordion">
				{accordData.map((item, i) => (
					<div className="accordion-item">
						<div
							className="accordion-title-container"
							onClick={() => toggle(i)}
						>
							<h1 className="accordion-title">{item.question}</h1>
							<i
								className={
									isOpenAccord == i
										? "fas fa-angle-right move"
										: "fas fa-angle-right"
								}
							/>
						</div>
						<div
							className={
								isOpenAccord == i
									? "accordion-content show"
									: "accordion-content"
							}
						>
							{item.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Questions;
