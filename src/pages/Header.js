import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cartdrawer from '../components/cart/Cartdrawer';
import Signin from '../components/login/Signin';
const Header = () => {
    const cartcount = useSelector((state) => state.shop.cart);
    const [cartState, setcartState] = React.useState(false)
    const [openSignin, setSigninOpen] = React.useState(false);
    const [navBar, setNavBar] = React.useState(false);
    const openCart = () => {
        setcartState(true)
    }
    const closeCart = () => {
        setcartState(false)
    }
    const handleSigninOpen = () => {
        setSigninOpen(true);
    };
    const handleSigninClose = () => {
        setSigninOpen(false);
    };
    const onScroll = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        }
        else {
            setNavBar(false);
        }
    }
    window.addEventListener('scroll', onScroll)
    return (
        <>
            <header className={navBar ? 'header3_wrapper dark_header' : 'header3_wrapper'}>
                <div className="d-flex flex-wrap top-bar">
                    <div className="">
                        <div className="location">
                            <span className="fa fa-map"></span>
                            <a href="#">Maharashtra</a>
                        </div>
                    </div>
                    <div className="">
                        <span className="fa fa-globe"></span>
                        <a href="#">Language</a>

                    </div>
                    <div className="">
                        <select >
                            <option value="eng">En</option>
                            <option value="eng">Hn</option>
                        </select>
                    </div>
                    <div className="">
                        <div className="weather">
                            <a href="#">
                                32.4 <sup>C |  F</sup>
                            </a>
                            <span>&nbsp; Sunset 6:23 PM</span>
                        </div>
                    </div>
                </div>
                <div className="clv_header3">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="clv_left_header">
                                <div className="clv_logo">
                                    <a href="index.html"><img src="images/home/logo.png" alt="fab logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10">
                            <div className="clv_right_header">
                                <div className="clv_menu">
                                    <div className="clv_menu_nav">
                                        <ul>
                                            <li>
                                                <Link to="/" >home</Link>
                                            </li>
                                            <li>
                                                <a href="#">Shop</a>
                                                <ul>
                                                    <li><Link to="/seeds">Seeds</Link></li>
                                                    <li><a href="index.html">Fertilizers</a></li>

                                                </ul>
                                            </li>
                                            <li><Link to="/aboutus">about us</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                            <li>
                                                <a href="#">pages</a>
                                                <ul>
                                                    <li><a href="profile.html">profile</a></li>
                                                    <li><a href="products.html">products</a></li>
                                                    <li><a href="product_single.html">product single</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="cart_single.html">my cart</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>

                                            <li><a href="contact.html">contact us</a></li>
                                        </ul>
                                    </div>
                                    <div className="cart_nav">
                                        <ul>
                                            <li>
                                                <a className="search_toggle" href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a className="cart_toggle" href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="18px"
                                                        height="20px"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            fill="rgb(255, 255, 255)"
                                                            d="M16.712,5.566 C16.682,5.244 16.404,4.997 16.071,4.997 L12.857,4.997 L12.857,3.747 C12.857,1.678 11.127,-0.004 9.000,-0.004 C6.873,-0.004 5.143,1.678 5.143,3.747 L5.143,4.997 L1.928,4.997 C1.595,4.997 1.318,5.244 1.288,5.566 L0.002,19.315 C-0.014,19.490 0.046,19.664 0.168,19.793 C0.290,19.923 0.462,19.997 0.643,19.997 L17.357,19.997 C17.538,19.997 17.710,19.923 17.832,19.793 C17.952,19.664 18.014,19.490 17.997,19.315 L16.712,5.566 ZM6.428,3.747 C6.428,2.367 7.582,1.247 9.000,1.247 C10.417,1.247 11.571,2.367 11.571,3.747 L11.571,4.997 L6.428,4.997 L6.428,3.747 ZM1.347,18.745 L2.515,6.247 L5.143,6.247 L5.143,7.670 C4.759,7.887 4.500,8.286 4.500,8.746 C4.500,9.436 5.076,9.996 5.786,9.996 C6.495,9.996 7.071,9.436 7.071,8.746 C7.071,8.286 6.812,7.887 6.428,7.670 L6.428,6.247 L11.571,6.247 L11.571,7.670 C11.188,7.887 10.928,8.284 10.928,8.746 C10.928,9.436 11.505,9.996 12.214,9.996 C12.924,9.996 13.500,9.436 13.500,8.746 C13.500,8.286 13.240,7.887 12.857,7.670 L12.857,6.247 L15.484,6.247 L16.653,18.745 L1.347,18.745 Z"
                                                        />
                                                    </svg>

                                                    <span>{cartcount}</span>
                                                </a>
                                                <div className="clv_cart_box">
                                                    <div className="cart_section">
                                                        <div className="cart-header">
                                                            <div className="cart">
                                                                <h5><span className="fa fa-shopping-cart"></span> Cart</h5>
                                                            </div>
                                                            <div className="close">

                                                                <h5><span className="fa fa-close"></span></h5>
                                                            </div>
                                                        </div>
                                                        <ul className="overflow-cart">
                                                            <li>
                                                                <div className="cart_block">
                                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" />
                                                                </div>
                                                                <div className="cart_block">
                                                                    <h5>Pumpkin Seed</h5>
                                                                    <div className="item_quantity">
                                                                        <a href="#" className="quantity_minus" >-</a>
                                                                        <input type="text" value="1" className="quantity" disabled />
                                                                        <a href="#" className="quantity_plus" >+</a>
                                                                    </div>
                                                                </div>
                                                                <div className="cart_block">
                                                                    <h4><span><i className="fa fa-usd" aria-hidden="true"></i></span> 43</h4>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="cart_block">
                                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" />
                                                                </div>
                                                                <div className="cart_block">
                                                                    <h5>Pumpkin Seed</h5>
                                                                    <div className="item_quantity">
                                                                        <a href="#" className="quantity_minus" >-</a>
                                                                        <input type="text" value="1" className="quantity" disabled />
                                                                        <a href="#" className="quantity_plus" >+</a>
                                                                    </div>
                                                                </div>
                                                                <div className="cart_block">
                                                                    <h4><span><i className="fa fa-usd" aria-hidden="true"></i></span> 43</h4>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <h3>total</h3>
                                                                <h4><span><i className="fa fa-usd" aria-hidden="true"></i></span> 54</h4>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <a href="#" className="cart_action_btn">check out</a>
                                                </div>
                                            </li>
                                            <li>
                                                <label for="block-nav">

                                                    <a className="user_profile">
                                                        <i className="fa fa-user-circle " aria-hidden="true">

                                                        </i>
                                                    </a>
                                                </label>
                                                <input type="checkbox" id="block-nav" className="check-nav" />
                                                <ul className="user-profile-active">
                                                    <li><a href="#">Profile</a></li>
                                                    <li><a href="#">Logout</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu_toggle">
                                                <span>
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 53 53"
                                                        style={{ enableBackground: "new 0 0 53 53" }}
                                                        xmlSpace="preserve"
                                                        width="20px"
                                                        height="20px"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path d="M2,13.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,13.5,2,13.5z" />
                                                                <path d="M2,28.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,28.5,2,28.5z" />
                                                                <path d="M2,43.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,43.5,2,43.5z" />
                                                            </g>
                                                        </g>
                                                    </svg>

                                                </span>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Cartdrawer opencart={cartState} closecart={closeCart} />
            <Signin open={openSignin} handleClose={handleSigninClose} />
            <div className='profile_toggle'>
                <button onClick={handleSigninOpen}>
                    <img src={process.env.PUBLIC_URL + 'images/login.gif'} />
                </button>
            </div>

        </>

    )
}

export default Header