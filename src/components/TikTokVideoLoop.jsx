import React from "react";


const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/video6.mp4",
];

const TikTokVideoLoop = () => {
  return (
    <div className="video-grid">
      {videos.map((videoSrc, index) => (
        <video
          key={index}
          src={videoSrc}
          controls
          muted = {false}
          className="video-item"
        />
      ))}
    </div>
  );
};

export default TikTokVideoLoop;
