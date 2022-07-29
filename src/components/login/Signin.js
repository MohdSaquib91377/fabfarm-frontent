import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import { setSignupOpen, setSigninOpen, setUser, setIsAuthorized } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import './login.css'
const Signin = ({ setIsAuthorized, setSigninOpen, setSignupOpen, signinOpen, setUser, handleClose }) => {
    const initialValues = { email: "", password: "", otp: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [isForgotSubmit, setIsForgotSubmit] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const [loader, setLoader] = useState(false)
    const [otpScreen, setOtpScreen] = useState(false)
    const [resetPassScreen, setRestPassScreen] = useState(false)
    const [isRestSubmit, setIsRestSubmit] = useState(false)
    const [counter, setCounter] = useState(0)
    const [resendOtpLoader, setResendOptLoader] = useState(false)
    const [id, setID] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateSignin(formValues));
        setIsSubmit(true);
    }
    const handleForgotPass = (e) => {
        e.preventDefault();
        setFormErrors(validateForgotEmail(formValues))
        setIsForgotSubmit(true);
        setIsSubmit(false);
    }
    const handleVerifySubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateOtp(formValues))
        setIsForgotSubmit(false);
        setIsVerified(true)
    }
    const handleResetSubmit = e => {
        e.preventDefault();
        setFormErrors(validateSignin(formValues))
        setIsVerified(false)
        setIsRestSubmit(true)
    }
    const trigger = (e) => {
        e.preventDefault();
        setFormValues(initialValues)
        setFormErrors({});
        setIsSubmit(false)
        setSigninOpen();
        setSignupOpen();
    }
    const handleCloseButton = () => {
        setIsForgotSubmit(false);
        setIsVerified(false);
        setFormValues(initialValues)
        setSigninOpen();
        setFormErrors({});
    }

    const resendOtp = (e) => {
        e.preventDefault();
        setResendOptLoader(true)
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/send-otp/`, {
            email_or_mobile: formValues.email
        })
            .then(response => {
                setID(response.data.id)
                setCounter(60)
                setResendOptLoader(false)
            })
    }


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setLoader(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/login/`, {
                email_or_mobile: formValues.email,
                password: formValues.password
            })
                .then((response) => {
                    setLoader(false)
                    setIsAuthorized()
                    setSigninOpen()
                    setUser(response.data.data)
                })
                .catch((error) => {
                    setLoader(false)
                    if (error.response.status === 403) {
                        setFormErrors({
                            email: error.response.data.message
                        })
                    } else {

                        setFormErrors({
                            email: error.response.data.message,
                            password: error.response.data.message
                        })
                    }
                })
        }
        if (Object.keys(formErrors).length === 0 && isForgotSubmit) {
            setLoader(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/send-otp/`, {
                email_or_mobile: formValues.email
            })
                .then(response => {
                    setLoader(false)
                    setCounter(60)
                    setID(response.data.id)
                    setOtpScreen(true)
                })
                .catch(error => {
                    setLoader(false)
                    setFormErrors({ email: error.response.data.message })
                })
        }
        if (Object.keys(formErrors).length === 0 && isVerified) {
            setLoader(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/verify-otp/`, {
                id: id,
                otp: formValues.otp
            })
                .then(response => {
                    setUser(response.data.data)
                    setLoader(false)
                    setRestPassScreen(true)
                })
                .catch((error) => {
                    setLoader(false)
                    setFormErrors({ otp: error.response.data.message })
                })
        }
        if (Object.keys(formErrors).length === 0 && isRestSubmit) {
            setLoader(true)
            axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/account/login/`, {
                email_or_mobile: formValues.email,
                password: formValues.password
            })
                .then(() => {
                    setLoader(false)
                    setRestPassScreen(true)
                    setOtpScreen(false)
                    setIsAuthorized()
                })
                .catch(error => {
                    throw(error)
                })
        }
    }, [formErrors]);

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter])

    const validateSignin = (values) => {
        const errors = {};
        const regexemail = /\S+@\S+\.\S+/;
        const regexmobile = /^([+]\d{2})?\d{10}$/;
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!regexemail.test(values.email) && !regexmobile.test(values.email)) {
            errors.email = 'Enter a valid email or mobile!';
        }
        if (!values.password) {
            errors.password = 'Password is required!'
        }
        return errors;
    }
    const validateForgotEmail = (values) => {
        const errors = {};
        const regexemail = /\S+@\S+\.\S+/;
        const regexmobile = /^\d{10}$/;
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!regexemail.test(values.email)) {
            errors.email = 'Enter a valid email!';
        }

        return errors;
    }
    const validateOtp = (values) => {
        const errors = {};
        const regexotp = /^[0-9]{1,6}$/;
        if (!values.otp) {
            errors.otp = 'Please enter your OTP'
        }
        else if (!regexotp.test(values.otp)) {
            errors.otp = 'Enter a valid OTP!';
        }
        else if (values.otp.length < 6) {
            errors.otp = 'Enter a valid OTP!';
        }
        return errors;
    }
    return (
        <>
            <div className={signinOpen ? 'signin_wrapper open_signin' : 'signin_wrapper'}>
                <div className="signup_inner">
                    <div className="signup_details">
                        <div className="site_logo">
                            <a href="index.html"> <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="image" /></a>
                        </div>
                        <h3>welcome to cultivation!</h3>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 212.982 212.982"
                            width="11px"
                            height="11px"
                        // {...props}
                        >
                            <path
                                fill="#1f2f22"
                                d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg> */}

                        <p>Consectetur adipisicing elit sed do eiusmod por incididunt uttelabore et dolore magna aliqu.</p>
                        <button onClick={trigger} className="clv_btn white_btn pop_signup">sign up</button>
                        <ul>
                            <li><a href="#"><span><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                            <li><a href="#"><span><FontAwesomeIcon icon={faTwitter} /></span></a></li>
                            <li><a href="#"><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
                            <li><a href="#"><span><FontAwesomeIcon icon={faYoutube} /></span></a></li>
                        </ul>
                    </div>
                    <div className={otpScreen ? 'disabled' : 'signup_form_section'}>
                        <h4>sign in account</h4>
                        <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="image" />
                        <form onSubmit={handleSubmit}>
                            <div className="form_block">
                                <input
                                    type="text"
                                    name='email'
                                    value={formValues.email}
                                    className="form_field"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.email}</p>
                            <div className="form_block position-relative">
                                <input
                                    type="password"
                                    name='password'
                                    value={formValues.password}
                                    className="form_field"
                                    placeholder="Password"
                                    onChange={handleChange} />
                                <button  onClick={handleForgotPass} className='signin-forgot-pass'>Forgot ?</button>
                            </div>
                            <p>{formErrors.password}</p>
                            <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'sign in'}</button>
                        </form>
                        <div className="social_button_section">
                            <a href="#" className="fb_btn">
                                <span><img src={process.env.PUBLIC_URL + "/images/fb.png"} alt="image" /></span>
                                <span>facebook</span>
                            </a>
                            <a href="#" className="google_btn">
                                <span><img src={process.env.PUBLIC_URL + "/images/google.png"} alt="image" /></span>
                                <span>google+</span>
                            </a>
                        </div>
                    </div>
                    <div className={otpScreen ? 'signup_form_section' : 'disabled'}>
                        <div className={resetPassScreen ? 'disabled' : 'enabled'}>
                            <h4>Verify OTP</h4>
                            <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="image" />
                            <form onSubmit={handleVerifySubmit}>
                                <div className="form_block">
                                    <input
                                        type="text"
                                        name='otp'
                                        value={formValues.otp}
                                        className="form_field"
                                        placeholder="OTP"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <p>{formErrors.otp}</p>
                                    {
                                        counter !== 0 ?
                                            <span>Resend OTP in {counter} </span>
                                            :
                                            <button onClick={(e) => resendOtp(e)}>{resendOtpLoader ? <FaSpinner icon="spinner" className="spinner" /> : 'Resend OTP'}</button>
                                    }
                                </div>
                                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'Verify'}</button>
                            </form>
                        </div>
                        <div className={resetPassScreen ? 'enabled' : 'disabled'}>
                            <h4>reset your password</h4>
                            <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="image" />
                            <form onSubmit={handleResetSubmit}>
                                <div className="form_block">
                                    <input
                                        type="text"
                                        name='email'
                                        value={formValues.email}
                                        className="form_field"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.email}</p>
                                <div className="form_block">
                                    <input
                                        type="password"
                                        name='password'
                                        value={formValues.password}
                                        className="form_field"
                                        placeholder="Password"
                                        onChange={handleChange} />
                                </div>
                                <p>{formErrors.password}</p>
                                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'Reset'}</button>
                            </form>

                        </div>
                    </div>
                    <span className="close"
                        onClick={() => handleCloseButton()}
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
                                fill="#1f2f22"
                                d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        signinOpen: state.shop.signinOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        setSigninOpen: () => dispatch(setSigninOpen()),
        setSignupOpen: () => dispatch(setSignupOpen()),
        setIsAuthorized: () => dispatch(setIsAuthorized())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
