import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer className="clv_footer_wrapper clv_section">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <div className="footer_block">
                            <div className="footer_logo"><Link to='/'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="image" /></Link></div>
                            <p><span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="16px"
                                    height="16px"
                                >
                                    <defs>
                                        <filter id="Filter_0">
                                            <feFlood
                                                floodColor="rgb(31, 161, 46)"
                                                floodOpacity={1}
                                                result="floodOut"
                                            />
                                            <feComposite
                                                operator="atop"
                                                in="floodOut"
                                                in2="SourceGraphic"
                                                result="compOut"
                                            />
                                            <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
                                        </filter>
                                    </defs>
                                    <g filter="url(#Filter_0)">
                                        <path
                                            fillRule="evenodd"
                                            fill="rgb(81, 176, 30)"
                                            d="M14.873,0.856 C14.815,0.856 14.700,0.856 14.643,0.913 L0.850,6.660 C0.620,6.776 0.505,6.948 0.505,7.176 C0.505,7.465 0.677,7.695 0.965,7.752 L6.942,9.189 C7.057,9.189 7.114,9.305 7.172,9.419 L8.608,15.396 C8.666,15.626 8.896,15.855 9.183,15.855 C9.413,15.855 9.643,15.683 9.700,15.511 L15.447,1.718 C15.447,1.660 15.505,1.603 15.505,1.488 C15.447,1.085 15.217,0.856 14.873,0.856 ZM9.355,8.902 L9.068,7.695 C9.011,7.465 8.838,7.350 8.666,7.292 L7.459,7.005 C7.172,6.948 7.172,6.545 7.401,6.487 L11.022,4.993 C11.252,4.878 11.482,5.109 11.424,5.395 L9.930,9.017 C9.758,9.189 9.413,9.131 9.355,8.902 Z"
                                        />
                                    </g>
                                </svg>

                            </span> <a href='https://goo.gl/maps/zEq3HEeSXJ8cAWze9' className='footeratag'>Baramati, Maharastra, India.</a></p>
                            <p><span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="16px"
                                    height="15px"
                                >
                                    <defs>
                                        <filter id="Filter_0">
                                            <feFlood
                                                floodColor="rgb(31, 161, 46)"
                                                floodOpacity={1}
                                                result="floodOut"
                                            />
                                            <feComposite
                                                operator="atop"
                                                in="floodOut"
                                                in2="SourceGraphic"
                                                result="compOut"
                                            />
                                            <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
                                        </filter>
                                    </defs>
                                    <g filter="url(#Filter_0)">
                                        <path
                                            fillRule="evenodd"
                                            fill="rgb(81, 176, 30)"
                                            d="M13.866,7.235 C13.607,5.721 12.892,4.344 11.802,3.254 C10.653,2.108 9.197,1.381 7.592,1.156 L7.755,-0.002 C9.613,0.257 11.296,1.096 12.626,2.427 C13.888,3.692 14.716,5.284 15.019,7.039 L13.866,7.235 ZM10.537,4.459 C11.296,5.222 11.796,6.181 11.977,7.238 L10.824,7.436 C10.684,6.617 10.300,5.874 9.713,5.287 C9.091,4.666 8.304,4.276 7.439,4.155 L7.601,2.996 C8.719,3.151 9.734,3.657 10.537,4.459 ZM4.909,8.182 C5.709,9.162 6.611,10.033 7.689,10.711 C7.920,10.854 8.176,10.960 8.417,11.092 C8.538,11.160 8.623,11.139 8.723,11.035 C9.088,10.661 9.460,10.293 9.831,9.924 C10.318,9.440 10.931,9.440 11.421,9.924 C12.017,10.516 12.614,11.110 13.207,11.707 C13.704,12.207 13.701,12.818 13.201,13.324 C12.864,13.665 12.505,13.989 12.186,14.345 C11.721,14.866 11.140,15.035 10.472,14.997 C9.500,14.944 8.607,14.623 7.745,14.205 C5.831,13.275 4.194,11.985 2.823,10.355 C1.808,9.150 0.971,7.834 0.422,6.355 C0.153,5.639 -0.038,4.906 0.022,4.129 C0.059,3.651 0.237,3.242 0.590,2.907 C0.971,2.546 1.330,2.168 1.705,1.800 C2.192,1.319 2.804,1.319 3.295,1.797 C3.598,2.093 3.894,2.396 4.194,2.696 C4.485,2.988 4.775,3.277 5.065,3.570 C5.578,4.085 5.578,4.684 5.069,5.197 C4.703,5.565 4.341,5.933 3.969,6.293 C3.873,6.390 3.863,6.468 3.913,6.586 C4.160,7.173 4.513,7.694 4.909,8.182 Z"
                                        />
                                    </g>
                                </svg>
                            </span> <a href='tel:919112293300' className='footeratag'> +91 91122 93300</a> </p>
                            <p><span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="16px"
                                    height="16px"
                                >
                                    <defs>
                                        <filter id="Filter_0">
                                            <feFlood
                                                floodColor="rgb(31, 161, 46)"
                                                floodOpacity={1}
                                                result="floodOut"
                                            />
                                            <feComposite
                                                operator="atop"
                                                in="floodOut"
                                                in2="SourceGraphic"
                                                result="compOut"
                                            />
                                            <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
                                        </filter>
                                    </defs>
                                    <g filter="url(#Filter_0)">
                                        <path
                                            fillRule="evenodd"
                                            fill="rgb(81, 176, 30)"
                                            d="M16.000,5.535 C16.000,4.982 15.680,4.507 15.280,4.191 L8.000,-0.002 L0.720,4.191 C0.320,4.507 0.000,4.982 0.000,5.535 L0.000,13.447 C0.000,14.317 0.720,15.028 1.600,15.028 L14.400,15.028 C15.280,15.028 16.000,14.317 16.000,13.447 L16.000,5.535 ZM8.000,9.491 L1.360,5.376 L8.000,1.579 L14.640,5.376 L8.000,9.491 Z"
                                        />
                                    </g>
                                </svg>
                            </span><a className='footeratag' href='mailto:farmersallianceforbusiness@gmail.com'>farmersallianceforbusiness</a></p>
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