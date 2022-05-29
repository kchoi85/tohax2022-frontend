import React from "react";
import BackSVG from "./Config.svg";
import "./camconfig.css";
import Webcam from "react-webcam";

const CamConfig = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackSVG})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="connecting">
        <span className="headerText">Connecting</span>
      </div>
      <div className="camWrapper">
        <Webcam className="cam" />
      </div>
      <div className="dropdownWrapper">
        <select className="dropdown1">
          <option value="camera">
            <span>Logitek WebCam 2.0</span>
          </option>
        </select>
        <select className="dropdown2">
          <option value="position" className="d2Text">
            Positions
          </option>
          <option value="saab" className="d2Text">
            Front of monitor
          </option>
          <option value="mercedes" className="d2Text">
            Left of monitor
          </option>
          <option value="audi" className="d2Text">
            Right of monitor
          </option>
          <option value="audi" className="d2Text">
            Above left of monitor
          </option>
          <option value="audi" className="d2Text">
            Above right of monitor
          </option>
        </select>
      </div>
    </div>
  );
};

export default CamConfig;
