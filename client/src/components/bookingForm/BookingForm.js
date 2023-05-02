import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import DatePicker from "react-datepicker";
import Modal from "react-modal";

let renderCount = 0;

export default function BookingForm({ bookedSlots, setBookedSlots }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const form = useForm();
  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  // functions for the modal window
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // check availability of date and time
  function checkIfSlotAvailable(date, time) {
    let convertedDate = date.toLocaleDateString();
    let convertedTime = time.toLocaleTimeString([], { timeStyle: "short" });
    return !bookedSlots.some(
      (slot) => slot[0] === convertedDate && slot[1] === convertedTime
    );
  }

  // a fn that will open a modal window with a message if date or time not available
  function handleSlotSelection(date, time) {
    if (checkIfSlotAvailable(date, time)) {
      closeModal();
      setBookedSlots([
        ...bookedSlots,
        [
          date.toLocaleDateString(),
          time.toLocaleTimeString([], { timeStyle: "short" }),
        ],
      ]);
    } else {
      // The selected slot is not available, so show a message
      // alert("Date or time is not available");
      openModal();
    }
  }

  // function that will make a post request to mongodb with the client's details
  function saveAppointmentDetails() {
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

  // function that handles the submission of the form
  const onSubmit = (data) => {
    console.log("form submitted", data);
    saveAppointmentDetails();
  };

  renderCount++;
  return (
    <div id="appointment-form">
      <h1>Book an Appointment ({renderCount / 2})</h1>
      <form className="grid " onSubmit={handleSubmit(onSubmit)}>
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

        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          contentLabel="Date and time not available"
          className="fixed inset-0 bg-rebeccapurple flex justify-center items-center"
        >
          <div className="absolute w-96 h-80 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2">Slot Not Available ☹️</h1>
            <p className="text-center mb-4">
              I'm sorry but this slot is not available. Please select another
              date and time.
            </p>
            <p>Comsina x</p>
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </Modal>

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
