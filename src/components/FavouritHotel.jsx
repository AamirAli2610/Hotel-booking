import React from "react";
import { useSelector } from "react-redux";
import styles from "./FavouritHotel.module.css";

const FavouritHotel = () => {
  const favouritHotels = useSelector(
    (state) => state.favouriteHotels.favourites,
  );

  return (
    <div className={styles.mainContainer}>
      <h1>Favourite Hotels</h1>

      <div className={styles.hotelsContainer}>
        {favouritHotels.map((hotel) => (
          <div className={styles.hotelCard} key={hotel.id}>
            <div className={styles.imageContainer}>
              <img src={hotel.image} alt={hotel.name} />
            </div>

            <div className={styles.hotelDetails}>
              <h2>{hotel.name}</h2>

              <p>
                <strong>Location:</strong> {hotel.location}
              </p>

              <p>
                <strong>Rating:</strong> {hotel.rating}
              </p>

              <p>
                <strong>Price:</strong> {hotel.price}
              </p>

              <p>
                <strong>Amenities:</strong> {hotel.amenities}
              </p>

              <p>
                <strong>Description:</strong> {hotel.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritHotel;
