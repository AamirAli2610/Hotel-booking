import { createSlice } from "@reduxjs/toolkit";
const savedHotels = JSON.parse(localStorage.getItem("favouriteHotels")) || [];

console.log("saved hotels", savedHotels);

const FavouritHotelSlice = createSlice({
  name: "favourite",
  initialState: {
    favourites: savedHotels,
  },

  reducers: {
    addToFavourit(state, action) {
      const alreadyExists = state.favourites.some(
        (hotel) => hotel.id === action.payload.id,
      );

      if (!alreadyExists) {
        state.favourites.push(action.payload);
      }

      localStorage.setItem("favouriteHotels", JSON.stringify(state.favourites));
    },
  },
});

export default FavouritHotelSlice.reducer;
export const { addToFavourit } = FavouritHotelSlice.actions;
