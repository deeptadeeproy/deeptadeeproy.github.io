import React from "react";
import useSound from "../utils/useSound";
import AdvantageBox from "./AdvantageBox";
import advArr, { skills, skillIcons } from "../assets/advantages";
import "../App.css";


function Introduction(props) {
  const playHoverSound = useSound("./sci-fi-hover.wav");

  return (
    <div
      className={`intro-div ${
        props.page === "home" ? "intro-home" : "intro-skills"
      }`}
    >
      <p>{props.hiText}</p>
      <h1>{props.introText}</h1>
      {props.resumeFilePath ? (
        <a
          className="download-btn"
          href={props.resumeFilePath}
          onClick={playHoverSound}
          download
        >
          DOWNLOAD RESUME
        </a>
      ) : null}
      {props.page === "skills" ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ul className="adv-ul">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <div style={{ display: "ruby", width: "30%" }}>
              {skillIcons.map((icon, index) => (
                <img key={index} className="skill-icon" src={icon}></img>
              ))}
            </div>
          </div>

          <p style={{ marginTop: "10px" }}>&lt;Advantages&gt;</p>
          <div className="advantages-div">
            {advArr.map((adv, index) => (
              <AdvantageBox
                key={index}
                imgSrc={adv.icon}
                title={adv.title}
                desc={adv.desc}
              ></AdvantageBox>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Introduction;
