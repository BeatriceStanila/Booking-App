import React from "react";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contactForm/ContactForm";

function Contact() {
  return (
    <div id="contact" className="bg-white ">
      <div className="relative flex  items-center md:px-7">
        <div className="flex-grow border-t  border-title"></div>

        <img
          src="./contact.svg"
          alt="lashes"
          className="w-80 h-60 flex-shrink"
        />
        <div className="flex-grow border-t border-title"></div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
