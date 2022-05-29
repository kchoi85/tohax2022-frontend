import React from "react";
import "./problem.css"

import problemback from "../../assets/problemback.svg"

import article from "../../assets/article.svg"

const problem = () => {
    return (

        <div style={{ backgroundImage:`url(${problemback})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
        height:1500,width:1500
        }}>

        <div className="problem">
            <div className="description">
                <h1>Problem</h1>
                <h2>We all unknowingly slouch during a busy day at work or when we’re completing an assignment. You might be slouching right now reading this!</h2>
                <div className="article">
                    <h2>Approximately 80% of adults suffer from back pain and 70% of adults suffer from neck pain. The leading cause of back and neck pain is poor posture. </h2>
                    <img src={article} alt="logo" width="200" height="200"></img>

                </div>
            </div>

        </div>  
      </div>
        

    );
};



export default problem