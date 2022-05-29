import React from "react";
import "./dashboard.css";
import svg from "./landing.svg";
import MegaSvg from "./MEGAVERSE.svg";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  return (
    <div
      className="dashboard"
      style={{
        backgroundImage: `url(${svg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="header">
        <span style={{ fontSize: "2rem" }}>SlüchAnalytics</span>
        <div className="text">
          <span>Log In</span>
          <span>Sign Up</span>
        </div>
      </div>
      <div className="content">
        <div className="left">
          <span style={{ fontSize: "5rem" }}>SlüchAnalytics</span>
          <div className="leftText">
            <span className="leftDescription">
              <span style={{ fontWeight: "bold", fontSize: "1.6rem" }}>AI</span>{" "}
              companion that monitors and identifies if you are slouching.
              <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {" "}
                SlouchAnalytics
              </span>{" "}
              will send a notification to alert you.
            </span>
          </div>
          <div className="buttonWrapper">
            <button
              className="button1"
              onClick={() => {
                history.push("/cam_config");
                window.location.reload();
              }}
            >
              <span>Get Started</span>
            </button>

            <div className="line">
              <Line />
            </div>
          </div>
        </div>
        <div className="right" style={{ width: "100%" }}>
          <div
            style={{
              backgroundImage: `
          url(${MegaSvg})`,
              width: 800,
              height: 800,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <svg
      width="312"
      height="2"
      viewBox="0 0 312 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="312" y2="1" stroke="white" stroke-width="2" />
    </svg>
  );
};

export default Dashboard;
