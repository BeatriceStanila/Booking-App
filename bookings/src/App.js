import "./App.css";
import { useState } from "react";
import BookingForm from "./components/bookingForm/bookingForm";
import BookingConfirmation from "./components/bookingConfirmation/bookingConfirmation";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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
          service={service}
          setService={setService}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      {formSubmitted && (
        <BookingConfirmation
          day={selectedDate}
          time={selectedTime}
          name={name}
          service={service}
        />
      )}
    </div>
  );
}

export default App;
