import React from "react";
import { add, format } from "date-fns";

export default function TimeSelector({ selectedDate, setSelectedTime }) {
  const getTimes = () => {
    if (!selectedDate) return;

    const opening = add(selectedDate, { hours: 8 });
    const closing = add(selectedDate, { hours: 18 });
    const interval = 90; // in mintues

    const times = [];
    for (let i = opening; i <= closing; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div>
      <label>Choose a time:</label>
      <select
        id="selectedTime"
        className="w-30"
        onChange={(e) => setSelectedTime(e.target.value)}
        default=""
      >
        <option value=""></option>
        {times?.map((time, i) => (
          <option key={`time-${i}`} value={format(time, "kk:mm")}>
            {format(time, "kk:mm")}
          </option>
        ))}
      </select>
    </div>
  );
}
