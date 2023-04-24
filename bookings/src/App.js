import "./App.css";
import { useState } from "react";
import BookingForm from "./components/bookingForm/bookingForm";
import BookingConfirmation from "./components/bookingConfirmation/bookingConfirmation";
import axios from "axios";
import GetBookings from "./components/getBookings/getBookings";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // make a post request to save the appointment details into the db
  function saveAppDetails() {
    const URL = process.env.REACT_APP_BOOKING_DETAILS;

    axios
      .post(URL, {
        name: name,
        phoneNumber: phoneNumber,
        service: service,
        date: selectedDate,
        time: selectedTime,
      })
      .then((response) => {
        console.log(response);
      });
  }

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      {!formSubmitted && (
        <BookingForm
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          service={service}
          setService={setService}
          handleFormSubmit={handleFormSubmit}
          saveAppDetails={saveAppDetails}
        />
      )}
      {formSubmitted && (
        <BookingConfirmation
          date={selectedDate.toLocaleDateString()}
          time={selectedTime}
          name={name}
          service={service}
        />
      )}
      <GetBookings />
    </div>
  );
}

export default App;
