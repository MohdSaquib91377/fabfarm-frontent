import React from 'react'
import { Link } from 'react-router-dom'

function Desktopmenu() {
    return (
        <div className="clv_menu_nav">
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

export default Desktopmenu