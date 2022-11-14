import React from "react"
import Twitter from "../images/square-twitter.svg"
import Facebook from "../images/square-facebook.svg"
import Instagram from "../images/square-instagram.svg"
import Github from "../images/square-github.svg"

export default function Socials() {
    return (
        <div className="socials--body">
            <img src={Twitter} className="brands"/>
            <img src={Facebook} className="brands"/>
            <img src={Instagram} className="brands"/>
            <img src={Github} className="brands"/>
        </div>
    )
}
