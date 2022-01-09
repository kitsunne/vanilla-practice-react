import { useState } from "react";
import react from "react";
import "./generator.css";
import data from "./data";

const Generator = () => {
	const [count, setCount] = useState(5);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		if (count <= 0) {
			amount = 1;
		}
		if (count > 8) {
			amount = 8;
		}
		setText(data.slice(0, amount));
	};

	return (
		<div className="generator-wrapper">
			<h1 className="generator-header">TIRED OF BORING LOREM IPSUM?</h1>
			<form class="generator-form" onSubmit={handleSubmit}>
				<label for="amount">Paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button className="btn-g" type="submit">
					Generate
				</button>
			</form>
			<div className="paragraph">
				{data.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</div>
		</div>
	);
};

export default Generator;
