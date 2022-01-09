import Video from "./Video";
import PlayerControls from "./PlayerControls";
import "./videoPlayer.css";
import React, { useState } from "react";

const VideoPlayer = () => {
	const [playing, setPlaying] = useState(true);

	return (
		<div className="player-container">
			<Video
				playing={playing}
				url={
					"https://vannilla-js-basic-project-9-video-preloader.netlify.app/video.mp4"
				}
			/>
			<PlayerControls
				playing={playing}
				onPlayPause={() => setPlaying(!playing)}
			/>
		</div>
	);
};

export default VideoPlayer;
