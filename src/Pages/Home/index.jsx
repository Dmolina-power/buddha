import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import Card from "../../Components/Card";

//style
import "./style.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <Carousel />
          <Card />
        </div>
        <div className="col">

        </div>
        
         </div>
        <Footer />
     
    </>
  );
}

export default Home;
