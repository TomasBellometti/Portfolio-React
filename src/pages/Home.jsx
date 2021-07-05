import React from 'react'
import "./home.css"
import Header from '../componentes/header/Header'
import Sidebar from '../componentes/sidebar/Sidebar'
import Postlist from '../componentes/postList/PostList'
import Form from '../componentes/form/Form'
import Footer from '../componentes/footer/Footer'

function Home() {
    return (
    <>
    <Header />
        <div className="home">
            <Postlist />            
            <Sidebar />
            <Form />
        </div>
        <Footer />
    </>
    )
}

export default Home
