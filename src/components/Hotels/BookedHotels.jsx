import React from "react";
import { useSelector } from "react-redux";

import styles from "./BookedHotels.module.css";

const BookedHotels = () => {
  const bookedHotels = useSelector((state) => state.booking.bookings);
  console.log("booked Hotel", bookedHotels);

  return (
    <div>
      <h1 className={styles.logo}>My Bookings</h1>
      {bookedHotels.map((hotel) => {
        console.log(hotel.hotelName);

        return (
          <div className={styles.container}>
            <h1> {hotel.hotelName}</h1>
            <div>
              <div className={styles.childContainer}>
                <img src={hotel.hotelImage} alt={hotel.hotelName} />
                <div className={styles.hotelInfo}>
                  <h1>Nights : {hotel.nights}</h1>
                  <h1>Total Amount : {hotel.totalAmount}Rs</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookedHotels;
