import { configureStore } from "@reduxjs/toolkit";
import bookingReducers from "./BookingSlice";
import favouriteHotelsReducer from "./FavouritHotelSlice";

const store = configureStore({
  reducer: {
    booking: bookingReducers,
    favouriteHotels: favouriteHotelsReducer,
  },
});

export default store;
