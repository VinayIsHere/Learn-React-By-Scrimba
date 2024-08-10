import React from "react"
import '../css/header.css'
import globeIcon from '../resources/globe.png'

function JournelHeader(){
    return (
        <div className="header">
            <img className="header--img" src={globeIcon} alt="globe"/>
            <p className="header--text">my travel journel.</p>
        </div>
    )
}

export default JournelHeader;