import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Tour from "./Pages/Tour";
import Pages from "./Pages/Pages";
import Blog from "./Pages/Blog";
import {Destination} from "./Pages/Destination";
import TourPackages from "./Pages/TourPackages";
import PackageOffer from "./Pages/PackageOffer";
import PackageDetail from "./Pages/PackageDetail";
import TourCart from "./Pages/TourCart";
import PackageBooking from "./Pages/PackageBooking";
import Confirmation from "./Pages/Confirmation";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/tour/destination" element={<Destination />} />
          <Route path="/tour/packages" element={<TourPackages />} />
          <Route path="/tour/offer" element={<PackageOffer />} />
          <Route path="/tour/detail" element={<PackageDetail />} />
          <Route path="/tour/cart" element={<TourCart />} />
          <Route path="/tour/booking" element={<PackageBooking />} />
          <Route path="/tour/confirmation" element={<Confirmation />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
