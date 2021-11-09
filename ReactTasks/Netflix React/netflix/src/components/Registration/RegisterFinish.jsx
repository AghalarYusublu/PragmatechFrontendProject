import React from 'react'
import { useLocation, useHistory } from 'react-router'
import { DarkMode } from '../../App';
import { useContext } from 'react';
const RegisterFinish = () => {
    let router = useHistory()
    let location = useLocation()
    const darkMode = useContext(DarkMode)
    return <>
        <div className="container">
            <section id="register-section"  style={darkMode.darkMode === false ? { borderColor: "#141414",color: "#141414" } : { borderColor: "hsla(0, 0%, 89.8%, .0784313725490196)",color: "#e5e5e5"  }}>
                <div className="step4-items">
                    {
                        (location.state) ? <p className="head-line">
                            Congratulations, <span className="red">{location.state.firstName}</span>!
                            <br />You've registered for the
                            <span className="red"> {location.state.plan} </span> plan,
                            <br />but don't worry, we wont charge you until your trials up.
                        </p> : null
                    }
                    {
                        <button className='btn-step continue' onClick={() => {
                            router.push({
                                pathname: "/",
                            })
                        }} >START BROWSING</button>

                    }
                </div>


            </section >
        </div >

    </>
}

export default RegisterFinish
