import React from "react";
import "../App.css";

function MailButton() {
  function openMailClient() {
    const email = "deeptadeeproy@yahoo.in";
    window.location.href = `mailto:${email}`;
  }
  return (
    <div className="mail-btn" onClick={openMailClient}>
      <img src="images/email.svg" className="mail-icon" alt="mail img"></img>
      <p>Email Me</p>
    </div>
  );
}

export default MailButton;
