import React from "react";
import "../App.css";
import Introduction from "./Intro";


function Content(props) {

  return (
    <div className="content-div">
      <div className="container-div">
        <Introduction
          introText={props.introText}
          resumeFilePath={props.resumeFilePath}
          hiText={props.hiText}
          page={props.page}
        ></Introduction>
        {props.page === "home" ? (
          <div className="particle-sphere">
            <img className="whatsapp-qr aura" src="/images/wa_qr.png"></img>
            <label>SCAN TO CONNECT</label>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Content;
