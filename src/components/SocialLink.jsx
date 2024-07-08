import React from "react";

function SocialLink({ imgSrc, imgLink }) {
  return (
    <a href={imgLink} target="_blank" rel="noopener noreferrer">
      <img className="socialLinkImg" src={imgSrc} alt="Social link icon" />
    </a>
  );
}

export default SocialLink;
