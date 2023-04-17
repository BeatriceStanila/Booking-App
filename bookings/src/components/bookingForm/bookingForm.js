import React from "react";
import { useForm } from "react-hook-form";

export default function BookingForm() {
  // use the useForm hook to initialise form state and validation
  const {
    register, // register inputs for validation
    handleSubmit, // call onSubmit with validated form data
    formState: { errors }, // get the current validation errors
    reset, // reset the form after submission
  } = useForm();

  // define the function to run when the form is submitted
  const onSubmit = (data) => {
    console.log(data); // log the validated form data to the console
    reset(); // reset the form to its initial state
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Book an appointment</h1>

      <input
        defaultValue=""
        {...register("name")}
        placeholder="Name"
        required
      />

      <input
        defaultValue=""
        placeholder="Contact Number"
        {...register("phoneNumber")}
        required
      />

      <label for="services">Choose a service:</label>
      <select
        id="services"
        className="w-30"
        {...register("service")}
        default=""
        required
      >
        <option value=""></option>
        <option value="Occasion Makeup">Occasion Makeup</option>
        <option value="Bridal Makeup">Bridal Makeup</option>
        <option value="3D Lashes">3D Lashes</option>
        <option value="4D Lashes">4D Lashes</option>
      </select>

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
