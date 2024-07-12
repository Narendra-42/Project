import { useState } from "react";

import "./App.css";
import Navbar from "./components/navBar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import ProductSection from "./components/products/ProductSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection/>
    </>
  );
}

export default App;
