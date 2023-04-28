import { useEffect } from "react";
import axios from "axios";

function BookedSlots({ bookedSlots, setBookedSlots }) {
  useEffect(() => {
    axios.get(process.env.REACT_APP_GET_ALL_BOOKINGS).then((response) => {
      const slotsBooked = response.data.map((booking) => [
        booking.date,
        booking.time,
      ]);

      setBookedSlots(slotsBooked);
    });
  }, [setBookedSlots]);

  console.log(bookedSlots, "Booked Slots");
  console.log(typeof bookedSlots, "type of ");
}

export default BookedSlots;