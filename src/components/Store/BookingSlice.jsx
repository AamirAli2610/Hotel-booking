import { createSlice } from "@reduxjs/toolkit";

const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: savedBookings,
  },

  reducers: {
    bookHotel(state, action) {
      state.bookings.push(action.payload);
      console.log(action.payload);

      // save the bookedHotel data to localStorage
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
  },
});

export default bookingSlice.reducer;
export const { bookHotel } = bookingSlice.actions;
