import React from "react";
import { useForm } from "react-hook-form";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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

      {/* <input  {...register("exampleRequired", { required: true })} /> */}

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

/**
 * use  react hook form
 */
