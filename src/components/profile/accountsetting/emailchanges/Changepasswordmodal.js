import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
const Changepasswordmodal = ({ changeState, setChangeState, userInfo }) => {
    const axiosPrivate = useAxiosPrivate();
    const [viewPassword, setViewPassword] = useState(false)
    const initialValues = { current_password: '', new_password: '', confirm_password: '', otp: '', txn_id: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateUserDetails(formValues));
        setIsSubmit(true)
    }

    const validateUserDetails = (values) => {
        const errors = {};
        if (!values.current_password) {
            errors.current_password = 'Current password is required!'
        }
        if (!values.new_password) {
            errors.new_password = 'New password is required!'
        }
        if (!values.confirm_password) {
            errors.confirm_password = 'Confirm password is required!'
        } else if (values.confirm_password !== values.new_password) {
            errors.confirm_password = 'new password and confirm password is not matching'
        }
        if (!values.otp) {
            errors.otp = 'otp is required!'
        }
        return errors;
    }

    const sendOTP = async () => {
        try {
            const response = await axiosPrivate.post('/api/v1/account/send-otp/', {
                email_or_mobile: userInfo.email_or_mobile
            })
            setFormValues(
                { ...formValues, txn_id: response.data.id }
            )
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        if (isMounted && changeState) {
            sendOTP();
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [changeState])
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const changePassword = async () => {
            setLoader(true)
            try {
                await axiosPrivate.put('/api/v1/account/change-password/', formValues)
                setLoader(false)
                setIsSubmit(false)
                setChangeState(false)
                setFormValues(initialValues)
            } catch (error) {
                setLoader(false)
                setIsSubmit(false)
                throw error
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmit && isMounted) {
            changePassword();
        }

        return () => {
            isMounted = false;
            controller.abort();
        }
    })
    return (
        <div className={changeState ? 'signin_wrapper open_signin' : 'signin_wrapper'}>
            <div className="signup_inner forgotPass">
                <div className="signup_details">
                    <div className="site_logo">
                        <a href="index.html"> <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="change-passwordimage" /></a>
                    </div>
                    <h3>welcome to cultivation!</h3>
                    <p>Consectetur adipisicing elit sed do eiusmod por incididunt uttelabore et dolore magna aliqu.</p>

                </div>
                <div className="account-details p-md-4 p-3">
                    <span className="close"
                        onClick={() => setChangeState()}
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
                    <form onSubmit={handleSubmit}>

                        <div className="d-flex flex-wrap h-100 align-content-center justify-content-center text-center">
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <h5 className="title">Change Password </h5>
                                </div>
                            </div>
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <input
                                        type="password"
                                        name='current_password'
                                        placeholder="Current Password"
                                        onChange={handleChange}
                                        value={formValues.current_password}
                                    />
                                </div>
                                <p className='errorTextPasswordChange'>{formErrors.current_password}</p>
                            </div>
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <input
                                        type="password"
                                        name='new_password'
                                        placeholder="New Password"
                                        onChange={handleChange}
                                        value={formValues.new_password}
                                    />
                                </div>
                                <p className='errorTextPasswordChange'>{formErrors.new_password}</p>
                            </div>
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group" style={{
                                    position: 'relative'
                                }}>
                                    <input
                                        type={viewPassword ? 'text' : 'password'}
                                        name='confirm_password'
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        value={formValues.confirm_password}
                                    />
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px'
                                        }}><FontAwesomeIcon
                                            icon={viewPassword ? faEyeSlash : faEye}
                                            onMouseDown={() => setViewPassword(true)}
                                            onMouseUp={() => setViewPassword(false)}
                                            onTouchStart={() => setViewPassword(true)}
                                            onTouchEnd={() => setViewPassword(false)}
                                        /></span>
                                </div>
                                <p className='errorTextPasswordChange'>{formErrors.confirm_password}</p>

                            </div>
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <input
                                        type="text"
                                        name='otp'
                                        placeholder="Enter OTP"
                                        onChange={handleChange}
                                        value={formValues.otp}
                                    />
                                    <p className='text-right button-stylingresendotp' ><button onClick={() => sendOTP()} >Resend</button></p>
                                </div>
                                <p className='errorTextPasswordChange'>{formErrors.otp}</p>

                            </div>
                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <button type='button' className="btn btn--box btn--radius btn--small btn--black btn--black-hover-green btn--uppercase font--bold">Save Change</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.shop.userInfo
    }
}
export default connect(mapStateToProps)(Changepasswordmodal)