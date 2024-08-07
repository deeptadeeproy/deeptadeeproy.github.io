import React from "react";
import MailButton from "./MailButton";
import SocialLink from "./SocialLink";
import "../App.css";

function Footer() {
  const socialImgs = [
    {
      img: "images/github.svg",
      link: "https://github.com/deeptadeeproy",
    },
    {
      img: "images/linkedin.svg",
      link: "https://www.linkedin.com/in/deeptadeeproy/",
    },
  ];

  return (
    <div className="footer">
      <MailButton></MailButton>
      <a className="whatsapp-icon" href="https://wa.me/919073840430">
        <img src="images/whatsapp.svg" className="mail-icon" alt="mail img"></img>
      </a>
      <div>
        {socialImgs.map((item, index) => (
          <SocialLink key={index} imgSrc={item.img} imgLink={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
