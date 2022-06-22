import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './login.css'
import Registoruser from './Registoruser';
import Verifyotp from './Verifyotp';
import { setSigninOpen, setSignupOpen } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
const Signup = ({ setSigninOpen, setSignupOpen, signupOpen }) => {

    const [otpScreen, setOtpScreen] = useState(false)
    const [close, setClose] = useState(false);
    const [id, setId] = useState('')
    const [resendEmail, setResendEmail] = useState([])
    const [resendCounter, setResendCounter] = useState(0)
    const triggersignin = () => {
        setClose(!close)
        setSigninOpen();
        setSignupOpen();
    }
    const handleCloseButton = () => {
        setClose(!close)
        setSignupOpen()
        setOtpScreen(false)
    }
    return (
        <div className={signupOpen ? 'signup_wrapper open_signup' : "signup_wrapper"}>
            <div className="signup_inner">
                <div className="signup_details">
                    <div className="site_logo">
                        <a href="index.html"> <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="image" /></a>
                    </div>
                    <h3>welcome to cultivation!</h3>
                    <p>Consectetur adipisicing elit sed do eiusmod por incididunt uttelabore et dolore magna aliqu.</p>
                    <button onClick={triggersignin} className="clv_btn white_btn pop_signin">sign in</button>
                    <ul>
                        <li><a href="#"><span><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faTwitter} /></span></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faYoutube} /></span></a></li>
                    </ul>
                </div>
                <Registoruser
                    state={otpScreen}
                    close={close}
                    setOtpScreen={setOtpScreen}
                    setId={setId}
                    setResendEmail={setResendEmail}
                    setResendCounter={setResendCounter}
                />
                <Verifyotp
                    state={otpScreen}
                    id={id}
                    resendEmail={resendEmail}
                    resendCounter={resendCounter}
                />
                <span className="close"
                    onClick={() => handleCloseButton()}>
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
                            fill="#1f2f22"
                            fillRule="evenodd"
                            d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        signupOpen: state.shop.signupOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSigninOpen: () => dispatch(setSigninOpen()),
        setSignupOpen: () => dispatch(setSignupOpen())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)