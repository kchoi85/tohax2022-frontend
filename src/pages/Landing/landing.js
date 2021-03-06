import React from "react";
import "./landing.css"

import "./landing.css"
import logo from "../../assets/logo.svg"
import background from "../../assets/background.svg"
import line from "../../assets/line.svg"


const landing = () => {
    return (

        <div style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
        height:2000,width:2000
        }}>
          <div className = "landing">
            <div className="headings">
            <h1>Slouch Analytics</h1>
            <h4>Monitors and identifies if you are slouching. SlouchAnalytics will send a notification to alert you.</h4>
            <button>Get Started</button>
            </div>
            <img src={logo} alt="logo" width="581" height="581"></img>
        </div>
        </div>
        

    );
};



export default landing