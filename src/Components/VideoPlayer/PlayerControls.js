import React from "react";
import "./playerControls.css";

const PlayerControls = ({ playing, onPlayPause }) => {
	return (
		<div>
			<button className="switch-btn" onClick={onPlayPause}>
				<span>play</span>
				<span>pause</span>
				<span className={playing ? "switch slide-act" : "switch"}></span>
			</button>
		</div>
	);
};

export default PlayerControls;
