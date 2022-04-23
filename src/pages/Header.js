import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cartdrawer from '../components/cart/Cartdrawer';
import Signin from '../components/login/Signin';
import { connect } from 'react-redux';
import Signup from '../components/login/Signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Weather from '../components/weatherapi/Weather';
const Header = ({ cart }) => {
    const [cartCount, setCartCount] = React.useState(0);
    const [cartState, setcartState] = React.useState(false)
    const [openSignin, setSigninOpen] = React.useState(false);
    const [openSignup, setSignupOpen] = React.useState(false);
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
    const handleSignupClose = () => {
        setSignupOpen(false);
    };
    const tiggerSignup = () => {
        setSigninOpen(false);
        setSignupOpen(true);
    }
    const tiggerSignin = () => {
        setSignupOpen(false);
        setSigninOpen(true);
    }
    const onScroll = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        }
        else {
            setNavBar(false);
        }
    }
    window.addEventListener('scroll', onScroll)
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.quantity;
        });
        setCartCount(count)
    }, [cart, cartCount]);
    const countStyleDisplay = {
        display: 'inline-block',
        backgroundColor: 'white',
        borderRadius: '50%',
        paddingLeft: '4px',
        paddingRight: '4px',
        position: 'absolute',
        marginTop: '8px',
        fontSize: '14px',
        width: '20px',
        height: '20px',
        textAlign: 'center',

    }
    const countStyleNone = {
        display: 'None'
    }
    return (
        <>
            <header className={navBar ? 'header3_wrapper dark_header' : 'header3_wrapper'}>
                <Weather />
                <div className="clv_header3">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="clv_left_header">
                                <div className="clv_logo">
                                    <a href="/"><img src="images/home/logo.png" alt="fab logo" /></a>
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
                                            <li style={{ color: 'white', cursor: 'pointer' }}>
                                                <Link to='/shop'>Shop</Link>
                                                <ul>
                                                    <li><a href='#'>Seeds</a></li>
                                                    <li><a href="index.html">Fertilizers</a></li>

                                                </ul>
                                            </li>
                                            <li><Link to="/aboutus">about us</Link></li>

                                            <li><Link to="/contact">Contact us</Link></li>
                                            <li
                                                style={{ color: 'white', cursor: 'pointer' }}
                                                onClick={handleSigninOpen} >Signin</li>
                                        </ul>
                                    </div>
                                    <div className="cart_nav">
                                        <ul>
                                            <li>
                                                <Link to='/profile'><FontAwesomeIcon color='#ffffff' icon={faUser} /></Link>
                                            </li>
                                            <li>
                                                <a className="search_toggle" href="#"><FontAwesomeIcon color='#ffffff' icon={faSearch} /></a>
                                            </li>
                                            <li>
                                                <button
                                                    style={{ all: 'unset', cursor: 'pointer' }}
                                                    onClick={openCart}>
                                                    <FontAwesomeIcon color='#ffffff' icon={faShoppingCart} />
                                                    <span
                                                        style={cartCount >= 1 ? countStyleDisplay : countStyleNone}>{cartCount}</span>

                                                </button>
                                            </li>
                                            <li>
                                                <label htmlFor="block-nav">

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
            <Signin open={openSignin} trigger={tiggerSignup} handleClose={handleSigninClose} />
            <Signup open={openSignup} triggersignin={tiggerSignin} handleClose={handleSignupClose} />
            {/* <div className='profile_toggle'>
                <button onClick={handleSigninOpen} style={{ border: 'none' }}>
                    <img src={process.env.PUBLIC_URL + 'images/login.gif'} />
                </button>
            </div> */}

        </>

    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStateToProps)(Header)