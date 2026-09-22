import React from "react";
import HotelsCards from "./HotelsCards";
import styles from "./Hotels.module.css";

const Hotels = ({ hotels }) => {
  return (
    <div className={styles.HotelsContainer}>
      {hotels.map((element) => {
        console.log("element", element);
        return <HotelsCards key={element.id} hotel={element} />;
      })}
    </div>
  );
};

export default Hotels;
