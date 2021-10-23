import React from 'react'
import { useLocation, useHistory } from 'react-router'

const RegisterFinish = () => {
    let router = useHistory()
    let location = useLocation()

    return <>
        <div className="container">
            <section id="register-section">
                <div className="step4-items">
                    {
                        (location.state) ? <p className="head-line">
                            Congratulations, <span class="red">{location.state.firstName}</span>!
                            <br />You've registered for the
                            <span class="red"> {location.state.plan} </span> plan,
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
