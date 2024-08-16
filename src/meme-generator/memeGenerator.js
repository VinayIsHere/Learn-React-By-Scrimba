import React from "react"
import Header from "./components/header";
import Meme from "./components/meme";
import './memeGenerator.css'

function MemeGenerator(){
    return (
        <div className="memeContainer">
            <Header />
            <Meme />
        </div>
    )
}

export default MemeGenerator;