import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { setUserInfo } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';

const Personalinformation = ({ setUserInfo, userInfo }) => {
    const axiosPrivate = useAxiosPrivate();
    const [editState, setEditState] = useState(false)
    const initialValues = { fullname: '', gender: "", email_or_mobile: '' };
    const [user, setUser] = useState(initialValues)
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateUserDetails(formValues));
        setIsSubmit(true)
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getUser = async () => {
            try {
                const response = await axiosPrivate.get('/api/v1/account/list-update-profile/')
                setUser(response?.data)
                setFormValues(response?.data)
                setUserInfo(response?.data)
            } catch (error) {
                throw error
            }
        }
        if (isMounted && !editState) {
            getUser();
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [editState])
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const patchUser = async () => {
            setLoader(true)
            try {
                await axiosPrivate.patch('/api/v1/account/list-update-profile/', formValues)
                setLoader(false)
                setIsSubmit(false)
                setEditState(false)
            } catch (error) {
                setLoader(false)
                throw error
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmit && isMounted) {
            patchUser();
        }

        return () => {
            isMounted = false;
            controller.abort();
        }
    })
    const validateUserDetails = (values) => {
        const errors = {};
        const regexName = /^[A-Za-z ]+$/;
        if (!values.fullname) {
            errors.fullname = 'Full name is required!'
        }
        else if (!regexName.test(values.fullname)) {
            errors.fullname = 'Enter a valid full name'
        }
        if (!values.gender) {
            errors.gender = 'Select your gender!'
        }
        return errors;
    }
    return (
        <>
            <div className='HeadingsProfileEdit'>

                <h4 className="account-title">Personal Information</h4>
                <button className='exitButtonProfile' onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
            </div>
            {
                editState ?
                    <div className="account-details">
                        <form onSubmit={handleSubmit}>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-box__single-group">
                                        <input
                                        
                                            type="text"
                                            name='fullname'
                                            placeholder="Full Name"
                                            value={formValues.fullname}
                                            minLength="3"
                                            maxLength='20'
                                            onChange={handleChange}
                                        />
                                        <p>{formErrors.fullname}</p>
                                    </div>
                                </div>
                                <div className='col-md-6 '>

                                    <button type='submit' className='submitProfileBtn'>{loader ? 'Saving...' : 'Save'}</button>
                                </div>

                                <div className="col-md-12 mt-3 w-100">
                                    <div className="form-box__single-group w-100 ">

                                        <FormControl className='w-100'>
                                            <FormLabel id="gender-radio-button-group">Your Gender</FormLabel>
                                            <RadioGroup
                                                className='flex-row'
                                                aria-labelledby="gender-radio-button-group"
                                                name="gender"
                                                value={formValues.gender}
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            </RadioGroup>
                                        </FormControl>
                                        <p>{formErrors.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                    :
                    <div className="account-details">
                        <div className="row">
                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <input type="text" disabled placeholder="Full Name" value={user.fullname} maxLength="30" />
                                </div>
                            </div>
                            <div className="col-md-12 my-3  w-100">
                                <FormControl className='w-100'>
                                    <FormLabel id="gender-radio-button-group">Your Gender</FormLabel>
                                    <RadioGroup
                                        className='w-100 flex-row'
                                        aria-labelledby="gender-radio-button-group"
                                        name="controlled-radio-buttons-group"
                                        value={`${user.gender}`}
                                    >
                                        <FormControlLabel className='d-inline-block w-25' disabled value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel className='d-inline-block w-25' disabled value="female" control={<Radio />} label="Female" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>
            }
        </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Personalinformation)