import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const Addnewaccount = ({fetchAccountDetails,setFetchAccountDetails}) => {
    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        ifsc: '',
        name: '',
        account_number: '',
        confirm_account_number: '',
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [editState, setEditState] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateCodReturnForm(formValues))
        setIsSubmit(true)
    }
    const handleClose = () => {
        setFormErrors({})
        setFormValues(initialValues)
        setEditState(false)
    }
    const validateCodReturnForm = (values) => {
        const errors = {};
        const regexIFSCCODE = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        const regexAccountNumber = /^[0-9]{9,18}/;
        const regexName = /^[A-Za-z ]+$/;

        if (!values.ifsc) {
            errors.ifsc = 'IFSC CODE is required!'
        } else if (!regexIFSCCODE.test(values.ifsc)) {
            errors.ifsc = 'Enter a valid IFSC CODE'
        }

        if (!values.name) {
            errors.name = 'Account holder name is required!'
        } else if (!regexName.test(values.name)) {
            errors.name = 'Enter a valid account holder name'
        }

        if (!values.account_number) {
            errors.account_number = 'Account number is required!'
        } else if (!regexAccountNumber.test(values.account_number)) {
            errors.account_number = 'Enter a valid account number'
        }

        if (!values.confirm_account_number) {
            errors.confirm_account_number = 'Confirm account number is required!'
        } else if (values.account_number !== values.confirm_account_number) {
            errors.confirm_account_number = 'Account number and confirm account number does not match'
        }

        return errors
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false)
            axiosPrivate.post(`/api/v1/order/razorpay/create-fund-account/`, formValues)
                .then(() => {
                    setEditState(false)
                    setFormValues(initialValues)
                    setFetchAccountDetails(!fetchAccountDetails)
                })
                .catch(error => {
                    setFormErrors({ ...formErrors, error: `${error.response.data.message.error.description}` })
                    throw (error)
                })
        }
    })


    return (
        <div className="my-account-dashboard account-wrapper">
            <h4 className="account-title">Account Details</h4>

            <div className='m-t-30'>
                {
                    editState ?
                        <form onSubmit={handleSubmit} >
                            <div className='form-box__single-group'>
                                <p className='text-center'>{formErrors.error}</p>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="col-md-6 col-12 form-box__single-group">
                                    <input
                                        name='ifsc'
                                        placeholder='IFSC CODE'
                                        value={formValues.ifsc}
                                        onChange={handleChange}
                                    />
                                    <p>{formErrors.ifsc}</p>
                                </div>
                                <div className="col-md-6 col-12 form-box__single-group">
                                    <input
                                        name='account_number'
                                        placeholder='Account number'
                                        value={formValues.account_number}
                                        onChange={handleChange}
                                    />
                                    <p>{formErrors.account_number}</p>
                                </div>
                                <div className="col-md-6 col-12 form-box__single-group">
                                    <input
                                        name='confirm_account_number'
                                        placeholder='Confirm account number'
                                        value={formValues.confirm_account_number}
                                        onChange={handleChange}
                                    />
                                    <p>{formErrors.confirm_account_number}</p>
                                </div>
                                <div className="col-md-6 col-12 form-box__single-group">
                                    <input
                                        name='name'
                                        placeholder='Account holder name'
                                        value={formValues.name}
                                        onChange={handleChange}
                                    />
                                    <p>{formErrors.name}</p>
                                </div>
                            </div>
                            <div>
                                <Button
                                    type='button'
                                    variant="contained"
                                    color="error"
                                    sx={{ marginRight: 5 }}
                                    onClick={() => handleClose()}
                                >Cancel</Button>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    color="success"
                                >submit</Button>
                            </div>
                        </form>
                        :
                        <button
                            className='exitButtonProfile'
                            onClick={() => setEditState(true)}
                        >
                            Add New Account
                        </button>
                }
            </div>
        </div>
    )
}

export default Addnewaccount