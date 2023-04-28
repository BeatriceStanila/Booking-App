import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import DatePicker from "react-datepicker";

let renderCount = 0;

export default function BookingForm({ bookedSlots, setBookedSlots }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const form = useForm();
  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  console.log(typeof booked);

  // check availability of date and time
  function checkIfSlotAvailable(date, time) {
    let convertedDate = date.toLocaleDateString();
    let convertedTime = time.toLocaleTimeString([], { timeStyle: "short" });
    return !bookedSlots.some(
      (slot) => slot[0] === convertedDate && slot[1] === convertedTime
    );
  }

  function handleSlotSelection(date, time) {
    if (checkIfSlotAvailable(date, time)) {
      setBookedSlots([
        ...bookedSlots,
        [
          date.toLocaleDateString(),
          time.toLocaleTimeString([], { timeStyle: "short" }),
        ],
      ]);
    } else {
      // The selected slot is not available, so show a message
      alert("Date or time is not available");
    }
  }

  function saveAppDetails() {
    const URL = process.env.REACT_APP_BOOKING_DETAILS;

    const formattedDate = date.toLocaleDateString(); // format date as YYYY-MM-DD
    const formattedTime = time.toLocaleTimeString([], { timeStyle: "short" }); // format time as HH:MM AM/PM

    // console.log({
    //   name: name,
    //   phoneNumber: phoneNumber,
    //   service: service,
    //   date: formattedDate,
    //   time: formattedTime,
    //   message: message,
    // });

    axios
      .post(URL, {
        name: name,
        phoneNumber: phoneNumber,
        service: service,
        date: formattedDate,
        time: formattedTime,
        message: message,
      })
      .then((response) => {
        console.log(response);
      });
  }

  const onSubmit = (data) => {
    console.log("form submitted", data);
    saveAppDetails();
  };

  renderCount++;
  return (
    <div id="appointment-form">
      <h1>Book an Appointment ({renderCount / 2})</h1>
      <form className="grid " onSubmit={handleSubmit(onSubmit)}>
        {Object.entries(bookedSlots).map((slot) => (
          <div key={`${slot[0]}-${slot[1]}`}>
            {slot[0]} at {slot[1]}
          </div>
        ))}
        <label htmlFor="date">Select Date</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
          showIcon
          minDate={new Date()}
          className="  border-2 border-gray-200 rounded w-100 py-2 "
        />
        <label>Select Time</label>
        <DatePicker
          selected={time}
          onChange={setTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={120}
          timeCaption="Time"
          timeFormat="HH:mm"
          minTime={new Date().setHours(8, 0)}
          maxTime={new Date().setHours(18, 0)}
          dateFormat="p"
          className="  border-2 border-gray-200 rounded w-100 py-2 "
        />

        <button
          onClick={() => handleSlotSelection(date, time)}
          className="  border-2 border-gray-200 rounded w-50 py-2 "
        >
          Check Availability
        </button>

        <p className=" text-red-500">{errors.date?.message}</p>

        <label htmlFor="name">Full Name</label>
        <input
          defaultValue={name}
          type="text"
          id="name"
          {...register("name", {
            required: { value: true, message: "Full name is required" },
          })}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-200 rounded w-100 py-2 "
        />
        <p className=" text-red-500">{errors.name?.message}</p>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          defaultValue={phoneNumber}
          type="text"
          id="phone"
          {...register("phoneNumber", {
            required: { value: true, message: "Phone number is required" },
          })}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="  border-2 border-gray-200 rounded w-100 py-2 "
        />
        <p className=" text-red-500">{errors.phoneNumber?.message}</p>
        <label htmlFor="service">Select service</label>
        <select
          defaultValue={service}
          id="service"
          {...register("service", {
            required: { value: true, message: "Service is required" },
          })}
          onChange={(e) => setService(e.target.value)}
          className="  border-2 border-gray-200 rounded w-100 py-2 "
        >
          <option value="occasion-makeup">Occasion Makeup</option>
          <option value="bridal-makeup">Bridal Makeup</option>
          <option value="3d-lashes">3D Lashes</option>
          <option value="4d-lashes">4D Lashes</option>
        </select>
        <p className=" text-red-500">{errors.service?.message}</p>
        <label htmlFor="details">Do you want to add some details?</label>
        <textarea
          defaultValue={message}
          rows="5"
          cols="10"
          className="border-2 border-gray-200 rounded w-100 py-2"
          {...register("message")}
          onChange={(e) => {
            setValue("message", e.target.value);
            setMessage(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
