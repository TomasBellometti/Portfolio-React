import React from 'react'
import "./form.css"

function Form() {
    return (
        <div className="contacto-conteiner">
            <h2 className="contacto-title">Dejame un mensaje</h2>
            <form action="" className="contacto-form">

                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" className="contacto-imput"/>

                <label htmlFor="mail">Correo:</label>
                <input type="text" name="mail" id="mail" className="contacto-imput"/>

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>

                <button className="contacto-btn">Enviar</button>
            </form>
            
        </div>
    )
}

export default Form
