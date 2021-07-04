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
               Diseñador Web. <br /> Estudié en la Escuela Multimedial Da Vinci, realice un curso de PhP procedural en BIT Digital Academy, y actualmente estoy aprendiendo el Stack de MERN.
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
           <div className="sidebar-item">
                <h3 className="sidebar-item__title">Redes</h3>
                <ul className="sidebar-item__redes">
                    <li><i className="fab fa-linkedin sidebar-item__icons"></i></li>
                    <li><i className="fab fa-facebook-square sidebar-item__icons"></i></li>
                    <li><i className="fab fa-instagram-square sidebar-item__icons"></i></li>
                    <li><i className="fab fa-git-square sidebar-item__icons"></i></li>
                </ul>               
           </div>
        </div>
    )
}

export default Sidebar
