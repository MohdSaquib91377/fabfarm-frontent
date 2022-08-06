import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Registoruser = ({ close, state, setOtpScreen, setVerifyDetails, setResendEmail, setResendCounter }) => {
    const initialValues = { name: '', email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)
    const [seePassword, setSeePassword] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateSignin(formValues));
        setIsSubmit(true)
    }
    useEffect(() => {
        setFormErrors({});
        setIsSubmit(false)
        setFormValues(initialValues)
    }, [close])
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setLoader(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/register/`, {
                fullname: formValues.name,
                email_or_mobile: formValues.email,
                password: formValues.password
            })
                .then(response => {
                    setOtpScreen(true)
                    setLoader(false)
                    setVerifyDetails({
                        id: response.data.id,
                        email_or_mobile: formValues.email
                    })
                    setResendEmail({
                        email_or_mobile: formValues.email,
                    })
                    setResendCounter(60)
                })
                .catch(error => {
                    setLoader(false)
                    setFormErrors({ email: error?.response?.data?.message })
                })
        }
    }, [formErrors]);
    const validateSignin = (values) => {
        const errors = {};
        const regexName = /^[A-Za-z ]+$/;
        const regexemail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}/;
        const regexmobile = /^([+]\d{2})?\d{10}$/;
        if (!values.name) {
            errors.name = 'Name is required!'
        }
        else if (!regexName.test(values.name)) {
            errors.name = 'Enter a valid name'
        }
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
    return (
        <div className={state ? 'disabled' : 'signup_form_section'}>
            <h4>create account</h4>
            <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="image" />
            <form onSubmit={handleSubmit}>
                <div className="form_block">
                    <input type="text" name='name' value={formValues.name} onChange={handleChange} className="form_field" placeholder="Name" autoComplete='off' />
                </div>
                <p>{formErrors.name}</p>
                <div className="form_block">
                    <input type="text" name='email' value={formValues.email} onChange={handleChange} className="form_field" placeholder="Email/Mobile" autoComplete='off' />
                </div>
                <p>{formErrors.email}</p>
                <div className="form_block" style={{
                    position: 'relative'
                }}>
                    <input type={seePassword ? 'text' : 'password'} name='password' value={formValues.password} onChange={handleChange} className="form_field" placeholder="Password" autoComplete='off' />
                    <FontAwesomeIcon style={{
                        position: 'absolute',
                        right: '10px',
                        top: '16px'
                    }}
                        onMouseDown={() => setSeePassword(true)}
                        onMouseUp={() => setSeePassword(false)}
                        onTouchStart={() => setSeePassword(true)}
                        onTouchEnd={() => setSeePassword(false)}
                        icon={seePassword ? faEyeSlash : faEye} />
                </div>
                <p>{formErrors.password}</p>
                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'sign up'}</button>
            </form>

            <div className="social_button_section">
                <a href="#" className="fb_btn">
                    <span><img src={process.env.PUBLIC_URL + "/images/fb.png"} alt="image" /></span>
                    <span>facebook</span>
                </a>
                <a href="#" className="google_btn">
                    <span><img src={process.env.PUBLIC_URL + "/images/google.png"} alt="image" /></span>
                    <span>google+</span>
                </a>
            </div>
        </div>
    )
}

export default Registoruser