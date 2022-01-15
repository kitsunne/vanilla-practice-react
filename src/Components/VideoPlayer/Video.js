import React, { useState } from "react";
import "./video.css";

const Video = () => {
	return (
		<div className="video-container">
			<video width="500" height="500" controls>
				<source
					src="https://vannilla-js-basic-project-9-video-preloader.netlify.app/video.mp4"
					type="video/mp4"
				></source>
			</video>
		</div>
	);
};

export default Video;
