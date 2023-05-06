import { useEffect } from "react";
import axios from "axios";

function BookedSlots({ setBookedSlots }) {
  useEffect(() => {
    axios.get(process.env.REACT_APP_GET_ALL_BOOKINGS).then((response) => {
      const slotsBooked = response.data.map((booking) => [
        booking.date,
        booking.time,
      ]);

      setBookedSlots(slotsBooked);
    });
  }, [setBookedSlots]);
}

export default BookedSlots;
