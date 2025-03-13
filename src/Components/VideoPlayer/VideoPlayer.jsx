// import React, { useRef } from 'react'
// import './VideoPlayer.css'
// import student_video from '../../assets/tech_video.mp4'

// const VideoPlayer = ({hideVideoPlayer, setHideVideoPlayer}) => {
//   const player = useRef()
//   const handleHideVideoPlayer= (e) => {
//       if (e.target === player.current){
//         setHideVideoPlayer(true)
//       }
//   }
//   return (
//     <div className={`video-player ${hideVideoPlayer ? 'hide': ''}`} ref={player} onClick={handleHideVideoPlayer}>
//         <video src={student_video} autoPlay muted controls></video>
//     </div>
//   )
// }

// export default VideoPlayer

import React, { useRef } from "react";
import './VideoPlayer.css'
import student_video from "../../assets/tech_video.mp4"; // Your video source

const VideoPlayer = ({ hideVideoPlayer, setHideVideoPlayer }) => {
  const player = useRef();
  const videoRef = useRef();

  // Handle hiding video player and muting the video immediately
  const handleHideVideoPlayer = (e) => {
    // Check if the click is outside the video player
    if (player.current && !player.current.contains(e.target)) {
      videoRef.current.muted = true; // Mute video immediately
      setHideVideoPlayer(true);
    }
  };

  // Mute video when the close button is clicked
  const closeVideo = () => {
    videoRef.current.muted = true; // Mute video immediately
    setHideVideoPlayer(true);
  };

  return (
    <div className={`video-overlay ${hideVideoPlayer ? "hide" : ""}`} onClick={handleHideVideoPlayer}>
      <div className={`video-player ${hideVideoPlayer ? "hide" : ""}`} ref={player}>
        <button className="close-btn" onClick={closeVideo}>
          X
        </button>
        <video ref={videoRef} src={student_video} autoPlay controls muted={hideVideoPlayer}></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
