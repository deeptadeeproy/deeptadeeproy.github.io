import React from "react";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Introduction from "./Intro";
import ParticlePoints from "./ParticlePoints";

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
            <div className="aura" />
            <Canvas camera={{ position: [0, 0, 3] }}>
              <OrbitControls enableZoom={false} />
              <ParticlePoints />
            </Canvas>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Content;
