import React from "react";
import MailButton from "./MailButton";
import SocialLink from "./SocialLink";
import "../App.css";

function Footer() {
  const socialImgs = [
    {
      img: "/assets/github.svg",
      link: "https://github.com/deeptadeeproy",
    },
    {
      img: "/assets/linkedin.svg",
      link: "https://www.linkedin.com/in/deeptadeeproy/",
    },
  ];

  return (
    <div className="footer">
      <MailButton></MailButton>
      <div>
        {socialImgs.map((item, index) => (
          <SocialLink key={index} imgSrc={item.img} imgLink={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
