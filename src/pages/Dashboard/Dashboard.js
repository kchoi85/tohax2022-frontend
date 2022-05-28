import React from "react";
import * as ml5 from "ml5";
import Webcam from "react-webcam";
import styles from "./dashboard.css";

const WIDTH = 500;
const HEIGHT = 350;

const Users = () => {
  const webcamRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    let detectionInterval;
    const ctx = canvasRef.current.getContext("2d");

    // model load callback
    const modelLoadedCb = () => {
      webcamRef.current.video.width = WIDTH;
      webcamRef.current.video.height = HEIGHT;
      canvasRef.current.width = WIDTH;
      canvasRef.current.height = HEIGHT;

      detectionInterval = setInterval(() => {
        detect();
      }, 200);
    };

    /// load poseNet model
    const poseNet = ml5.poseNet(webcamRef.current.video, modelLoadedCb);

    // detect method
    const detect = () => {
      if (webcamRef.current.video.readyState !== 4) {
        console.warn("Video not ready yet");
        return;
      }

      poseNet.on("pose", (results) => {
        ctx?.clearRect(0, 0, WIDTH, HEIGHT);
        results.forEach((pose) => {
          if (pose?.pose?.score > 0.2) {
            ctx.strokeStyle = "#66ff00";
            ctx.lineWidth = 2;

            for (let i = 0; i < 17; i++) {
              ctx.beginPath();
              ctx.arc(
                pose.pose.keypoints[i].position.x,
                pose.pose.keypoints[i].position.y,
                3,
                3,
                3 * Math.PI
              );
              ctx.stroke();
            }
          }
        });
      });
    };

    return () => {
      if (detectionInterval) {
        clearInterval(detectionInterval);
      }
    };
  }, []);

  return (
    <div>
      <Webcam ref={webcamRef} width={WIDTH} height={HEIGHT} />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          width: WIDTH,
          height: HEIGHT,
        }}
      />
    </div>
  );
};

export default Users;
