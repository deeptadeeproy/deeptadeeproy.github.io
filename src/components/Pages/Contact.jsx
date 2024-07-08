import React, { useState } from "react";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-content">
        <p>&lt;Contact&gt;</p>
        <div className="contact-block">
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
}

export default Contact;
