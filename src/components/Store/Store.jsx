import { configureStore } from "@reduxjs/toolkit";
import bookingReducers from "./BookingSlice";

const store = configureStore({
  reducer: {
    booking: bookingReducers,
  },
});

export default store;
