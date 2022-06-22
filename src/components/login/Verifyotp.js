import React, { useEffect, useRef, useState } from 'react'
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import { setUser, setIsAuthorized } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
const Verifyotp = ({ resendCounter, resendEmail, setIsAuthorized, setUser, state, id }) => {
    const initialValues = { otp: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)
    const [resendOtpLoader, setResendOptLoader] = useState(false)
    const [counter, setCounter] = useState(0)
    const [otp_id, setOtp_Id] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleOTPSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateOTP(formValues));
        setIsSubmit(true)   
    }
    const resendOtp = (e) => {
        e.preventDefault();
        setResendOptLoader(true)
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/send-otp/`, resendEmail)
            .then(response => {
                setOtp_Id(response.data.id)
                setCounter(60)
                setResendOptLoader(false)
            })
    }
    useEffect(()=>{
        setOtp_Id(id)
    },[id])
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setLoader(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/verify-otp/`, {
                id: otp_id,
                otp: formValues.otp
            })
                .then(response => {
                    setLoader(false)
                    setUser(response.data.data)
                    setIsAuthorized()
                })
                .catch(error => {
                    setLoader(false)
                    setFormErrors({ otp: error.response.data.message })
                })
        }
    }, [formErrors]);
    useEffect(() => {
        setCounter(resendCounter)
    }, [resendCounter])
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter])

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
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        setIsAuthorized: () => dispatch(setIsAuthorized())
    }
}
export default connect(null, mapDispatchToProps)(Verifyotp);