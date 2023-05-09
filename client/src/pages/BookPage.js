import React, { useState } from "react";
import BookingConfirmation from "../components/bookingConfirmation/BookingConfirmation";

import BookingForm from "../components/bookingForm/BookingForm";
import BookedSlots from "../components/bookedSlots/BookedSlots";

function BookPage() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    setShowConfirmation(true);
  };
  return (
    <div id="book" className="bg-bg">
      <BookedSlots setBookedSlots={setBookedSlots} />

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

      {showConfirmation && formSubmitted && (
        <BookingConfirmation
          name={name}
          date={date.toLocaleDateString()}
          time={time.toLocaleTimeString([], { timeStyle: "short" })}
          service={service}
          onClose={handleCloseConfirmation}
        />
      )}
    </div>
  );
}

export default BookPage;
