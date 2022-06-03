import React from 'react'
import { Link } from 'react-router-dom'
import Tabtitle from './Tabtitle'

const Contact = () => {
    Tabtitle('FAB | Contact us')
    return (
        <>
            <div className="breadcrumb_wrapper" style={{ minHeight: '300px' }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>contact us</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>contact us</li>
                    </ul>
                </div>
            </div>
            <div className="contact_blocks_wrapper clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="images/contact_icon1.png" alt="image" /></div>
                                <h4>contact us</h4>
                                <p>
                                    09112293300
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="images/contact_icon2.png" alt="image" /></div>
                                <h4>email</h4>
                                <p>
                                    farmersallianceforbusiness@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="images/contact_icon3.png" alt="image" /></div>
                                <h4>address</h4>
                                <p>
                                    Baramati, Maharastra, India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_form_wrapper clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="contact_form_section">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <h3> Send Us A Message.</h3>
                                    </div>
                                    <form>
                                        <div className="col-md-6 col-lg-6 my-3">
                                            <div className="form_block">
                                                <input type="text" name="full_name" className="form_field require" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 my-3">
                                            <div className="form_block">
                                                <input type="text" name="email" className="form_field require" placeholder="Email" data-valid="email" data-error="Email should be valid." />
                                            </div>
                                        </div>
                                        {/* add select option here */}
                                        <div className="col-md-12 col-lg-12 my-3">
                                            <div className="form_block">
                                                <textarea placeholder="Message" name="message" className="form_field require" ></textarea>
                                                <div className="response"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 my-3">
                                            <div className="form_block">
                                                <button type="button" className="clv_btn submitForm" data-type="contact">send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="working_time_section">
                                <div className="timetable_block">
                                    <h5>working hours</h5>
                                    <ul>
                                        <li>
                                            <p>monday to saturday</p>
                                            <p>9:30 am - 6:00 pm</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tollfree_block">
                                    <h5>toll free number</h5>
                                    <h3>+1-202-555-0101</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Contact Map--> */}
            <div className="contact_map_wrapper">
                <div id="map"> here map will be shown</div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Contact