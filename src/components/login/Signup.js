import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Signup = ({ open, triggersignin, handleClose }) => {
    return (
        <div class={open ? 'signup_wrapper open_signup' : "signup_wrapper"}>
            <div class="signup_inner">
                <div class="signup_details">
                    <div class="site_logo">
                        <a href="index.html"> <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="image" /></a>
                    </div>
                    <h3>welcome to cultivation!</h3>
                    <p>Consectetur adipisicing elit sed do eiusmod por incididunt uttelabore et dolore magna aliqu.</p>
                    <button onClick={triggersignin} class="clv_btn white_btn pop_signin">sign in</button>
                    <ul>
                        <li><a href="javascript:;"><span><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                        <li><a href="javascript:;"><span><FontAwesomeIcon icon={faTwitter} /></span></a></li>
                        <li><a href="javascript:;"><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
                        <li><a href="javascript:;"><span><FontAwesomeIcon icon={faYoutube} /></span></a></li>
                    </ul>
                </div>
                <div class="signup_form_section">
                    <h4>create account</h4>
                    <img src="images/clv_underline.png" alt="image" />
                    <div class="form_block">
                        <input type="text" class="form_field" placeholder="Name" />
                    </div>
                    <div class="form_block">
                        <input type="text" class="form_field" placeholder="Email" />
                    </div>
                    <div class="form_block">
                        <input type="text" class="form_field" placeholder="Password" />
                    </div>
                    <a href="javascript:;" class="clv_btn">sign up</a>
                    <div class="social_button_section">
                        <a href="javascript:;" class="fb_btn">
                            <span><img src={process.env.PUBLIC_URL + "images/fb.png"} alt="image" /></span>
                            <span>facebook</span>
                        </a>
                        <a href="javascript:;" class="google_btn">
                            <span><img src={process.env.PUBLIC_URL + "images/google.png"} alt="image" /></span>
                            <span>google+</span>
                        </a>
                    </div>
                    <span class="success_close"
                        onClick={handleClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 212.982 212.982"
                            viewBox="0 0 212.982 212.982"
                        >
                            <path
                                fill="#fec007"
                                fillRule="evenodd"
                                d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Signup