import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('Home');
        } else if (location.pathname === '/add') {
            setActiveTab("AddUser");
        } else if (location.pathname === '/about') {
            setActiveTab("About")
        }
    }, [location])

    return (
        <div className='header'>
            <p className='logo'>Contact App</p>
            {/* --------------- Home ------------------ */}
            <div className='header-right'>
                <Link to='/'>
                    <p className={`${activeTab === 'Home'} ? "activate" : ""`}
                        onClick={() => setActiveTab("Home")}
                    >Home</p></Link>
            </div>
            {/* ---------------------Add------------------------ */}
            <div className='header-right'>
                <Link to='/add'>
                    <p className={`${activeTab === 'addUser'} ? "activate" : ""`}
                        onClick={() => setActiveTab("add")}
                    >Home</p></Link>
            </div>
            {/* ----------------------about------------------------------- */}
            <div className='header-right'>
                <Link to='/about'>
                    <p className={`${activeTab === 'about'} ? "activate" : ""`}
                        onClick={() => setActiveTab("about")}
                    >Home</p></Link>
            </div>
        </div>
    )
}

export default Header

// ------------------ just add this header in which file u need to dispaly header like this way ----------------
{/* <Header/> */ }
