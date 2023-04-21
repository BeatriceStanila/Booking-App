import React from "react";
import { useForm } from "react-hook-form";
import DateSelector from "../dateSelector/dateSelector";
import TimeSelector from "../timeSelector/timeSelector";

export default function BookingForm({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  service,
  setService,
  handleFormSubmit,
  saveAppDetails,
}) {
  // use the useForm hook to initialise form state and validation
  const {
    register, // register inputs for validation
    handleSubmit, // call onSubmit with validated form data
    formState: { errors }, // get the current validation errors
    reset, // reset the form after submission
  } = useForm();

  // define the function to run when the form is submitted
  const onSubmit = (data) => {
    console.log({ ...data, setPhoneNumber }); // log the validated form data to the console

    console.log(typeof data.phoneNumber);

    reset(); // reset the form to its initial state
    handleFormSubmit();
    saveAppDetails();
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold underline">Book an appointment</h1>
      <label htmlFor="name">Name</label>
      <input
        defaultValue={name}
        {...register("name")}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="phone">Contact Number</label>
      <input
        defaultValue={phoneNumber}
        {...register("phoneNumber")}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />

      <label htmlFor="services">Service</label>
      <select
        id="services"
        className="w-30"
        {...register("service")}
        default={service}
        required
        onChange={(e) => setService(e.target.value)}
      >
        <option value=""></option>
        <option value="Occasion Makeup">Occasion Makeup</option>
        <option value="Bridal Makeup">Bridal Makeup</option>
        <option value="3D Lashes">3D Lashes</option>
        <option value="4D Lashes">4D Lashes</option>
      </select>

      <DateSelector setSelectedDate={setSelectedDate} />
      {selectedDate && (
        <TimeSelector
          selectedDate={selectedDate}
          setSelectedTime={setSelectedTime}
        />
      )}

      {errors.exampleRequired && <span>This field is required</span>}

      {selectedTime && <input type="submit" />}
    </form>
  );
}
