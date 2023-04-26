import React, { useState } from "react";
import "./App.css";
// import axios from "axios";
import NavBar from "./components/navbar/NavBar";
import BookingForm from "./components/bookingForm/BookingForm";

function App() {
  const [active, setActive] = useState("home");
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);

  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   phoneNumber: "",
  //   service: "",
  //   date: "",
  //   time: "",
  //   details: "",
  // });

  // // const [name, setName] = useState("");
  // // const [service, setService] = useState("");
  // // const [phoneNumber, setPhoneNumber] = useState("");
  // // const [formSubmitted, setFormSubmitted] = useState(false);

  // // function saveAppDetails() {
  // //   const URL = process.env.REACT_APP_BOOKING_DETAILS;

  // //   axios
  // //     .post(URL, {
  // //       name: name,
  // //       phoneNumber: phoneNumber,
  // //       service: service,
  // //       date: selectedDate,
  // //       time: selectedTime,
  // //     })
  // //     .then((response) => {
  // //       console.log(response);
  // //     });
  // // }

  return (
    <div className="App">
      <NavBar appearance="tabs" reversed active={active} onSelect={setActive} />
      <BookingForm />
    </div>
  );
}

export default App;
