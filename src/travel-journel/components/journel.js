import React from "react"
import Card from "./card";
import data from "../resources/data"
import JournelHeader from "./header";
import "../css/journel.css"

function Journel(){

    const cards= data.map(item => {
        return (
            <Card 
                key= {item.id}
                image= {item.image}
                title= {item.title}
                url= {item.googleMapsUrl}
                startDate= {item.startDate}
                endDate= {item.endDate}
                description= {item.description}
                location= {item.location}
            />
        )
    })

    return (
        <div className="journel">
            <JournelHeader/>
            <section className= "travel--list">
                {cards}
            </section>
        </div>
    )
}

export default Journel;