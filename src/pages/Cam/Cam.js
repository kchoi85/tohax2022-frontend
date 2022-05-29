import React from "react";
import BackSVG from "../Dashboard/landing.svg";
import { Bell, User, ChevronDown } from "react-feather";
import "./cam.css";
import { useHistory } from "react-router-dom";

const Cam = () => {
  const history = useHistory();
  return (
    <div
      className="dashboard"
      style={{
        backgroundImage: `url(${BackSVG})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="headerCam">
        <span
          style={{ fontSize: "2rem" }}
          onClick={() => {
            history.push("/");
            window.location.reload();
          }}
        >
          SlüchAnalytics
        </span>
        <div style={{ display: "flex", gap: 30 }}>
          <Bell size="36" color="white" style={{ cursor: "pointer" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div className="icon">
              <User size="24" color="white" style={{ cursor: "pointer" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span>You</span>
              <ChevronDown
                size="24"
                color="white"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="CamContent">
        <span style={{ fontSize: "1.6rem" }}>Camera</span>
      </div>
    </div>
  );
};

export default Cam;
