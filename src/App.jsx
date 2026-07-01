import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";

import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import ProductDetail from "./Pages/ProductDetail";
import ShopNow from "./Pages/ShopNow";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/CheckOut";

const App = () => {
  return (
    <>
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Product/:id" element={<ProductDetail />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Shop" element={<ShopNow />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;