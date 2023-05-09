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
      <div className="absolute lg:w-1/2 h-80 bg-card rounded-lg shadow-lg px-5 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-10 text-title">
          Booking Completed 🖤
        </h1>
        <p className="text-center mb-4 text-body">
          {" "}
          Hi, {name} ! I will see you on {date} at {time} for {service}{" "}
          appointment.
        </p>
        <p className="text-center mb-4 text-body">
          If you can make it, please send me a message at 0729438312.
        </p>
        <p className="mb-5 text-sm font-semibold text-title">Cosmina x</p>
        <button
          className=" px-6 py-2 font-semibold text-title shadow-sm bg-btn rounded hover:bg-btnHover"
          onClick={closeModal}
        >
          OK
        </button>
      </div>
    </Modal>
  );
}

export default BookingConfirmation;
