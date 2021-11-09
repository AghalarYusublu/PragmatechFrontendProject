import React from 'react'
import img from '../../images/download.png'
import { DarkMode } from '../../App';
import { useHistory } from 'react-router'
import { useContext } from 'react';

const Register = () => {
    let router = useHistory()
    const darkMode = useContext(DarkMode)
    return <>
        <div id='register-section' style={darkMode.darkMode === false ? { borderColor: "#141414",color: "#141414" } : { borderColor: "hsla(0, 0%, 89.8%, .0784313725490196)",color: "#e5e5e5"  }} >
            <div className="container">
                <div className="step1 text-center" >
                    <img src={img} alt='register-img'></img>
                    <p className="steps">STEP <strong>1</strong> OF <strong>3</strong></p>
                    <p className="head-line">Choose Your Plan.</p>
                    <p>Choose from any of our three plans,
                        <br />
                        and you won't be charged until after
                        <br />
                        your free month ends.
                    </p>
                    {
                        <button className='btn-step' onClick={() => {
                            router.push({
                                pathname: "/registerStep-2",
                            })
                        }} >SEE THE PLANS</button>
                    }

                </div>
            </div>
        </div>
    </>
}

export default Register
