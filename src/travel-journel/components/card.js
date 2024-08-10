import React from "react"
import locationIcon from "../resources/location.webp"
import "../css/card.css"

function Card(props){

    return (
        <div className="card">
            <img className="card--image" src={props.image}/>
            
            <div className="card--details">
                <div className="card--header">
                    <img className="locationicon" src={locationIcon}/>
                    <h3 className="card--location">{props.location}</h3>
                    <a className="card--url" href={props.url}>View on Google Maps</a>
                </div>

                <h1 className="card--title">{props.title}</h1>

                <div className="card--experience">
                    <strong className="card--date">{props.startDate} - {props.endDate}</strong>
                    <small className="card--description">{props.description}</small>
                </div>

            </div>
        </div>
    )
}

export default Card;