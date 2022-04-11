import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cartdrawer from '../components/cart/Cartdrawer';
const Header = () => {
    const cartcount = useSelector((state) => state.shop.cart);
    const [cartState, setcartState] = React.useState(false)
    const openCart = () => {
        setcartState(true)
    }
    const closeCart = () => {
        setcartState(false)
    }
    return (
        <>
            <header id="header" className="header">
                <div className="topPanel">
                    <div className="inner">
                        <div className="snd-col l9">
                            <div className="location">
                                <a href="#">Maharashtra</a>
                            </div>
                            <div className="language">
                                <a href="#">Language</a>
                                <select name="language">
                                    <option>(EN)</option>
                                    <option>(Hi)</option>
                                </select>
                            </div>
                            <div className="weather">
                                <a href="#">
                                    32.4 <sup>C |  F</sup>
                                </a>
                                <p>Sunset 6:23 PM</p>
                            </div>
                        </div>
                        <div className="registerBlock snd-col l3 snd-right-align">
                            <a href="#">Login</a>

                            <a href="#">Sign up</a>
                        </div>
                        <div className="snd-clear"></div>
                    </div>
                </div>

                <div className="inner">
                    <div className="logo">
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="" />
                        </Link>
                    </div>
                    <div className="menuIcon hideMin999">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <nav className="nav hideMax999">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="downArrow">
                                <a>Shop </a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="seeds">
                                            <Link to="/seeds">Seeds </Link>
                                        </li>

                                        <li className="fertilizers">
                                            <a href="#">Fertlizers </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li className="downArrow">
                                <a href="#">More</a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="profile">
                                            <a href="#">My Profile </a>
                                        </li>

                                        <li className="wallet">
                                            <a href="#">My Wallet </a>
                                        </li>

                                        <li className="weather">
                                            <a href="#">Weather </a>
                                        </li>
                                        <li className="notification">
                                            <a href="#">Notification </a>
                                        </li>

                                        <li className="order">
                                            <a href="#">My order </a>
                                        </li>

                                        <li className="logout">
                                            <a href="#">Logout </a>
                                        </li>
                                    </ul>
                                </div>

                            </li>
                            <li className="search"><a href="#"><img src={process.env.PUBLIC_URL + "images/icons/search.png"} alt="" /></a></li>
                            <li className="cart"
                                onClick={openCart}>
                                <span className='cart-count'>{cartcount.length}</span>
                                <img src={process.env.PUBLIC_URL + "images/icons/shopping-cart.png"} alt="" />
                            </li>

                        </ul>
                    </nav>

                </div>
                <Cartdrawer opencart={cartState} closecart={closeCart} />
            </header>
        </>

    )
}

export default Header