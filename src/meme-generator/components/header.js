import React from "react"
import trollFace from "../resources/TrollFace.png"
import '../css/header.css'

function Header(){
    return (
        <header className="header">
            <img 
                src={trollFace} 
                className="header--img"
            />

            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header;