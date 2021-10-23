import React from 'react'
import { useLocation, useHistory } from 'react-router'
import { useState, useEffect, } from 'react'

const RegisterStep3 = () => {

    let router = useHistory()
    let location = useLocation()

    const [firstName, SetFirstName] = useState()
    const [lastName, SetLastName] = useState()
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()


    let Confirm = (e) => {
        e.preventDefault()
        SetFirstName(e.target['firstName'].value)
        SetLastName(e.target['lastName'].value)
        SetLastName(e.target['email'].value)
        SetPassword(e.target['password'].value)
    }
    useEffect(() => {
        let error = [];
        if (firstName && firstName.length < 3) {
            error.push('First name must be at least 3 characters')
        }
        if (lastName && lastName.length < 3) {
            error.push('Last name must be at least 3 characters')
        }
        if (password && password.length < 8) {
            error.push('Password must be at least 8 characters')
        }
        if (error.length !== 0) {
            alert(error);
        }
        else if (firstName && lastName && password) {
            router.push({
                pathname: "/register-finish",
                state: {
                    firstName,
                    plan: location.state.plan
                },
            })
            window.localStorage.setItem('firstName',firstName)
        }

    }, [firstName, lastName, password])
    return <>
        <div className="container">
            <section id="register-section">
                <div className="step3">
                    <p className="steps">STEP <strong>3</strong> OF <strong>3</strong></p>
                    <p className="head-line">Sign up to start your free month</p>
                    <p className="dl">Create your Account</p>
                    <form onSubmit={Confirm}>
                        <input type="text" name="firstName" placeholder="First Name" required="/" />
                        <input type="text" name="lastName" placeholder="Last Name" required="/" />
                        <input type="email" name="email" placeholder="Email" required="/" />
                        <input type="password" name="password" placeholder="Password" required="/" />
                        <input type="submit" value="Confirm" className="btn-step continue" />
                    </form>

                </div>
            </section>
        </div>
    </>
}

export default RegisterStep3
