import React, { useState } from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

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
