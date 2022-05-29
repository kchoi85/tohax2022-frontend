import React from "react";
import "./benefits.css"

import problemback from "../../assets/problemback.svg"
import article from "../../assets/article.svg"


const benefits = () => {
    return (

        <div style={{ backgroundImage:`url(${problemback})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
        height:1500,width:1500
        }}>
            <div className="headings">
            <h1>Benefits</h1>
            <div className="list">
                <ul>
                    <li>Reduced low back pain</li>
                    <li>Fewer headaches</li>
                    <li>Increased energy levels</li>
                    <li>Less tension in your shoulders and neck</li>
                    <li>Decreased risk of abnormal wearing of the joint surfaces</li>
                    <li>Increased lung capacity</li>
                    <li>Improved circulation and digestion</li>
                    <li> Reduced TMJ</li>   
                </ul>

                <img src={article} alt="logo" width="200" height="200"></img>


            </div>

        </div>



        </div>
        
    );
};



export default benefits