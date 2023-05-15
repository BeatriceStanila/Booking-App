import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

function ContactForm() {
  const form = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  // functions for the modal window
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        openModal();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="px-5 pb-10">
      <div className="bg-book bg-cover bg-center shadow-lg border border-title rounded-lg p-5 mx-auto md:w-2/4 lg:w-1/3">
        <h1 className="text-3xl text-center font-bold font-dancing mb-8 uppercase tracking-wider    ">
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              className="block text-title font-dancing text-sm mb-2"
              htmlFor="full-name"
            >
              Full Name
            </label>
            <input
              name="full-name"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-3  px-4  shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="full-name"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-title font-dancing text-sm mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-3  px-4 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-title font-dancing text-sm mb-2"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <input
              name="phone"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-3  px-4  shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="phone-number"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-title font-dancing text-sm mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              className="border-2 border-primary font-sans text-sm rounded-lg w-full py-3  px-4  shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              id="message"
              rows="3"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="flex justify-center pb-5">
            <input
              type="submit"
              value="SEND"
              className="w-full py-3 px-4 border border-btn font-dancing tracking-widest rounded-md shadow-lg text-md font-bold text-white bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover duration-200 delay-200"
            />
          </div>
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={closeModal}
            contentLabel="Date and time not available"
            className="fixed inset-0  flex justify-center items-center"
          >
            <div className="absolute w-96 h-80 bg-navbar rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold mb-10 text-title font-dancing">
                Message Sent 🚀
              </h1>
              <p className="text-center mb-4 text-body font-dancing">
                Thank you for contacting me! I wil get back to you as soon as
                possible.
              </p>
              <p className="mb-5 text-sm font-semibold text-btn font-dancing">
                Cosmina x
              </p>
              <button
                className=" px-6 py-3 font-semibold font-dancing tracking-widest text-white shadow-sm bg-btn rounded hover:bg-btnHover duration-200 delay-200"
                onClick={closeModal}
              >
                OK
              </button>
            </div>
          </Modal>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
