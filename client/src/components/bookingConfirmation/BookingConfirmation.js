import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function BookingConfirmation({ name, date, time, service, formSubmitted }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    window.location.reload();
  }

  // open model when the form is submitted
  useEffect(() => {
    if (formSubmitted) {
      openModal();
    }
  }, [formSubmitted]);

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      contentLabel="Booking Completed"
      className="fixed inset-0  flex justify-center items-center"
    >
      <div className="absolute lg:w-1/2 h-90 bg-navbar rounded-lg shadow-lg px-10 py-10 flex flex-col  justify-center items-center">
        <h1 className="text-2xl font-bold   font-dancing mb-10 text-title">
          Booking Completed 🖤
        </h1>
        <p className=" mb-4 font-dancing text-lg text-body">
          {" "}
          Hi, {name} ! I am excited to see you on {date} at {time} for your{" "}
          {service} appointment.
        </p>
        <p className=" mb-8 font-dancing text-lg text-body ">
          If for any reason you are unable to make it, please let me know as
          soon as possible so we can reschedule. You can reach me at 0729438312.
        </p>
        <p className="mb-3 text-lg font-dancing font-semibold text-btn">
          Cosmina x
        </p>
        <button
          className=" px-6 py-2 font-semibold font-dancing tracking-widest text-white shadow-sm bg-btn rounded hover:bg-btnHover transition-color duration-200 delay-200"
          onClick={closeModal}
        >
          OK
        </button>
      </div>
    </Modal>
  );
}

export default BookingConfirmation;
