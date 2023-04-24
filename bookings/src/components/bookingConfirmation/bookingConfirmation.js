import React from "react";

export default function BookingConfirmation({ date, name, time, service }) {
  console.log(date);
  return (
    <div>
      <h1>Booking Completed!</h1>

      <p>
        Hi, {name}! I am excited to see on {date} you on at {time} for your{" "}
        {service} appointment!
      </p>
      <p>Much Love,</p>
      <p>Cosmina x </p>
    </div>
  );
}
