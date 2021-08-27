import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import Card from "../../Components/Card";
import Sidebar from "../../Components/Sidebar";

//style
import "./style.css";

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            
            <Sidebar />
            
            <Carousel/>
          
             <Footer />
              

</React.Fragment>






        
    );
}

export default Home;
