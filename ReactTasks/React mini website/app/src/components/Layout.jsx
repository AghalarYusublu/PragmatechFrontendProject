import React from 'react'
import { useHistory, useLocation } from 'react-router'

const Layout = ({ children }) => {
    let router = useHistory()
    let location = useLocation()

    return (
        <div>
            {children}
            {
                !(location.pathname === '/') ? <button className='m-5 bg-green-300 p-2 rounded-xl' onClick={() => {
                    router.push({
                        pathname: "/",
                    })
                }} >Back Home Page</button> : <div></div>
            }
        </div>

    )
}
export default Layout
