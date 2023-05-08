import React, { useState } from "react";
import "./App.css";
// import axios from "axios";

import BookingForm from "./components/bookingForm/BookingForm";
import BookedSlots from "./components/bookedSlots/BookedSlots";
import BookingConfirmation from "./components/bookingConfirmation/BookingConfirmation";
import Hero from "./hero/Hero";

function App() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <Hero />
      <BookedSlots setBookedSlots={setBookedSlots} />
      {!formSubmitted && (
        <BookingForm
          bookedSlots={bookedSlots}
          setBookedSlots={setBookedSlots}
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          service={service}
          setService={setService}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      {formSubmitted && (
        <BookingConfirmation
          name={name}
          date={date.toLocaleDateString()}
          time={time.toLocaleTimeString([], { timeStyle: "short" })}
          service={service}
        />
      )}
    </div>
  );
}

export default App;
