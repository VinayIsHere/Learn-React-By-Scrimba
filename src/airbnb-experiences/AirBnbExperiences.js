import React from "react"
import "./css/AirBnbExperiences.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardsData from "./resources/data"

function AirBnbExperiences(){
    const cards= cardsData.map(item => {
        return (
            <Card 
                key= {item.id}
                item= {item}
            />
        )
    })
    return (
        <div className="Airbnb">
            <Navbar />
            <Hero />
            <section className= "cards--list">
                {cards}
            </section>
        </div>
    )
}

export default AirBnbExperiences;