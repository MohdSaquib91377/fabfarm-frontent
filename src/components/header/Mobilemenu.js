import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList, faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { setSigninOpen, setIsAuthorized, setUser, makeCartEmpty } from '../../redux/actions/productActions';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {
    Drawer,
    Box
} from '@material-ui/core';
import './mobilemenu.css'
function Mobilemenu({ user, userInfo, makeCartEmpty, setIsAuthorized, setUser, isAuthorized, setSigninOpen, menuOpen, closeMenuOpen }) {
    let Navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const [loader, setLoader] = useState(false);
    const [userName, setUserName] = useState('')
    const Logout = () => {
        let refresh = user.refresh;
        setLoader(true)
        axiosPrivate.post('/api/v1/account/logout/', { refresh })
            .then(response => {
                setLoader(false);
                setIsAuthorized()
                setUser([])
                makeCartEmpty([])
                Navigate("/")
            })
            .catch(error => {
                setLoader(false)
                throw error
            })
    }
    useEffect(() => {
        setUserName(userInfo.fullname);
    }, [userInfo])

    return (
      
                <div className={`display-menu ${!menuOpen?'d-none':""}`}>
                    <ul onClick={closeMenuOpen}>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li><Link to="/aboutus">About Us</Link></li>

                        <li><Link to="/contact">Contact Us</Link></li>
                        {
                            isAuthorized ?
                                <>
                                    <li><Link to='/wishlist'> <FontAwesomeIcon icon={faHeart} /> Wish List</Link></li>
                                    <li>
                                        <Link to='/profile'><FontAwesomeIcon color='#000' icon={faUserCircle} /> {userName}</Link>
                                        <ul>
                                            <li><Link to='/orderlist'> <FontAwesomeIcon icon={faList} /> Order List</Link></li>
                                            <li><button style={{
                                                marginLeft: "10px"
                                            }} onClick={() => Logout()}> <FontAwesomeIcon icon={faSignOut} />{loader ? " Loading..." : " Logout"} </button></li>
                                            {/* <li><Link to='/orderlist'>Order List</Link></li>
                                    <li><Link to='/orderlist'>Order List</Link></li> */}
                                        </ul>
                                    </li>
                                </>
                                :
                                <li
                                    style={{ color: 'white', cursor: 'pointer' }}
                                    onClick={() => setSigninOpen()} >
                                    Sign In
                                </li>

                        }
                    </ul>
                </div>
          
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.shop.user,
        userInfo: state.shop.userInfo,
        cart: state.shop.cart,
        isAuthorized: state.shop.isAuthorized,
        totalCartCount: state.shop.totalCartCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSigninOpen: () => dispatch(setSigninOpen()),
        setIsAuthorized: () => dispatch(setIsAuthorized()),
        setUser: (user) => dispatch(setUser(user)),
        makeCartEmpty: (empty) => dispatch(makeCartEmpty(empty))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobilemenu)