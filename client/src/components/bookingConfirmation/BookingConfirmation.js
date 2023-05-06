import React from "react";

function BookingConfirmation({ name, date, time, service }) {
  return (
    <div class="fixed inset-0 flex items-center justify-center bg-base bg-opacity-50">
      <div class="block w-full max-w-lg rounded-lg bg-card shadow-lg px-6 py-8">
        <h1 class="font-serif font-semibold text-title text-3xl mb-8">
          Booking Completed!
        </h1>
        <p class="text-body font-sans mb-4">
          Hi, {name} 🖤! I will see you on {date} at {time} for {service}{" "}
          appointment.
        </p>
        <p class="text-body font-sans mb-4">
          If you can make it, please send me a message.
        </p>
        <h3 class="text-body font-sans mb-4">Have a lovely day!</h3>
        <h4 class="text-btn font-sans mb-4">Cosmina x</h4>
      </div>
    </div>
  );
}

export default BookingConfirmation;
