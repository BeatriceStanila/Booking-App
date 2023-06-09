import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DatePicker from "react-datepicker";
import Modal from "react-modal";

export default function BookingForm({
  bookedSlots,
  setBookedSlots,
  name,
  setName,
  date,
  setDate,
  time,
  setTime,
  service,
  setService,
  handleFormSubmit,
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const form = useForm();
  const { register, handleSubmit, formState, reset, setValue } = form;
  const { errors } = formState;

  // functions for the modal window
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
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
  function handleSlotSelection(event, date, time) {
    event.preventDefault();
    if (checkIfSlotAvailable(date, time)) {
      closeModal();
      setBookedSlots([
        ...bookedSlots,
        [
          date.toLocaleDateString(),
          time.toLocaleTimeString([], { timeStyle: "short" }),
        ],
      ]);
      setIsAvailable(true);
    } else {
      // The selected slot is not available, so show a message
      openModal();
    }
  }

  // function that will make a post request to mongodb with the client's details
  function saveAppointmentDetails() {
    const URL = process.env.REACT_APP_BOOKING_DETAILS;
    const formattedDate = date.toLocaleDateString(); // format date as YYYY-MM-DD
    const formattedTime = time.toLocaleTimeString([], { timeStyle: "short" }); // format time as HH:MM AM/PM

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
    handleFormSubmit();
    reset();
  };

  return (
    <div
      id="appointment-form"
      className="flex md:justify-end lg:pr-20 px-2 justify-center md:pt-40 md:pb-10"
    >
      <div className="flex px-10 py-10 w-full  lg:w-full justify-center border border-title bg-white rounded-lg shadow-lg">
        <form className="mb-0 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10">
            <h1 className="text-title uppercase tracking-wide font-semibold font-poppins text-center text-4xl">
              Book Appointment
            </h1>
          </div>
          <div className="mb-5">
            <label
              className="block text-sm font-sans font-normal text-title mb-1"
              htmlFor="date"
            >
              Select Date
            </label>
            <div>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-normal font-sans  text-title mb-1">
              Select Time
            </label>
            <div>
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
                className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>
          </div>
          {time && (
            <button
              onClick={(event) => handleSlotSelection(event, date, time)}
              className="w-full py-3 px-4 border-2 border-navbar text-title font-sans rounded-md shadow-lg text-md font-normal tracking-wide  bg-navbar leading-none hover:bg-btn hover:border-btn hover:font-semibold hover:text-white transition-color "
            >
              Check Availability
            </button>
          )}
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={closeModal}
            contentLabel="Date and time not available"
            className="fixed inset-0  flex justify-center items-center"
          >
            <div className="absolute w-96 h-80 bg-navbar rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold mb-10 text-title font-poppins">
                Slot Not Available ☹️
              </h1>
              <p className="text-center text-lg mb-6 text-body font-sans">
                I'm sorry but this slot is not available. Please select another
                date and time.
              </p>
              <p className="mb-5 text-md font-semibold font-sans text-btn ">
                Cosmina x
              </p>
              <button
                className=" px-6 py-2 font-semibold text-white font-poppins tracking-widest shadow-sm bg-btn rounded hover:bg-btnHover duration-200 delay-200"
                onClick={closeModal}
              >
                OK
              </button>
            </div>
          </Modal>
          <p className="text-sm text-base">{errors.date?.message}</p>

          {isAvailable && (
            <>
              <div className="mb-5">
                <label
                  className="block text-sm font-normal font-sans text-title"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <div>
                  <input
                    defaultValue={name}
                    type="text"
                    id="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Full name is required",
                      },
                    })}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2 px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
                  />
                  <p className="text-sm font-thin text-base">
                    {errors.name?.message}
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <label
                  className="block text-sm font-normal font-sans  text-title"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <div>
                  <input
                    defaultValue={phoneNumber}
                    type="text"
                    id="phone"
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                    })}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
                  />
                  <p className="text-sm font-thin text-base">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <label
                  className="block text-sm font-normal font-sans  text-title"
                  htmlFor="service"
                >
                  Select Service
                </label>
                <div>
                  <select
                    defaultValue={service}
                    id="service"
                    {...register("service", {
                      required: {
                        value: true,
                        message: "Service is required",
                      },
                    })}
                    onChange={(e) => setService(e.target.value)}
                    className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
                  >
                    <option value="default"></option>
                    <option value="Occasion-Makeup">Occasion Makeup</option>
                    <option value="Bridal-Makeup">Bridal Makeup</option>
                    <option value="2D-Lashes">2D Lashes</option>
                    <option value="3D-Lashes">3D Lashes</option>
                    <option value="4D-Lashes">4D Lashes</option>
                  </select>
                  <p className="text-sm text-base">{errors.service?.message}</p>
                </div>
              </div>

              <div className="mb-5">
                <label
                  className="block text-sm font-normal font-sans  text-title"
                  htmlFor="details"
                >
                  Message
                </label>
                <div>
                  <textarea
                    defaultValue={message}
                    rows="5"
                    cols="10"
                    className="border-2 border-primary font-sans text-sm rounded-lg w-full py-2  px-3 shadow-md focus:outline-none  focus:border-secondary focus:ring-1 focus:ring-secondary"
                    {...register("message")}
                    onChange={(e) => {
                      setValue("message", e.target.value);
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <a href="/appointment">
                <button
                  className="w-full py-3 px-4 mt-6 border border-btn rounded-md shadow-lg text-sm font-poppins font-bold text-white bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover transition-color duration-200 delay-200"
                  type="submit"
                >
                  Book Me
                </button>
              </a>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
