import React from "react"
import './css/info.css'

//import images
import personFace from "./resources/face.png"
import emailBtn from "./resources/Email.png"
import linkedinBtn from "./resources/linkedIn.png"

function Info(){
    return (
        <div className="Info">
            <img src= {personFace} className= "personFace" alt="face"/>
            <h1 className="Name">Laura Smith</h1>
            <p className="Occupation">FrontEnd Developer</p>
            <small className="Website">laurasmith.website</small>
            
            <div className="ContactButtons">
                <img src={emailBtn} className="EmailBtn" alt="Email"/>
                <img src={linkedinBtn} className="LinkedInBtn" alt="LinkedIn"/>
            </div>
        </div>
    )
}

export default Info;