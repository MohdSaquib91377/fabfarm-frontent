import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCloudDownloadAlt, faMapMarkerAlt, faUser, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './Profile.css'
import Tabtitle from '../../pages/Tabtitle';
import { makeCartEmpty, setIsAuthorized, setUser } from '../../redux/actions/productActions';
import axios from '../API/axios';
const Profile = ({ user, makeCartEmpty, setIsAuthorized, setUser }) => {
    let Navigate = useNavigate();
    const [profileState, setProfileState] = useState('Dashboard');
    Tabtitle('FAB | Profile')
    const Logout = () => {
        let refresh = user.refresh;
        axios.post('/api/v1/account/logout/', { refresh }, {
            headers: {
                Authorization: `Bearer ${user.access}`
            },
        })
            .then(response => {
                console.log(response)
                setIsAuthorized()
                setUser([])
                makeCartEmpty([])
                Navigate("/")
            })
            .catch(response => {
                console.log(response)
            })
    }
    return (
        <>
            {/* <!--Breadcrumb--> */}
            <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Profile</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>&nbsp;Profile</li>
                    </ul>
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
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address</button>
                                    </li>
                                    <li
                                        onClick={() => setProfileState('Account')}
                                    >
                                        <button className={profileState === 'Account' ? 'active' : undefined}>
                                            <FontAwesomeIcon icon={faUser} /> Account Details</button>
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
                                            <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong> <a
                                                href="#">Logout</a> )</p>
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

                                <div className={profileState === 'Address' ? 'tab-pane fade show active' : 'tab-pane fade '}>
                                    <div className="my-account-address account-wrapper">
                                        <h4 className="account-title">Address</h4>
                                        <div className="account-address m-t-30">
                                            <h6 className="name">Alex Tuntuni</h6>
                                            <p>1355 Market St, Suite 900 <br /> San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                            <a className="box-btn m-t-25 " href="#"><i className="far fa-edit"></i> Edit Address</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={profileState === 'Account' ? 'tab-pane fade show active' : 'tab-pane fade '}>
                                    <div className="my-account-details account-wrapper">
                                        <h4 className="account-title">Account Details</h4>

                                        <div className="account-details">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <input type="text" placeholder="Display Nam" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <input type="text" placeholder="Email address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <h5 className="title">Password change</h5>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <input type="password" placeholder="Current Password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <input type="password" placeholder="New Password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <input type="password" placeholder="Confirm Password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <button className="btn btn--box btn--radius btn--small btn--black btn--black-hover-green btn--uppercase font--bold">Save Change</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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