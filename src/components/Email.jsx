import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";

emailjs.init("qEI7NKskJQxmxSRji");

const Email = () => {
  const templateParams = {
    name: "Anniversary reminder",
    notes: "Remember about this important date!",
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send("service_2qwezoc", "contact_form", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <div className="email-container">
      <h3>
        Give us your email and we'll send you reminders about your upcoming
        events!
      </h3>
      <input type="email" className="form-control email-input"></input>
      <button onClick={sendEmail} className="btn btn-primary email-button">
        Send me a reminder!
      </button>
    </div>
  );
};

export default Email;
