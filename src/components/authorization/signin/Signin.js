import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FaSpinner } from 'react-icons/fa';
import axios from '../../API/axios';
import { setSignupOpen, setSigninOpen, setUser, setIsAuthorized, setUserInfo } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';
import '../login.css'
import Signinform from './Signinform';
import Forgotpassform from './Forgotpassform';
const Signin = ({ setIsAuthorized, setSigninOpen, setSignupOpen, signinOpen, setUser, setUserInfo, handleClose }) => {
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
        axios.post(`/api/v1/account/send-otp/`, {
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
            axios.post(`/api/v1/account/login/`, {
                email_or_mobile: formValues.email,
                password: formValues.password
            })
                .then((response) => {
                    setLoader(false)
                    setIsAuthorized()
                    setSigninOpen()
                    setUser(response.data.data)
                    setUserInfo(response.data.user_info)
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
            axios.post(`/api/v1/account/send-otp/`, {
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
            axios.post(`/api/v1/account/verify-otp/`, {
                id: id,
                otp: formValues.otp
            })
                .then(response => {
                    setUser(response.data.data)
                    setUserInfo(response.data.user_info)
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
            axios.put(`/api/v1/account/login/`, {
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
                    throw (error)
                })
        }
    }, [formErrors]);

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter])

    const validateSignin = (values) => {
        const errors = {};
        const regexemail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}/;
        const regexmobile = /^([+]\d{2})?\d{10}$/;
        if (!values.email) {
            errors.email = 'Email/Mobile is required!'
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
        const regexemail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}/;
        const regexmobile = /^\d{10}$/;
        if (!values.email) {
            errors.email = 'Email/Mobile is required!'
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
                            <a href="index.html"> <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="signinimage" /></a>
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
                    <Signinform
                        otpScreen={otpScreen}
                        handleSubmit={handleSubmit}
                        formValues={formValues}
                        formErrors={formErrors}
                        handleChange={handleChange}
                        handleForgotPass={handleForgotPass}
                        loader={loader}
                    />
                    <Forgotpassform
                        otpScreen={otpScreen}
                        resetPassScreen={resetPassScreen}
                        handleVerifySubmit={handleVerifySubmit}
                        formValues={formValues}
                        formErrors={formErrors}
                        handleChange={handleChange}
                        counter={counter}
                        resendOtp={resendOtp}
                        resendOtpLoader={resendOtpLoader}
                        loader={loader}
                        handleResetSubmit={handleResetSubmit}
                    />
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
        setUserInfo: (user) => dispatch(setUserInfo(user)),
        setSigninOpen: () => dispatch(setSigninOpen()),
        setSignupOpen: () => dispatch(setSignupOpen()),
        setIsAuthorized: () => dispatch(setIsAuthorized())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
