import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetBookings() {
  const [booking, setBooking] = useState();

  useEffect(() => {
    const url = process.env.REACT_APP_GET_ALL_BOOKINGS;
    async function fetchBookings() {
      const result = await axios(url);
      setBooking(result.data);
    }
    fetchBookings();
  }, []);

  return (
    <>
      {booking?.map((booking) => (
        <div key={booking._id}>
          <p>Name: {booking.name}</p>
          <p>Phone: {booking.phone}</p>
          <p>Service: {booking.service}</p>
          <p>Date: {booking.date}</p>
        </div>
      ))}
    </>
  );
}
