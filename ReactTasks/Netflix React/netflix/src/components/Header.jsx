import React from 'react'

import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import logo from '../images/logo.png'

const Header = () => {

    const [profile, setProfile] = useState('')

    const LogOut = useCallback(() => {
        if (profile !== null) {
            return <span onClick={removeProfile} className="btn-logout btn">Log Out  <i class="ms-1 fas fa-sign-out-alt"></i></span>
        }
       
    }, [profile])

    const removeProfile = useCallback(() => {
        window.localStorage.removeItem("firstName");
    }, [])

    useEffect(() => {
        const profileName = localStorage.getItem("firstName");
        setProfile(profileName)
    }, [profile])




    return (
        <div className='header'>
            <Link to="/"> <img src={logo} alt="" style={{ width: '92px' }} /></Link>
           <div className="profile">
           <Link to={profile == null ? `/register` : `/`} className='register-link'> {profile == null ? "Register" : `Hello ${profile}`}</Link>
            {LogOut()}
           </div>
        </div>

    )
}

export default Header
