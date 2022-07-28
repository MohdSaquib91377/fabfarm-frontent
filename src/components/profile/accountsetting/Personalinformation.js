import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const Personalinformation = () => {
    const axiosPrivate = useAxiosPrivate();
    const [editState, setEditState] = useState(false)
    const [user, setUser] = useState([])
    const initialValues = { fullname: '', gender: "" };
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
                setFormValues(initialValues)
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
            <h4 className="account-title">Personal Information</h4>
            <button className='exitButtonProfile' onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
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
                                            onChange={handleChange}
                                        />
                                        <p>{formErrors.fullname}</p>
                                    </div>
                                </div>
                                <div className='col-md-6 text-right'>

                                <button type='submit' className='submitProfileBtn'>{loader ? 'Saving...' : 'Save'}</button>
                                </div>
                               
                                <div className="col-md-12 mt-3">
                                    <div className="form-box__single-group ">

                                        <FormControl>
                                            <FormLabel id="gender-radio-button-group">Your Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="gender-radio-button-group"
                                                name="gender"
                                                value={formValues.gender}
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
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
                                    <input type="text" disabled placeholder="Full Name" value={user.fullname} />
                                </div>
                            </div>
                            <div className="col-md-12 my-3">
                                <FormControl>
                                    <FormLabel id="gender-radio-button-group">Your Gender</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="gender-radio-button-group"
                                        name="controlled-radio-buttons-group"
                                        value={`${user.gender}`}
                                    >
                                        <FormControlLabel disabled value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel disabled value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Personalinformation