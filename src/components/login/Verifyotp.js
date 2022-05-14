import React, { useEffect, useRef, useState } from 'react'
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import { setUser, setSigninOpen, setSignupOpen, setIsAuthorized } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
const Verifyotp = ({ signupOpen, setSigninOpen, setSignupOpen, setIsAuthorized, setUser, state, id }) => {
    const initialValues = { otp: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)
    const otpErrorText = useRef('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleOTPSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateOTP(formValues));
        setIsSubmit(true)
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setLoader(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/verify-otp/`, {
                id: id,
                otp: formValues.otp
            })
                .then(response => {
                    setLoader(false)
                    console.log(response.data)
                    setUser(response.data)
                    setIsAuthorized()
                })
                .catch(response => {
                    console.log(response.data)
                    // otpErrorText.current.value = response.data.message
                    console.log(otpErrorText)
                })
        }
    }, [formErrors]);
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
    return (
        <div className={state ? 'signup_form_section' : 'disabled'}>
            <h4>Verify OTP</h4>
            <img src="images/clv_underline.png" alt="image" />
            <form onSubmit={handleOTPSubmit}>
                <input type="text" name='id' id='otp-id' value={formValues.id} onChange={handleChange} disabled />
                <div className="form_block">
                    <input type="text" name='otp' value={formValues.otp} onChange={handleChange} className="form_field" placeholder="OTP" autoComplete='off' />
                </div>
                <p>{formErrors.otp}</p>
                <p>{otpErrorText.current.value}</p>
                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'Verify'}</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        setIsAuthorized: () => dispatch(setIsAuthorized())
    }
}
export default connect(null, mapDispatchToProps)(Verifyotp);