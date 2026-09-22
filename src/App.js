import "./App.css";
import Nav from "./Nav/Nav";
import hotelsData from "./assets/HotelsData";
import About from "./components/About";
import Home from "./components/Home";
import Hotels from "./components/Hotels/Hotels";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import HotelDetails from "./components/Hotels/HotelDetails";
import HotelBookingPage from "./components/Hotels/HotelBookingPage";
import BookedHotels from "./components/Hotels/BookedHotels";
import FavouritHotel from "./components/FavouritHotel";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/hotelsList" element={<Hotels hotels={hotelsData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels/:id" element={<HotelDetails />}></Route>
        <Route path="/hotels/:id/book" element={<HotelBookingPage />}></Route>
        <Route path="/bookedhotels" element={<BookedHotels />}></Route>
        <Route path="/favourithotel" element={<FavouritHotel />}></Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
