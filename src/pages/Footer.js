import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer">
                <div className="inner">
                    <div className="footNav">
                        <div className="col col1">
                            <h3>Quick links</h3>
                            <ul>
                                <li>
                                    <Link to="/aboutus">About </Link>
                                </li>
                                <li>
                                    <a href="#">FAQs </a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy </a>
                                </li>
                                <li>
                                    <a href="#">Terms and Conditions </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col col2">
                            <h3>Our Product</h3>
                            <ul>
                                <li>
                                    <Link to="/seeds">seeds </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col col3">
                            <h3>CONTACT</h3>
                            <ul>
                                <li>
                                    <span className="iconCall"></span><a href="tel:+234345456678">+234 345 456 678 </a>
                                </li>
                                <li>
                                    <span className="iconMail"></span><a href="mailto:info@fab.com">info@fab.com </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footEnd">
                        <div className="socialIcons snd-col m7 l8">
                            <ul>
                                <li>
                                    <a href="#" className="iconFb"></a>
                                </li>
                                <li>
                                    <a href="#" className="iconIn"></a>
                                </li>
                                <li>
                                    <a href="#" className="iconTwitter"></a>
                                </li>
                                <li>
                                    <a href="#" className="iconInsta"></a>
                                </li>
                            </ul>

                        </div>

                        <div className="copyRights snd-col m5 l4">
                            <img src={process.env.PUBLIC_URL + "images/footLogo.png"} />
                            <p>@2020, Farmer Allainces for business-All rights Reserved</p>
                        </div>
                        <div className="snd-clear"></div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer