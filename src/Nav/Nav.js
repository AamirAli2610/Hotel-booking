import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Hotels Booking </h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/hotelsList">Hotels List</a>
        <a href="/contact">Contact</a>
        <a href="/bookedhotels">Booked Hotels</a>
        <a href="/favourithotel"> Favourite Hotels</a>
      </nav>
    </div>
  );
};

export default Nav;
