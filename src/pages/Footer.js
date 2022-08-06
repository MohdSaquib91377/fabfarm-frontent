import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faEnvelopeOpen, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer className="clv_footer_wrapper clv_section">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <div className="footer_block">
                            <div className="footer_logo"><Link to='/'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="image" /></Link></div>
                            <p>
                                <FontAwesomeIcon icon={faLocationArrow} />
                                 <a href='https://goo.gl/maps/zEq3HEeSXJ8cAWze9' className='footeratag'> Baramati, Maharastra, India.</a></p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} />
                                 <a href='tel:919112293300' className='footeratag'> +91 91122 93300</a> </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                                <a className='footeratag' href='mailto:farmersallianceforbusiness@gmail.com'> farmersallianceforbusiness</a></p>
                            <ul className="agri_social_links">
                                <li>
                                    <a href='https://facebook.com'>
                                        
                                    <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://instagram.com'>

                                    <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://youtube.com'>

                                    <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://twitter.com'>

                                    <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer_block">
                            <div className="footer_heading">
                                <h4>Quick Links</h4>
                                <img src={process.env.PUBLIC_URL + "/images/garden_underline3.png"} alt="image" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="time_table">
                                        <li>
                                            <Link to='/' ><p><span><FontAwesomeIcon icon={faAngleRight} /></span> Home</p></Link>
                                        </li>
                                        <li>
                                            <Link to='/aboutus' > <p><span><FontAwesomeIcon icon={faAngleRight} /></span> About</p></Link>
                                        </li>                                       
                                        <li>
                                            <Link to='/contact' ><p><span><FontAwesomeIcon icon={faAngleRight} /></span> Contact</p></Link>
                                        </li>

                                    </ul>   
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer_block">
                            <div className="footer_heading">
                                <h4>Your safety</h4>
                                <img src={"/images/garden_underline3.png"} alt="image" />
                            </div>
                            <ul className="time_table">
                                <li>
                                <Link to='/privacyandpolicy'><p><span><FontAwesomeIcon icon={faAngleRight} /> </span>Privacy Policy</p></Link>
                                </li>
                                <li>
                                <Link to='/termandcondition'><p><span><FontAwesomeIcon icon={faAngleRight} /> </span>Terms and Condition</p></Link>
                                </li>
                                <li>
                                <Link to='/faqs'><p><span><FontAwesomeIcon icon={faAngleRight} /> </span>FAQs</p></Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer