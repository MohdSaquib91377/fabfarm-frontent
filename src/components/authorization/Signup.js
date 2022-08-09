import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './login.css'
import Registoruser from './Registoruser';
import Verifyotp from './Verifyotp';
import { setIsAuthorized, setSigninOpen, setSignupOpen, setUser, setUserInfo } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import axios from '../API/axios';
const Signup = ({ setSigninOpen, setSignupOpen, signupOpen }) => {
    const initialValues = { name: '', email: "", password: "", id: '', otp: '' };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [otpScreen, setOtpScreen] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const [loader, setLoader] = useState(false)
    const [resendOtpLoader, setResendOptLoader] = useState(false)
    const [resendCounter, setResendCounter] = useState(0)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const triggersignin = () => {
        setOtpScreen(false)
        setResendCounter(0)
        setSigninOpen();
        setSignupOpen();
        setFormErrors({})
        setFormValues(initialValues)
    }
    const handleCloseButton = () => {
        setSignupOpen()
        setOtpScreen(false)
        setFormValues(initialValues)
        setFormErrors({})
    }

    const handleBackButton = () => {
        setIsSubmit(false)
        setOtpScreen(false)
        setFormErrors({})
        setFormValues(initialValues)
        setResendCounter(0)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateSignin(formValues));
        setIsSubmit(true)
    }


    const handleOTPSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateOTP(formValues));
        setIsVerified(true)
    }

    const handleResendOtp = (e) => {
        e.preventDefault();
        setFormErrors(validateSignin(formValues));
        setIsSubmit(true)
    }

    const validateSignin = (values) => {
        const errors = {};
        const regexName = /^[A-Za-z ]+$/;
        const regexemail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}/;
        // const regexmobile = /^([+]\d{2})?\d{10}$/;
        if (!values.name) {
            errors.name = 'Name is required!'
        }
        else if (!regexName.test(values.name)) {
            errors.name = 'Enter a valid name'
        }
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!regexemail.test(values.email)) {
            errors.email = 'Enter a valid email!';
        }
        if (!values.password) {
            errors.password = 'Password is required!'
        }
        return errors;
    }

    const validateOTP = (values) => {
        const errors = {};
        const regexotp = /^[0-9]{1,6}$/;
        if (!values.otp) {
            errors.otp = 'Please enter your OTP'
        }
        if (!regexotp.test(values.otp)) {
            errors.otp = 'Enter a valid OTP!';
        }
        return errors;
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setLoader(true)
            setResendOptLoader(true)
            setIsSubmit(false)
            axios.post(`/api/v1/account/register/`, {
                fullname: formValues.name,
                email_or_mobile: formValues.email,
                password: formValues.password
            })
                .then((response) => {
                    setOtpScreen(true)
                    setLoader(false)
                    setResendCounter(60)
                    setResendOptLoader(false)
                    setFormValues({ ...formValues, id: response?.data?.id })
                })
                .catch(error => {
                    setLoader(false)
                    setResendOptLoader(false)
                    setFormErrors({ email: error?.response?.data?.message })
                })
        }
        if (Object.keys(formErrors).length === 0 && isVerified) {
            setLoader(true)
            setIsVerified(false)
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/verify-otp/`, {
                email_or_mobile: formValues.email,
                id: formValues.id,
                otp: formValues.otp
            })
                .then(response => {
                    setLoader(false)
                    setUser(response.data.data)
                    setUserInfo(response.data.user_info)
                    setIsAuthorized()
                })
                .catch(error => {
                    setLoader(false)
                    setFormErrors({ otp: error.response.data.message })
                })
        }
    }, [formErrors]);


    useEffect(() => {
        const timer = resendCounter > 0 && setInterval(() => setResendCounter(resendCounter - 1), 1000);
        return () => clearInterval(timer);
    }, [resendCounter])

    return (
        <div className={signupOpen ? 'signup_wrapper open_signup' : "signup_wrapper"}>
            <div className="signup_inner">
                <div className="signup_details">
                    <div className="site_logo">
                        <a href="index.html"> <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="image" /></a>
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
                    formValues={formValues}
                    formErrors={formErrors}
                    setOtpScreen={setOtpScreen}
                    setResendCounter={setResendCounter}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    loader={loader}
                />
                <Verifyotp
                    state={otpScreen}
                    resendCounter={resendCounter}
                    resendOtpLoader={resendOtpLoader}
                    formValues={formValues}
                    formErrors={formErrors}
                    handleResendOtp={handleResendOtp}
                    setOtpScreen={setOtpScreen}
                    setResendCounter={setResendCounter}
                    handleBackButton={handleBackButton}
                    handleOTPSubmit={handleOTPSubmit}
                    handleChange={handleChange}
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
        setSignupOpen: () => dispatch(setSignupOpen()),
        setUser: (user) => dispatch(setUser(user)),
        setUserInfo: (user) => dispatch(setUserInfo(user)),
        setIsAuthorized: () => dispatch(setIsAuthorized())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)