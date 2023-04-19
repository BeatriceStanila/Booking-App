import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DateSelector({ selectedDate, setSelectedDate }) {
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <label>Pick a day</label>
      {selectedDate ? (
        <div>{selectedDate.toLocaleDateString()}</div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          view="month"
          onClickDay={handleDateClick}
        />
      )}
    </div>
  );
}
