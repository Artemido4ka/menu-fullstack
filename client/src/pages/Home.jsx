import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import MenuProducts from "../components/MenuProducts";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <MenuProducts />
      <Footer/>
    </div>
  );
};

export default Home;
