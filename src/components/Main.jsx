import React from "react"
import Socials from "./Socials"
import Portrait from "../images/profile-image.jpeg"

export default function Main() {
    return (
        <div className="main--body">
            <img src={Portrait} className="portrait" />
            <div className="main--body-header">
                <h2 className="main--title">Keon White</h2>
                <p className="main--subtitle">Full-stack Developer</p>
                <small className="main--caption">keonxavier.com</small>
            </div>
            <div className="main--body-buttons">
                <button className="main--email-button">
                <i className="fa fa-envelope"/>Email
                </button>
                <a href="https://www.linkedin.com/in/keon-white/" target="blank">
                  <button className="main--linkedin-button" type="button" >
                  <i className="fa fa-linkedin-square"/>LinkedIn
                  </button>
                </a>
            </div>
            <div className="main--body-text">
                <h3 className="main--body-subhead v1">About</h3>
                <p className="main--para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="main--body-subhead v2">Interests</h3>
                <p className="main--para">Board Game expert. Music scholar. Internet fanatic. Lego buff. Horror geek. Design ninja. Tea fanatic.</p>
            </div>
            <Socials />
        </div>
    )
}
