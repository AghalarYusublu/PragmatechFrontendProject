import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { DarkMode } from '../App';

const Navbar = () => {
    let router = useHistory()
    const darkMode=useContext(DarkMode)
    return <>
        <div className="flex bg-gray-300 h-24 items-center justify-center gap-6" >          
            <Link to="/" className='bg-blue-500 p-3 rounded-xl'>
                Home
            </Link>
            <Link  to={{
                pathname:'/about',
                state:''
            }} className='bg-blue-500 p-3 rounded-xl' >
                About
            </Link>
            <Link to="/team/Aghalar" className='bg-blue-500 p-3 rounded-xl'>
                Team
            </Link>
            <input type="checkbox"  className='w-5 h-5' onClick={(e)=>{
                darkMode.setDarkMode(e.target.checked)
            }}/>
        </div>
    </>
}
export default Navbar