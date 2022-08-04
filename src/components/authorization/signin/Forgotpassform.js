import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Forgotpassform = (
    {
        otpScreen,
        resetPassScreen,
        handleVerifySubmit,
        formValues,
        formErrors,
        handleChange,
        counter,
        resendOtp,
        resendOtpLoader,
        loader,
        handleResetSubmit
    }) => {
    return (
        <div className={otpScreen ? 'signup_form_section' : 'disabled'}>
            <div className={resetPassScreen ? 'disabled' : 'enabled'}>
                <h4>Verify OTP</h4>
                <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="signinimage" />
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
                                <button type='button' onClick={(e) => resendOtp(e)}>{resendOtpLoader ? <FaSpinner icon="spinner" className="spinner" /> : 'Resend OTP'}</button>
                        }
                    </div>
                    <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'Verify'}</button>
                </form>
            </div>
            <div className={resetPassScreen ? 'enabled' : 'disabled'}>
                <h4>reset your password</h4>
                <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="signinimage" />
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
        </div>)
}

export default Forgotpassform