import React from "react"
import star from "../resources/star.png"
import "./css/Card.css"

function Card(props){
    
    let badgeText

    if(props.item.openSpots === 0){
        badgeText= "SOLD OUT"
    }
    else if(props.item.location === "Online"){
        badgeText= "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className= "card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) .</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="card--price">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;