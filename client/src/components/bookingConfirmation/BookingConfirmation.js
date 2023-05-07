import React from "react";

function BookingConfirmation({ name, date, time, service }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="block w-full max-w-lg rounded-lg bg-card shadow-lg px-6 py-8">
        <h1 className="font-serif font-semibold text-title text-3xl mb-8">
          Booking Completed!
        </h1>
        <p className="text-body font-sans mb-4">
          Hi, {name} 🖤! I will see you on {date} at {time} for {service}{" "}
          appointment.
        </p>
        <p className="text-body font-sans mb-4">
          If you can make it, please send me a message.
        </p>
        <h3 className="text-body font-sans mb-4">Have a lovely day!</h3>
        <h4 className="text-btn font-sans mb-4">Cosmina x</h4>
      </div>
    </div>
  );
}

export default BookingConfirmation;
