import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", 
"faec2acb-20c6-4ee9-8baa-8a0e865c6dc9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>

          <p>
            I am currently available to take on an internship role in the area
            of software development and engineering in a startup or an
            enterprise, so feel free to send me a message on an internship
            opportunity in your company. You can contact anytime.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>jessicaennor@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>(+33) 759274724</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Lille, France</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required/>

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your e-mail" name="email" required />

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
