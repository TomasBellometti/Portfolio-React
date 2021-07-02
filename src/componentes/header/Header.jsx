import React from 'react'
import "./header.css"
import Img from "../../assets/bg.jpg"

function Header() {
    return (
        <div className="hero">
            <h1 className="hero-title">
                Tomi's Blog
            </h1>
            <span className="hero-subtitle">Procura coquetearme más</span>
            {/* <div className="hero-img"> */}
                {/* <img src={Img} alt="" /> */}
            {/* </div> */}
        </div>
    )
}

export default Header
