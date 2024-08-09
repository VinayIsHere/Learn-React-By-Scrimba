import React from "react"
import "./css/footer.css"

//importing icons
import TwitterIcon from "./resources/TwitterIcon.png"
import FacebookIcon from "./resources/FacebookIcon.png"
import GitHubIcon from "./resources/GitHubIcon.png"
import InstagramIcon from "./resources/InstagramIcon.png"

function Footer(){
    return (
        <div className="Footer">
            <img src={TwitterIcon} alt="Twitter" />
            <img src={FacebookIcon} alt="Twitter" />
            <img src={GitHubIcon} alt="Twitter" />
            <img src={InstagramIcon} alt="Twitter" />
        </div>
    )
}

export default Footer;