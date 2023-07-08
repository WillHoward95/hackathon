import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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

  return <button onClick={sendEmail}> Send an email! </button>;
};

export default Email;
