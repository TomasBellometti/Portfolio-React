import React from 'react'
import "./home.css"
import Header from '../componentes/header/Header'
import Sidebar from '../componentes/sidebar/Sidebar'
import Postlist from '../componentes/postList/PostList'
import Form from '../componentes/form/Form'

function Home() {
    return (
    <>
    <Header />
        <div className="home">
            <Postlist />            
            <Sidebar />
            <Form />
        </div>
    </>
    )
}

export default Home
