import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { setUserInfo } from '../../../../redux/actions/productActions';
const Emailotpmodel = (
    {
        openEmailOtpModel, setOpenEmailOtpModel,
        setEditState, email_or_mobile, userInfo, setUserInfo,
        resendCounter, sendOtpIsSubmit, sendOtpLoader, placeHolders
    }) => {


    const axiosPrivate = useAxiosPrivate();
    const [viewPassword, setViewPassword] = useState(false)
    const initialValues = { new_email_otp: '', exists_email_otp: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateEmailOTP(formValues))
        setIsSubmit(true)
    }

    const handleClose = () => {
        setOpenEmailOtpModel(false)
        setFormValues(initialValues)
        setFormErrors(initialValues)
    }
    const validateEmailOTP = (values) => {
        const errors = {};
        const regexOtpcode = /^[1-9][0-9]{5}$/;

        if (!values.new_email_otp) {
            errors.new_email_otp = `New email OTP is required!`
        } else if (!regexOtpcode.test(values.new_email_otp)) {
            errors.new_email_otp = `Enter a valid OTP!`
        }
        if (!values.exists_email_otp) {
            errors.exists_email_otp = `Exists email OTP is required!`
        } else if (!regexOtpcode.test(values.exists_email_otp)) {
            errors.exists_email_otp = `Enter a valid OTP!`
        }
        if (!values.password) {
            errors.password = `Password is required! `
        }

        return errors
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const patchEmail = async () => {
            setLoader(true)
            setIsSubmit(false)
            try {
                await axiosPrivate.patch('/api/v1/account/update-email/', formValues)
                setLoader(false)
                setUserInfo({ ...userInfo, email_or_mobile: email_or_mobile })
                setEditState(false)
                setOpenEmailOtpModel(false)

            } catch (error) {
                setFormErrors(error?.response?.data?.message)
                setLoader(false)
                throw error
            }
        }
        if (Object.keys(formErrors).length === 0 && isMounted && isSubmit) {
            patchEmail();
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    })

    return (
        <div className={openEmailOtpModel ? 'signin_wrapper open_signin' : 'signin_wrapper'}>
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
                        onClick={(e) => handleClose(e)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 212.982 212.982"
                            width="11px"
                            height="11px"
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
                                    <h5 className="title">Verify OTP </h5>
                                    <button
                                        onClick={() => sendOtpIsSubmit(true)}
                                        disabled={resendCounter !== 0 || sendOtpLoader ? true : false}
                                        type='button'>
                                        {resendCounter !== 0 ? `Resend OTP in ${resendCounter}` : sendOtpLoader ? 'Resending...' : 'Resend OTP'}
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <input
                                        type="text"
                                        name='new_email_otp'
                                        placeholder={placeHolders.new_email_otp}
                                        onChange={handleChange}
                                        value={formValues.new_email_otp}
                                    />
                                </div>
                                <p className='errorTextPasswordChange'>{formErrors.new_email_otp}</p>
                            </div>
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <input
                                        type="text"
                                        name='exits_email_otp'
                                        placeholder={placeHolders.exists_email_otp}
                                        onChange={handleChange}
                                        value={formValues.exists_email_otp}
                                    />
                                </div>
                                <p className='errorTextPasswordChange'>{formErrors.exists_email_otp}</p>
                            </div>
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group" style={{
                                    position: 'relative'
                                }}>
                                    <input
                                        type={viewPassword ? 'text' : 'password'}
                                        name='password'
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={formValues.password}
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
                                <p className='errorTextPasswordChange'>{formErrors.password}</p>

                            </div>
                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <button type='submit' className="btn btn--box btn--radius btn--small btn--black btn--black-hover-green btn--uppercase font--bold">{loader ? 'Saving Changes...' : 'Save Change'}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >

        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.shop.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (user) => dispatch(setUserInfo(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Emailotpmodel)