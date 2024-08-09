import Info from "./info";
import React from "react";
import './css/businessCard.css'
import About from "./about";
import Interest from "./interests";
import Footer from "./footer";

function BusinessCard(){
    return (
        <div className="Card" >
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

export default BusinessCard;