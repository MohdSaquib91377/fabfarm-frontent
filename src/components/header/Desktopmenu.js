import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { setSigninOpen, setIsAuthorized, setUser, makeCartEmpty } from '../../redux/actions/productActions';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
function Desktopmenu({ user, userInfo, makeCartEmpty, setIsAuthorized, setUser, isAuthorized, setSigninOpen }) {
    let Navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const [loader, setLoader] = useState(false);
    const [userName, setUserName] = useState('')
    const [hoverBtn, setHoverBtn] = useState('#222222')
    const Logout = () => {
        let refresh = user.refresh;
        setLoader(true)
        axiosPrivate.post('/api/v1/account/logout/', { refresh })
            .then(() => {
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
        <div className="clv_menu_nav">
            <ul>
                <li>
                    <Link to="/" >home</Link>
                </li>
                <li><Link to="/aboutus">about us</Link></li>

                <li><Link to="/contact">Contact us</Link></li>
                {
                    isAuthorized ?
                        <li>
                            <Link to='/profile'><FontAwesomeIcon color='#ffffff' icon={faUser} /> {userName}</Link>
                            <ul>
                                <li><Link to='/orderlist'> <FontAwesomeIcon icon={faList} /> Order List</Link></li>
                                <li><Link to='/wishlist'> <FontAwesomeIcon icon={faHeart} /> Wish List</Link></li>
                                <li><button style={{
                                    marginLeft: "10px",
                                    color: `${hoverBtn}`
                                }}
                                    onMouseEnter={() => setHoverBtn('#2a7d2e')}
                                    onMouseLeave={() => setHoverBtn('#222222')}
                                    onClick={() => Logout()}> <FontAwesomeIcon icon={faSignOut} />{loader ? " Loading..." : " Logout"} </button></li>
                            </ul>
                        </li> :
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

export default connect(mapStateToProps, mapDispatchToProps)(Desktopmenu)