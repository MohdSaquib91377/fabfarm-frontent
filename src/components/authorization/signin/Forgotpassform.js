import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Forgotpassform = (
    {
        otpScreen,
        handleVerifySubmit,
        formValues,
        formErrors,
        handleChange,
        counter,
        resendOtp,
        resendOtpLoader,
        loader,
        handleBackButton
    }) => {
    

    return (
        <div className={otpScreen ? 'signup_form_section' : 'disabled'}>
            <button
            style={{
                position:'absolute',
                top:'30px',
                left:'40px',
            }}
                type='button'
                onClick={handleBackButton}
            ><FontAwesomeIcon icon={faCircleArrowLeft} /> Back</button>
            <div>
                <h4>Reset Password</h4>
                <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="signinimage" />
                <form onSubmit={handleVerifySubmit}>
                    <div className="form_block" style={{
                        position: 'relative'
                    }}>
                        <input
                            type="text"
                            name='email'
                            value={formValues.email}
                            className="form_field formAddPadding"
                            placeholder="Email/Mobile Number"
                            disabled='true'
                        />
                        <button
                            type='button'
                            onClick={handleBackButton}
                            style={{
                                position: 'absolute',
                                right: '5px',
                                top: '13px'
                            }}
                        >Change ?</button>
                    </div>
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
                                <span>Resend OTP in {counter} sec</span>
                                :
                                <button type='button' onClick={(e) => resendOtp(e)}>{resendOtpLoader ? <FaSpinner icon="spinner" className="spinner" /> : 'Resend OTP'}</button>
                        }
                    </div>

                    <div className="form_block">
                        <input
                            type="password"
                            name='set_password'
                            value={formValues.set_password}
                            className="form_field"
                            placeholder="Set Password"
                            onChange={handleChange}
                        />
                        <p>{formErrors.set_password}</p>
                    </div>
                    <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'Verify'}</button>
                </form>
            </div>
        </div>)
}

export default Forgotpassform