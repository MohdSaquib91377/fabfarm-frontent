import React from 'react'
const Signin = ({ open, handleClose }) => {
    return (
        <>
            <div className={open ? 'signin_wrapper open_signin' : 'signin_wrapper'}>
                <div className="signup_inner">
                    <div className="signup_details">
                        <div className="site_logo">
                            <a href="index.html"> <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="image" /></a>
                        </div>
                        <h3>welcome to cultivation!</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 212.982 212.982"
                            width="11px"
                            height="11px"
                        // {...props}
                        >
                            <path
                                fill="#fec007"
                                d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>

                        <p>Consectetur adipisicing elit sed do eiusmod por incididunt uttelabore et dolore magna aliqu.</p>
                        <a href="#" className="clv_btn white_btn pop_signup">sign up</a>
                        <ul>
                            <li><a href="#"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
                            <li><a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a></li>
                            <li><a href="#"><span><i className="fa fa-linkedin" aria-hidden="true"></i></span></a></li>
                            <li><a href="#"><span><i className="fa fa-youtube-play" aria-hidden="true"></i></span></a></li>
                        </ul>
                    </div>
                    <div className="signup_form_section">
                        <h4>sign in account</h4>
                        <img src={process.env.PUBLIC_URL + "images/clv_underline.png"} alt="image" />
                        <div className="form_block">
                            <input type="text" className="form_field" placeholder="Email" />
                        </div>
                        <div className="form_block">
                            <input type="text" className="form_field" placeholder="Password" />
                        </div>
                        <a href="#" className="clv_btn">sign up</a>
                        <div className="social_button_section">
                            <a href="#" className="fb_btn">
                                <span><img src={process.env.PUBLIC_URL + "images/fb.png"} alt="image" /></span>
                                <span>facebook</span>
                            </a>
                            <a href="#" className="google_btn">
                                <span><img src={process.env.PUBLIC_URL + "images/google.png"} alt="image" /></span>
                                <span>google+</span>
                            </a>
                        </div>
                        <span className="success_close"
                            onClick={handleClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 212.982 212.982"
                                width="11px"
                                height="11px"
                            // {...props}
                            >
                                <path
                                    fill="#fec007"
                                    d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
