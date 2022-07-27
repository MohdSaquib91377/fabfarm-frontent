import React, { useEffect, useState } from 'react'
import Cartdrawer from '../components/cart/Cartdrawer';
import Signin from '../components/login/Signin';
import { connect } from 'react-redux';
import Signup from '../components/login/Signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import Weather from '../components/weatherapi/Weather';
import Desktopmenu from '../components/header/Desktopmenu';
import Mobilemenu from '../components/header/Mobilemenu';
import Searchbar from '../components/header/searchbar/Searchbar';
const Header = ({ totalCartCount, isAuthorized, cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartState, setcartState] = useState(false)
    const [navBar, setNavBar] = useState(false);
    const [responsive, setResponsive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const openCart = () => {
        setcartState(true)
    }
    const closeCart = () => {
        setcartState(false)
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
        cart.map(item => {
            count += item.quantity;
        })
        setCartCount(count)
    }, [cart, cartCount]);

    const handleResize = () => {
        if (window.innerWidth < 988) {
            setResponsive(true)
        }
        else {
            setResponsive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
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
        whiteSpace: "nowrap",

    }
    const countStyleNone = {
        display: 'None'
    }
    return (
        <>
            <header className={navBar ? 'header3_wrapper dark_header' : 'header3_wrapper'}>
                {/* <Weather /> */}
                <div className="clv_header3 ">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-4">
                            <div className="clv_left_header">
                                <div className="clv_logo">
                                    <a href="/"><img src={process.env.PUBLIC_URL + "/images/home/logo.png"} alt="fab logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-8 d-flex align-items-center justify-content-end">
                            <div className="clv_right_header">
                                <div className="clv_menu">
                                    {
                                        responsive ?
                                            <Mobilemenu menuOpen={menuOpen} />
                                            :
                                            <Desktopmenu />
                                    }


                                    <div className="cart_nav">
                                        <ul>
                                            <li>
                                                <button
                                                    className="search_toggle"
                                                    onClick={() => setSearchBarVisible(!searchBarVisible)}
                                                >
                                                    <FontAwesomeIcon color='#ffffff' icon={faSearch} />
                                                </button>
                                            </li>
                                            <li>
                                                <button style={{ all: 'unset', cursor: 'pointer' }} onClick={openCart}>
                                                    <FontAwesomeIcon color='#ffffff' icon={faShoppingCart} />
                                                    {
                                                        isAuthorized ?
                                                            <span
                                                                style={totalCartCount >= 1 ? countStyleDisplay : countStyleNone}>{
                                                                    totalCartCount
                                                                }</span> :
                                                            <span
                                                                style={cartCount >= 1 ? countStyleDisplay : countStyleNone}>{
                                                                    cartCount
                                                                }</span>
                                                    }

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

                                                <button
                                                    onClick={() => setMenuOpen(!menuOpen)}
                                                >
                                                    {menuOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                                                </button>

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
            <Searchbar searchBarVisible={searchBarVisible} setSearchBarVisible={() => setSearchBarVisible(!searchBarVisible)} />
            {isAuthorized ? undefined :
                <>
                    <Signin />
                    <Signup />
                </>}
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
        isAuthorized: state.shop.isAuthorized,
        totalCartCount: state.shop.totalCartCount
    }
}
export default connect(mapStateToProps)(Header)