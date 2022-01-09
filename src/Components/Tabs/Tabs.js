import "./tabs.css";
import React from "react";
import TabComponent from "./TabComponent";

const Tabs = () => {
	return (
		<div className="wrapper-tabs">
			<div className="header-tabs">
				<h1>About</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
					aperiam!
				</p>
			</div>
			<div className="content-tabs-container">
				<div className="img-tabs-container">
					<img
						src="https://github.com/john-smilga/javascript-basic-projects/blob/master/11-tabs/final/hero-bcg.jpeg?raw=true"
						alt="image"
					></img>
				</div>
				<TabComponent />
			</div>
		</div>
	);
};

export default Tabs;
