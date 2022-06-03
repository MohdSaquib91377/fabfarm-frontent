import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
const Registoruser = ({ close, state, setOtpScreen, setId }) => {
    const initialValues = { name: '', email: "", password: "" };
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
                    setId(response.data.id)
                })
                .catch(error => {
                    setLoader(false)
                    setFormErrors({ email: error?.response?.data?.message })
                })
        }
    }, [formErrors]);
    const validateSignin = (values) => {
        const errors = {};
        const regexemail = /\S+@\S+\.\S+/;
        if (!values.name) {
            errors.name = 'Name is required!'
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
    return (
        <div className={state ? 'disabled' : 'signup_form_section'}>
            <h4>create account</h4>
            <img src={process.env.PUBLIC_URL + "images/clv_underline.png"} alt="image" />
            <form onSubmit={handleSubmit}>
                <div className="form_block">
                    <input type="text" name='name' value={formValues.name} onChange={handleChange} className="form_field" placeholder="Name" autoComplete='off' />
                </div>
                <p>{formErrors.name}</p>
                <div className="form_block">
                    <input type="text" name='email' value={formValues.email} onChange={handleChange} className="form_field" placeholder="Email" autoComplete='off' />
                </div>
                <p>{formErrors.email}</p>
                <div className="form_block">
                    <input type="password" name='password' value={formValues.password} onChange={handleChange} className="form_field" placeholder="Password" autoComplete='off' />
                </div>
                <p>{formErrors.password}</p>
                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'sign up'}</button>
            </form>

            <div className="social_button_section">
                <a href="#" className="fb_btn">
                    <span><img src={process.env.PUBLIC_URL + "images/fb.png"} alt="image" /></span>
                    <span>facebook</span>
                </a>
                <a href="#" className="google_btn">
                    <span><img src={process.env.PUBLIC_URL + "images/google.png"} alt="image" /></span>
                    <span>google+</span>
                </a>
            </div>
        </div>
    )
}

export default Registoruser