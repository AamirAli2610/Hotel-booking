import React from 'react'
import styles from './HotelsCard.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const HotelsCards = ({hotel}) => {

  const [bookedMsg, setBookedMsg] = useState('');
  const [isHotelBooked, setIsHotelBooked] = useState(false);


    const hotelBooked = () =>{
      setBookedMsg('The hotel has Booked!')
      setIsHotelBooked(true)
      setTimeout(() =>{
        setBookedMsg('')


      },2000)
      


    }

    const cancleBooking = () => {
      setBookedMsg('Booking has Cancled!')
      setIsHotelBooked(false)

       setTimeout(() =>{
        setBookedMsg('')

       },2000)


    }

    


  return (

    <> 

    


   
  <div className={styles.container}>
      <div className={styles.scndContainer}>
      <h1>{hotel.name} </h1>


      <img src={hotel.image} alt="img" /></div>

      <div className={styles.childContainer}>
    <div>
      <p>location  : {hotel.location} </p>
        <h2>rating : {hotel.rating} </h2>
     <p>Price : {hotel.price}</p>
       <h4>  {hotel.amenities}</h4>
      <p> {hotel.description} </p>

    <div className={styles.btnsContainer}>

      <Link to={`/hotels/${hotel.id}`}>
      <button className={styles.detailBtn}>View Details</button>
      </Link>

      <br />
      <button onClick={hotelBooked} className={styles.bookBtn}>Book Now</button>
      </div>

      <p>{bookedMsg}</p>
      {isHotelBooked && 
      <button onClick={cancleBooking} className={styles.cancleBtn} >Cancle Booking</button>
      }

    
    </div>
    </div>

     
     

   {/* container */}
  </div> 
    </>
  )
}

export default HotelsCards
