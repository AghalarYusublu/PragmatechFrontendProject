import React from 'react'
import img from '../../images/download.png'

import { useHistory } from 'react-router'

const Register = () => {
    let router = useHistory()

    return <>
        <div id='register-section' >
            <div className="container">
                <div className="step1 text-center">
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
