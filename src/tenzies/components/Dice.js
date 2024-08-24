import React from "react"
import '../css/Dice.css'

function Dice(props){

    const styles= {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div className="diceBox" style={styles} onClick={props.handleClick}>
            <h2 className="diceNumber"> {props.digit} </h2>
        </div>
    )
}

export default Dice;