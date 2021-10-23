import React from 'react'
import logo from '../images/footer-logo.png'

const Footer = () => {
    return <>
        <footer>
            <img src={logo} alt='Footer-logo'></img>
            <p>©2019. All Rights Reserved</p>
            <a href="https://github.com/AghalarYusublu" target="_blank">Github</a>
        </footer>
    </>
}

export default Footer
