import React, { useState } from "react";
import "./video.css";

const Video = ({ url, playing }) => {
	return (
		<div className="video-container">
			<video
				src={url}
				type="video/mp4"
				id="background-video"
				width="100%"
				playing={playing}
				loop
				muted
				autoplay
			/>
		</div>
	);
};

export default Video;
