import React from 'react'

import logo from '../images/logo.png'


import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback, useContext,useMemo } from 'react';

import { DarkMode } from '../App';

import Search from './Search';





const Header = () => {
    let location = useLocation()
    const [profile, setProfile] = useState('')
    const darkMode = useContext(DarkMode)



    const LogOut = useCallback(() => {
        if (profile !== null) {
            return <span onClick={removeProfile} className="btn-logout btn">Log Out  <i className="ms-1 fas fa-sign-out-alt"></i></span>
        }
    }, [profile])

    const removeProfile = useMemo(() => {
        window.localStorage.removeItem("firstName")
    }, []);

    useEffect(() => {
        const profileName = localStorage.getItem("firstName");
        setProfile(profileName)
    }, [profile, location.pathname])

    return (
        <div className='header position-relative'>
            <Link to="/"> <img src={logo} alt="" style={{ width: '92px' }} /></Link>
            <div className="profile d-flex align-items-center">
                <Search></Search>
                <div className="create-list-link me-3">
                    <Link to={`/createList`}> Create List</Link>
                </div>
                <label className="switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onClick={(e) => {
                        darkMode.setDarkMode(e.target.checked)
                    }} />
                    <div className="slider round"></div>
                </label>
                <Link to={profile == null ? `/register` : `/`} className='register-link mx-3'> {profile == null ? "Register" : `Hello ${profile}`}</Link>
                {LogOut()}
            </div>


        </div >

    )
}

export default Header
