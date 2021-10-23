import React from 'react'

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../images/logo.png'

const Header = () => {
    const [profile, setProfile] = useState('')
    useEffect(() => {
        const profileName = localStorage.getItem("firstName");
        setProfile(profileName)
    },[])
    return (
        <div className='header'>
            <Link to="/"> <img src={logo} alt="" style={{ width: '92px' }} /></Link>
            <Link to="/register" className='register-link'> {profile == null ? "Register" : `Salam ${profile}`}</Link>
        </div>

    )
}

export default Header
