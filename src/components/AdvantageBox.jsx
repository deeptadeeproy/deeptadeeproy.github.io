import React from "react";

function AdvantageBox(props) {
    return ( <div className="advantage-box">
        <img className="adv-img" src={props.imgSrc} alt="adv-icon" />
        <h4>{props.title}</h4>
        <p className="adv-desc">{props.desc}</p>
        </div>);
   
}

export default AdvantageBox;