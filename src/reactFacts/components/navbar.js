import React from "react"
import '../css/navbar.css'

function Navbar(props){

    return (
        <nav className={props.darkmode ? "dark" : ""}>
            <img className="nav--logo_icon" src="/images/ReactFacts/react-icon-small.png"/>
            <h3 className="nav--logo_text"> ReactFacts</h3>

            <div className="toggler">
                <p className="toggler--light">Light</p>

                <div className="toggler--slider" onClick={props.changeMode}>

                    <div className="toggler--slider--circle"></div>
                </div>
                
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar;