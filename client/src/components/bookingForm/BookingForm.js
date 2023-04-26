import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

let renderCount = 0;

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const form = useForm();
  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  function saveAppDetails() {
    const URL = process.env.REACT_APP_BOOKING_DETAILS;

    console.log({
      name: name,
      phoneNumber: phoneNumber,
      service: service,
      date: date,
      time: time,
      message: message,
    });

    axios
      .post(URL, {
        name: name,
        phoneNumber: phoneNumber,
        service: service,
        date: date,
        time: time,
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

        <label htmlFor="service">Pick service</label>
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

        <label htmlFor="date">Pick date</label>
        <input
          defaultValue={date}
          type="date"
          id="date"
          {...register("date", {
            valueAsDate: true,
            required: { value: true, message: "Date is required" },
          })}
          onChange={(e) => setDate(e.target.value)}
          className="  border-2 border-gray-200 rounded w-100 py-2 "
        />
        <p className=" text-red-500">{errors.date?.message}</p>

        <label htmlFor="time">Pick time</label>
        <input
          defaultValue={time}
          type="time"
          id="time"
          min="09:00"
          max="18:00"
          {...register("time", {
            required: { value: true, message: "Time is required" },
          })}
          onChange={(e) => setTime(e.target.value)}
          className="border-2 border-gray-200 rounded w-full py-2 "
        />
        <p className=" text-red-500">{errors.time?.message}</p>

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
