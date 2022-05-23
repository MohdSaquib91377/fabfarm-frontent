import React from 'react'
import { Link } from 'react-router-dom'
import './mobilemenu.css'
function Mobilemenu({ menuOpen }) {
    return (
        <div className={menuOpen ? 'display-menu' : 'display-none'}>
            <ul>
                <li>
                    <Link to="/" >home</Link>
                </li>
                {/* <li style={{ color: 'white', cursor: 'pointer' }}>
        Products
        <ul>
          <li><Link to='/shop'>Seeds</Link></li>
        <li><a href="index.html">Fertilizers</a></li>
            </ul>
            </li> */}
                <li><Link to="/aboutus">about us</Link></li>

                <li><Link to="/contact">Contact us</Link></li>

            </ul>
        </div>
    )
}

export default Mobilemenu