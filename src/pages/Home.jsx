import React from 'react'
import "./home.css"
import Header from '../componentes/header/Header'
import Sidebar from '../componentes/sidebar/Sidebar'
import Postlist from '../componentes/postList/PostList'

function Home() {
    return (
    <>
    <Header />
        <div className="home">
            <Postlist />            
            <Sidebar />
        </div>
        </>
    )
}

export default Home
