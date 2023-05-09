import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/footer/Footer";

function Contact() {
  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className="bg-bg p-5 ">
      <div className="bg-bg border border-titles shadow-lg rounded-lg p-8  md:w-1/3">
        <h1 className="text-2xl font-bold mb-4 uppercase tracking-wider lg:ml-40  ">
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              className="block text-title font-semibold mb-2"
              htmlFor="full-name"
            >
              Full Name
            </label>
            <input
              name="full-name"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="full-name"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-title font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-title font-semibold mb-2"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <input
              name="phone"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="phone-number"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-title font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="message"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Send"
              className="w-full py-3 px-4 border border-btn rounded-md shadow-lg text-sm font-bold text-white bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover "
            />
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
