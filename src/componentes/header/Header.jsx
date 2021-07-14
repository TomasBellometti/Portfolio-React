import React from 'react'
import "./header.css"
import Img from "../../assets/pc.png"

function Header() {
    return (
        <div className="hero">
            <h1 className="hero-title">
                TOMI´S
            </h1>
            <span className="hero-subtitle">Diseño y desarrollo web</span>
            {/* <div className="hero-img"> */}
                {/* <img src={Img} alt="" /> */}
            {/* </div> */}
            <img src={Img} alt="" className="hero-img_sm"/>
        </div>
    )
}

export default Header
