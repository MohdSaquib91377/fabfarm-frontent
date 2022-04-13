import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <div className="breadcrumb_wrapper" style={{minHeight:'300px'}}>
                <div className="container" style={{marginTop:'130px'}}>
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
                                <p>+1-202-555-0101</p>
                                <p>+1-202-555-0132</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="images/contact_icon2.png" alt="image" /></div>
                                <h4>email</h4>
                                <p>agriculture@example.com</p>
                                <p>Cultivation@example.in</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="images/contact_icon3.png" alt="image" /></div>
                                <h4>address</h4>
                                <p>8654 Bellevue Drive</p>
                                <p>Rock Hill, SC 29730</p>
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
                                        <h3>send message us</h3>
                                    </div>
                                    <form>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="form_block">
                                                <input type="text" name="first_name" className="form_field require" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="form_block">
                                                <input type="text" name="last_name" className="form_field require" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="form_block">
                                                <input type="text" name="email" className="form_field require" placeholder="Email" data-valid="email" data-error="Email should be valid." />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="form_block">
                                                <input type="text" name="subject" className="form_field require" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form_block">
                                                <textarea placeholder="Message" name="message" className="form_field require" ></textarea>
                                                <div className="response"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
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
                                            <p>monday</p>
                                            <p>9:30 am - 6:00 pm</p>
                                        </li>
                                        <li>
                                            <p>tuesday</p>
                                            <p>9:00 am - 6:00 pm</p>
                                        </li>
                                        <li>
                                            <p>wednesday</p>
                                            <p>9:45 am - 6:00 pm</p>
                                        </li>
                                        <li>
                                            <p>thursday</p>
                                            <p>10:30 am - 6:00 pm</p>
                                        </li>
                                        <li>
                                            <p>friday</p>
                                            <p>9:30 am - 6:00 pm</p>
                                        </li>
                                        <li>
                                            <p>saturday</p>
                                            <p>9:30 am - 6:00 pm</p>
                                        </li>
                                        <li>
                                            <p>sunday</p>
                                            <p>close</p>
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
            {/* <div className="contact_map_wrapper">
                <div id="map"></div>
            </div> */}
            {/* <!--Partners--> */}
            <div className="clv_partner_wrapper clv_section">
                <div className="container">

                    <div className="clv_newsletter_wrapper">
                        <div className="newsletter_text">
                            <h2>get update from <br />anywhere</h2>
                            <h4>subscribe us to get more info</h4>
                        </div>
                        <div className="newsletter_field">
                            <h3>don't miss out on the good news!</h3>
                            <div className="newsletter_field_block">
                                <input type="text" placeholder="Enter Your Email Here" />
                                <a href="javascript:;">subscribe now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact