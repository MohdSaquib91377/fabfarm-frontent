import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Forgotpassform = (
    {
        otpScreen,
        formValues,
        formErrors,
        handleChange,
        counter,
        resendOtp,
        resendOtpLoader,
        loader,
        handleVerifyLoginWithOtp,
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
                <h4>Verify OTP</h4>
                <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="signinimage" />
                <form onSubmit={handleVerifyLoginWithOtp}>
                    <div className="form_block my-3" style={{
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
                    <div className="form_block my-3">
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

                    <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'Verify'}</button>
                </form>
            </div>
        </div>)
}

export default Forgotpassform