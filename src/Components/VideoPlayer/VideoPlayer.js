import React from "react";
import styled from "styled-components";

const VideoPlayer = () => {
  return (
    <VideoPlayerWrapper>
      <div className="video-container">
        <video width="600" height="600" controls>
          <source
            src="https://vannilla-js-basic-project-9-video-preloader.netlify.app/video.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </VideoPlayerWrapper>
  );
};

const VideoPlayerWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

export default VideoPlayer;
