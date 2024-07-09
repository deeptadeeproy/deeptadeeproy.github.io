import React from "react";
import Content from "../components/Content";

function Home() {
  const introText =
    "My name is Deeptadeep Roy, I am a full stack React+Java Developer from India.";
  const resumeFilePath = "/DeeptadeepRoy_resume.pdf";
  const hiText = "<Hello, world>";
  const page = "home";

  return (
    <section id="home">
      <Content
        introText={introText}
        resumeFilePath={resumeFilePath}
        hiText={hiText}
        page={page}
      ></Content>
    </section>
  );
}

export default Home;
