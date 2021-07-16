import React from 'react'
import "./header.css"
import Img from "../../assets/pc.png"

function Header() {
    return (
        <div className="hero">
            <h1 className="hero-title">
                Tomas Bellometti
            </h1>
            <span className="hero-subtitle">Diseño y desarrollo web</span>
            <span className="hero-subtitle_adc">Creo sitios web ideales para su necesidad.</span>
            {/* <div className="hero-img"> */}
                {/* <img src={Img} alt="" /> */}
            {/* </div> */}
            <img src={Img} alt="" className="hero-img_sm"/>
        </div>
    )
}

export default Header
