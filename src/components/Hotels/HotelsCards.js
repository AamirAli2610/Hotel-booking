import React from "react";
import styles from "./HotelsCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToFavourit } from "../Store/FavouritHotelSlice";

const HotelsCards = ({ hotel }) => {
  // const [bookedMsg, setBookedMsg] = useState("");
  // const [isHotelBooked, setIsHotelBooked] = useState(false);

  const [fvrtMsg, setFvrtMsg] = useState("");
  const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);

  const dispatch = useDispatch();

  const addToFavouritHandler = (hotel) => {
    dispatch(addToFavourit(hotel));
    setFvrtMsg("Added to Favourite");
    setIsAddedToFavourite(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.scndContainer}>
          <h1>{hotel.name} </h1>
          <img src={hotel.image} alt="img" />
        </div>

        <div className={styles.childContainer}>
          <div>
            <p>location : {hotel.location} </p>
            <h2>rating : {hotel.rating} </h2>
            <p>Price : {hotel.price}</p>
            <h4> {hotel.amenities}</h4>
            <p> {hotel.description} </p>

            <div className={styles.btnsContainer}>
              <Link to={`/hotels/${hotel.id}`}>
                <button className={styles.detailBtn}>View Details</button>
              </Link>

              <button
                className={styles.favrtBtn}
                onClick={() => addToFavouritHandler(hotel)}
              >
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                Add to Favourit
              </button>
            </div>
            {isAddedToFavourite ? (
              <p className={styles.fvrtMsg}>{fvrtMsg}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelsCards;
