import React from "react"
import AirbnbLogo from "../resources/airbnblogo.png"
import "./css/Navbar.css"

function Navbar(){
    return (
        <nav className="nav">
            <img src={AirbnbLogo} className="nav--logo"/>
        </nav>
    )
}

export default Navbar;