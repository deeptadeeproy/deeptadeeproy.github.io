import React from "react";
import Content from "../components/Content";

function Skills() {
  const introText = "Skills I possess as a specialist";
  const hiText = "<Skills>";
  const page = "skills";

  return (
    <section id="skills" className="content-div">
      <Content
        style={{ height: "90vh" }}
        introText={introText}
        hiText={hiText}
        page={page}
      ></Content>
    </section>
  );
}

export default Skills;
