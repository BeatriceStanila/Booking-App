import "./App.css";
import { useState } from "react";
import BookingForm from "./components/bookingForm/bookingForm";
import BookingConfirmation from "./components/bookingConfirmation/bookingConfirmation";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  return (
    <div className="App">
      <BookingForm
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        name={name}
        setName={setName}
        service={service}
        setService={setService}
      />
      <BookingConfirmation
        day={selectedDate}
        time={selectedTime}
        name={name}
        service={service}
      />
    </div>
  );
}

export default App;
