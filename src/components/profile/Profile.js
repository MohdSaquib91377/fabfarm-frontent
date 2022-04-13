import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
const Profile = () => {
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
                        <li>Profile</li>
                    </ul>
                </div>
            </div>
            <main className="container">
                <div className="my-account-area">
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <div className="my-account-menu">
                                <ul className="nav account-menu-list flex-column nav-pills" id="pills-tab" role="tablist">
                                    <li>
                                        <a className="active link--icon-left" id="pills-dashboard-tab" data-bs-toggle="pill" href="#pills-dashboard"
                                            role="tab" aria-controls="pills-dashboard" aria-selected="true"><i
                                                className="fas fa-tachometer-alt"></i> Dashboard</a>
                                    </li>
                                    <li>
                                        <a id="pills-order-tab" className="link--icon-left" data-bs-toggle="pill" href="#pills-order" role="tab"
                                            aria-controls="pills-order" aria-selected="false"><i
                                                className="fas fa-shopping-cart"></i> Order</a>
                                    </li>
                                    <li>
                                        <a id="pills-download-tab" className="link--icon-left" data-bs-toggle="pill" href="#pills-download" role="tab"
                                            aria-controls="pills-download" aria-selected="false"><i
                                                className="fas fa-cloud-download-alt"></i> Download</a>
                                    </li>
                                    <li>
                                        <a id="pills-payment-tab" className="link--icon-left" data-bs-toggle="pill" href="#pills-payment" role="tab"
                                            aria-controls="pills-payment" aria-selected="false"><i
                                                className="fas fa-credit-card"></i> Payment Method</a>
                                    </li>
                                    <li>
                                        <a id="pills-address-tab" className="link--icon-left" data-bs-toggle="pill" href="#pills-address" role="tab"
                                            aria-controls="pills-address" aria-selected="false"><i
                                                className="fas fa-map-marker-alt"></i> Address</a>
                                    </li>
                                    <li>
                                        <a id="pills-account-tab" className="link--icon-left" data-bs-toggle="pill" href="#pills-account" role="tab"
                                            aria-controls="pills-account" aria-selected="false"><i className="fas fa-user"></i>
                                            Account Details</a>
                                    </li>
                                    <li>
                                        <a className="link--icon-left" href="login.html"><i className="fas fa-sign-out-alt"></i> Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8">
                            <div className="tab-content my-account-tab" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-dashboard" role="tabpanel"
                                    aria-labelledby="pills-dashboard-tab">
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
                                <div className="tab-pane fade" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
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
                                <div className="tab-pane fade" id="pills-download" role="tabpanel"
                                    aria-labelledby="pills-download-tab">
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
                                <div className="tab-pane fade" id="pills-payment" role="tabpanel"
                                    aria-labelledby="pills-payment-tab">
                                    <div className="my-account-payment account-wrapper">
                                        <h4 className="account-title">Payment Method</h4>
                                        <p className="m-t-30">You Can't Saved Your Payment Method yet.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-address" role="tabpanel"
                                    aria-labelledby="pills-address-tab">
                                    <div className="my-account-address account-wrapper">
                                        <h4 className="account-title">Payment Method</h4>
                                        <div className="account-address m-t-30">
                                            <h6 className="name">Alex Tuntuni</h6>
                                            <p>1355 Market St, Suite 900 <br /> San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                            <a className="box-btn m-t-25 " href="#"><i className="far fa-edit"></i> Edit Address</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-account" role="tabpanel"
                                    aria-labelledby="pills-account-tab">
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

export default Profile