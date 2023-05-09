import React, { useState } from "react";

function BookingConfirmation({ name, date, time, service, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
    window.location.reload();
  };
  return isOpen ? (
    <div className="fixed inset-2 flex items-center justify-center bg-bg bg-opacity-50">
      <div className="block w-full max-w-lg rounded-lg bg-card shadow-lg px-6 py-8">
        <h1 className="font-serif font-semibold text-title text-3xl mb-8">
          Booking Completed!
        </h1>
        <p className="text-body font-sans mb-4">
          Hi, {name} 🖤! I will see you on {date} at {time} for {service}{" "}
          appointment.
        </p>
        <p className="text-body font-sans mb-4">
          If you can make it, please send me a message at 0729438312.
        </p>
        <h3 className="text-body font-sans mb-4">Have a lovely day!</h3>
        <h4 className="text-btn font-sans mb-4">Cosmina x</h4>

        <button
          onClick={handleClose}
          className="w-full py-3 px-4 border border-btn rounded-md shadow-lg text-sm font-bold text-white bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover "
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
}

export default BookingConfirmation;
