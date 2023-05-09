import React from "react";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contactForm/ContactForm";

function Contact() {
  return (
    <div id="contact" className="bg-bg p-5 ">
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
