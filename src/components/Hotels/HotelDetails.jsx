import React from 'react'
import { useParams } from 'react-router-dom'
import hotelsData from '../../assets/HotelsData'
import styles from './HotelDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const HotelDetails = () => {
    // getting the id from dynamic URl
    const {id} = useParams();

    // find the  hotel that matches the "hotel that was clicked"
    const hotel = hotelsData.find((hotel) => hotel.id === Number(id));
  return (
    <div className={styles.container}>
      <img src={hotel.image} alt={hotel.name} />

      <div className={styles.childContainer}>
        <h2>{hotel.name}</h2>
        <p><FontAwesomeIcon icon={faStar} 
        style={{ color: "goldenrod", fontSize: "20px" }}
        /> {hotel.rating}</p>
        <h2>Per Night : {hotel.price} RS</h2>
        <h2>Amenities</h2>
        <p>{hotel.amenities}</p>

        <Link to={`/hotels/${hotel.id}/book`}>
        <button className={styles.bookBtn}>Book Now</button>
        </Link>
        </div>
        
      
    </div>
  )
}

export default HotelDetails
