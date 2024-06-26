import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCloudDownloadAlt, faMapMarkerAlt, faUser, faSignOutAlt, faTachometerAlt, faBuilding, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './Profile.css'
import Tabtitle from '../../pages/Tabtitle';
import { makeCartEmpty, setIsAuthorized, setUser } from '../../redux/actions/productActions';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useBannerImages from '../../hooks/useBannerImages';
import Accountsetting from './accountsetting/Accountsetting';
import Addresssetting from './addresssetting/Addresssetting';
import Bankaccountsetting from './bank account setting/Bankaccountsetting';
const Profile = ({ user, makeCartEmpty, setIsAuthorized, setUser, userInfo }) => {
    let Navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const [profileState, setProfileState] = useState('Dashboard');
    Tabtitle('FAB | Profile')
    const banner = useBannerImages('profile')

    const Logout = () => {
        let refresh = user.refresh;
        axiosPrivate.post('/api/v1/account/logout/', { refresh })
            .then(() => {
                setIsAuthorized()
                setUser([])
                makeCartEmpty([])
                Navigate("/")
            })
            .catch(error => {
                throw (error)
            })
    }
    return (
        <>
            {/* <!--Breadcrumb--> */}
            <div className="breadcrumb_wrapper"
                style={{
                    minHeight: '250px',
                    backgroundImage: `url(${banner[0]?.image_or_video})`
                }}
            >
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Profile</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-12  my-3">
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                            <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                            <span className='breadcrum-width-dot'>Profile   </span>
                        </p>
                    </div>
                </div>
            </div>
            <main className="container">
                <div className="my-account-area">
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <div className="my-account-menu">
                                <ul className="nav account-menu-list flex-column nav-pills" id="pills-tab" role="tablist">
                                    <li
                                        onClick={() => setProfileState('Dashboard')}>
                                        <button className={profileState === 'Dashboard' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faTachometerAlt} />  Dashboard</button>
                                    </li>
                                    <li
                                        onClick={() => setProfileState('Order')}
                                    >
                                        <button className={profileState === 'Order' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faShoppingCart} /> Order</button>
                                    </li>
                                    <li
                                        onClick={() => setProfileState('Download')}
                                    >
                                        <button className={profileState === 'Download' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download</button>
                                    </li>
                                    <li
                                        onClick={() => setProfileState('Address')}
                                    >
                                        <button className={profileState === 'Address' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Manage Addresses</button>
                                    </li>
                                    <li
                                        onClick={() => setProfileState('Account')}
                                    >
                                        <button className={profileState === 'Account' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faUser} /> Account Settings</button>
                                    </li>
                                    <li
                                        onClick={() => setProfileState('Payment')}
                                    >
                                        <button className={profileState === 'Payment' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faBuildingColumns} /> Bank Account Info</button>
                                    </li>
                                    <li
                                        onClick={() => setProfileState('Logout')}
                                    >
                                        <button onClick={() => Logout()} className={profileState === 'Logout' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8">
                            <div className="tab-content my-account-tab" id="pills-tabContent">
                                <div className={profileState === 'Dashboard' ? 'tab-pane fade show active' : 'tab-pane fade '}>
                                    <div className="my-account-dashboard account-wrapper">
                                        <h4 className="account-title">Dashboard</h4>
                                        <div className="welcome-dashboard m-t-30">
                                            <p>Hello, <strong style={{
                                                textTransform: 'capitalize'
                                            }}>{userInfo?.fullname}</strong> </p>
                                        </div>
                                        <p className="m-t-25">From your account dashboard. you can easily check &amp; view your
                                            recent orders, manage your shipping and billing addresses and edit your password and
                                            account details.</p>
                                    </div>
                                </div>
                                <div className={profileState === 'Order' ? 'tab-pane fade show active' : 'tab-pane fade '}>
                                    <div className="my-account-order account-wrapper">
                                        <h4 className="account-title">Orders</h4>
                                        <div className="account-table text-center m-t-30 table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="no">No</th>
                                                        <th className="name">Name</th>
                                                        <th className="date">Date</th>
                                                        <th className="status">Status</th>
                                                        <th className="total">Total</th>
                                                        <th className="action">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mostarizing Oil</td>
                                                        <td>Aug 22, 2020</td>
                                                        <td>Pending</td>
                                                        <td>$100</td>
                                                        <td><a href="#">View</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Katopeno Altuni</td>
                                                        <td>July 22, 2020</td>
                                                        <td>Approved</td>
                                                        <td>$45</td>
                                                        <td><a href="#">View</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Murikhete Paris</td>
                                                        <td>June 22, 2020</td>
                                                        <td>On Hold</td>
                                                        <td>$99</td>
                                                        <td><a href="#">View</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className={profileState === 'Download' ? 'tab-pane fade show active' : 'tab-pane fade '}>
                                    <div className="my-account-download account-wrapper">
                                        <h4 className="account-title">Download</h4>
                                        <div className="account-table text-center m-t-30 table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="name">Product</th>
                                                        <th className="date">Date</th>
                                                        <th className="status">Expire</th>
                                                        <th className="action">Download</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Mostarizing Oil</td>
                                                        <td>Aug 22, 2020</td>
                                                        <td>Yes</td>
                                                        <td><a href="#">Download File</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Katopeno Altuni</td>
                                                        <td>July 22, 2020</td>
                                                        <td>Never</td>
                                                        <td><a href="#">Download File</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <Addresssetting profileState={profileState} />
                                <Accountsetting profileState={profileState} />
                                <Bankaccountsetting profileState={profileState} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- ::::::  End  Main Container Section  ::::::  --> */}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.shop.user,
        userInfo: state.shop.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setIsAuthorized: () => dispatch(setIsAuthorized()),
        setUser: (user) => dispatch(setUser(user)),
        makeCartEmpty: (empty) => dispatch(makeCartEmpty(empty))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)