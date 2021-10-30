import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return<>
      <ul className='d-flex'>
          <li><Link to='/covidInfo' > Covid Info</Link></li>
          <li>
            <Link to='/randomImage' > Random Image</Link>
          </li>
          <li><Link to='/qrCode' > QrCode</Link></li>
        </ul>
    
    </>
}

export default Header
