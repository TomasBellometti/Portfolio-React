import React from 'react'
import Tomi from '../../assets/tomi.jpg'
import "./sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar-item">
               <h3 className="sidebar-item__title">Sobre mi</h3>
               <img src={Tomi} alt="" className="sidebar-item__img" />
               <p className="sidebar-item__txt">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quibusdam voluptatibus eligendi at! Atque, doloribus! Aliquam, sequi mollitia culpa quibusdam iure harum eligendi pariatur deserunt!
               </p>
           </div>
           <div className="sidebar-item">
               <h3 className="sidebar-item__title">Formación</h3>
               {/* <img src={Tomi} alt="" className="sidebar-item__img" /> */}
               <ul className="sidebar-item__formacion">
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Wordpress</li>
                   <li>JS</li>
                   <li>PHP</li>
                   <li>MERN Stack</li>
                   <li>MySQL</li>
               </ul>
           </div>
        </div>
    )
}

export default Sidebar
