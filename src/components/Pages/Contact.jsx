import React, { useState } from "react";
import emailjs from 'emailjs-com';
import useSound from "../../utils/useSound";

function Contact() {

  const playHoverSound = useSound("src/assets/sci-fi-hover.wav");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    playHoverSound();

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      console.log("EmailJS Response:", response);
      alert("Your mail is sent!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Oops... Could not send the message :(");
    }

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-content">
        <p>&lt;Contact&gt;</p>
        <div className="contact-block">
          <h4>
            Please feel free to reach out to me via email, phone,
            <br/>
            LinkedIn or the contact form.
            Let's build something awesome!
            <br />
            I will respond as soon as possible.
            <br />
            <br />
            PHONE NUMBER:
            <br />
            +91 9073840430
            <br />
            <br />
            <br />
            MY EMAIL:
            <br />
            deeptadeeproy@yahoo.in
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">NAME</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" "
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">EMAIL</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder=" "
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="message">TYPE YOUR MESSAGE</label>
            </div>

            <button className="download-btn" type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
