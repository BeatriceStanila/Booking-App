import React from "react";

export default function BookingConfirmation({ day, name, time, service }) {
  return (
    <div>
      <h1>Booking Completed!</h1>

      <p>
        Hi, {name}!I am excited to see you on at {time} for your {service}{" "}
        appointment!
      </p>
      <p>Much Love,</p>
      <p>Cosmina x </p>
    </div>
  );
}
