import React from "react";
import { useParams } from "react-router-dom";
import styles from "./HotelBookingPage.module.css";
import hotelsData from "../../assets/HotelsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookHotel } from "../Store/BookingSlice";
const HotelBookingPage = () => {
  const { id } = useParams();

  // find the matching hotel
  const hotel = hotelsData.find((hotel) => hotel.id === Number(id));
  const dispatch = useDispatch();

  const [guest, setGuest] = useState(1);
  const [nights, setNights] = useState(1);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedMsg, setBookedMsg] = useState("");

  if (!hotel) {
    return <h1>Hotel not Found</h1>;
  }

  const numberOFNightsPLus = () => {
    if (nights < 10) {
      setNights(nights + 1);
    }
  };
  const numberOFNightsMinus = () => {
    if (nights > 1) {
      setNights(nights - 1);
    }
  };

  const guestCountPlus = () => {
    if (guest < 5) {
      setGuest(guest + 1);
    }
  };
  const guestCountMinus = () => {
    if (guest > 1) {
      setGuest(guest - 1);
    }
  };

  // booking confirmed
  const bookingConfirmed = (hotel) => {
    console.log(hotel.name);
    setIsBooked(true);
    setBookedMsg("Booking Confirmed");

    // booked hotel
    const bookedHotel = {
      hotelId: hotel.id,
      hotelImage: hotel.image,
      hotelName: hotel.name,
      nights: nights,
      totalAmount: nights * hotel.price,
    };

    // dispatching booked hotel to bookHotel
    dispatch(bookHotel(bookedHotel));
  };

  return (
    <>
      <h1 className={styles.logo}> Book Your Best Hotel</h1>
      <div className={styles.container}>
        <img src={hotel.image} alt={hotel.name} />
        <div className={styles.childContainer}>
          <h2>{hotel.name}</h2>
          <h2>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "goldenrod", fontSize: "20px" }}
            />{" "}
            {hotel.rating}
          </h2>
          <p>{hotel.location}</p>
          <p>{hotel.price}/ Night</p>
        </div>

        <div className={styles.guestContainer}>
          <button onClick={guestCountMinus}>-</button>
          <h2>Guests : {guest}</h2>
          <button onClick={guestCountPlus}>+</button>
        </div>

        {/* bottom line */}
        <div className={styles.line}></div>
        <div className={styles.priceContainer}>
          <h1>Price</h1>
          <h3> Per Night : {hotel.price} </h3>
          <div className={styles.nightContainer}>
            <button onClick={numberOFNightsMinus}>-</button>
            <p>Nights : {nights}</p>
            <button onClick={numberOFNightsPLus}>+</button>
          </div>
          <h3> Number of Nights : {nights} </h3>
          <h3> Total Amount : {nights * hotel.price} Rs </h3>
        </div>

        {/* bottom line */}
        <div className={styles.line}></div>
        <div className={styles.bookingContainer}>
          <button onClick={() => bookingConfirmed(hotel)}>
            Confirm Booking
          </button>
          <p className={isBooked ? styles.bookingConfirmedText : ""}>
            {bookedMsg && (
              <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
            )}
            {bookedMsg}
          </p>
        </div>
      </div>
    </>
  );
};

export default HotelBookingPage;
