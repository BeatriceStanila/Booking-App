import React, { useState } from "react";
import "./App.css";
// import axios from "axios";
import NavBar from "./components/navbar/NavBar";
import BookingForm from "./components/bookingForm/BookingForm";
import BookedSlots from "./components/bookedSlots/BookedSlots";

function App() {
  const [active, setActive] = useState("home");
  const [bookedSlots, setBookedSlots] = useState([]);

  return (
    <div className="App">
      <NavBar appearance="tabs" reversed active={active} onSelect={setActive} />
      <BookingForm bookedSlots={bookedSlots} setBookedSlots={setBookedSlots} />
      <BookedSlots bookedSlots={bookedSlots} setBookedSlots={setBookedSlots} />
    </div>
  );
}

export default App;
