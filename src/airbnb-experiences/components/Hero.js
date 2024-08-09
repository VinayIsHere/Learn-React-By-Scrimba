import React from "react"
import GridImage from "../resources/gridimage.png"
import "./css/Hero.css"

function Hero(){
    return (
        <section className= "hero">
            <img src={GridImage} className="hero--image"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className= "hero--para">Join Unique interactive activities led by one-of-a-kind hosts- all without leaving home</p>
        </section>
    )
}

export default Hero;