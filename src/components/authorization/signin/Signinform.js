import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Signinform = (
    {
        otpScreen,
        handleSubmit,
        formValues,
        formErrors,
        handleChange,
        handleForgotPass,
        loader
    }) => {

    return (
        <div className={otpScreen ? 'disabled' : 'signup_form_section'}>
            <h4>sign in account</h4>
            <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="signinimage" />
            <form onSubmit={handleSubmit}>
                <div className="form_block">
                    <input
                        type="text"
                        name='email'
                        value={formValues.email}
                        className="form_field"
                        placeholder="Email/Mobile"
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
                    <button type='button' onClick={handleForgotPass} className='signin-forgot-pass'>Forgot ?</button>
                </div>
                <p>{formErrors.password}</p>
                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'sign in'}</button>
            </form>
            <div className="social_button_section">
                <a href="#" className="fb_btn">
                    <span><img src={process.env.PUBLIC_URL + "/images/fb.png"} alt="signinimage" /></span>
                    <span>facebook</span>
                </a>
                <a href="#" className="google_btn">
                    <span><img src={process.env.PUBLIC_URL + "/images/google.png"} alt="signinimage" /></span>
                    <span>google+</span>
                </a>
            </div>
        </div>
    )
}

export default Signinform