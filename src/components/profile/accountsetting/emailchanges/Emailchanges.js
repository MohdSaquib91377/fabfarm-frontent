import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate'
import Changepasswordmodal from './Changepasswordmodal'
import Emailotpmodel from './Emailotpmodel'
const Emailchanges = ({ userInfo }) => {
    const axiosPrivate = useAxiosPrivate();
    const [editState, setEditState] = useState(false)
    const [openEmailOtpModel, setOpenEmailOtpModel] = useState(false)
    const [changeState, setChangeState] = useState(false)
    const initialValues = { email_or_mobile: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [resendCounter, setResendCounter] = useState(0)
    const [loader, setLoader] = useState(false)
    const [placeHolders, setPlaceHolders] = useState({ new_email_otp: '', exists_email_otp: '' })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateEmailChanges(formValues))
        setIsSubmit(true)
    }

    const validateEmailChanges = (value) => {
        const errors = {};
        const regexemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}/;
        
        if (!value.email_or_mobile) {
            errors.email_or_mobile = `Email is required!`
        } else if (!regexemail.test(value.email_or_mobile)) {
            errors.email_or_mobile = 'Enter a valid email!';
        }

        return errors
    }
    useEffect(() => {
        if (!editState) {
            setFormErrors(initialValues)
        }
        const { email_or_mobile } = userInfo
        setFormValues({ email_or_mobile: email_or_mobile })
    }, [userInfo, editState])

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const sendOTP = async () => {
            setLoader(true)
            setIsSubmit(false)
            try {
                const response = await axiosPrivate.post('/api/v1/account/update-email/', {
                    email_or_mobile: formValues.email_or_mobile
                })
                setPlaceHolders(response.data.message)
                setLoader(false)
                setOpenEmailOtpModel(true)
                setResendCounter(60)
            } catch (error) {
                setLoader(false)
                setFormErrors(error?.response?.data?.message)
                setOpenEmailOtpModel(false)
                throw error
            }
        }
        if (Object.keys(formErrors).length === 0 && isMounted && isSubmit) {
            sendOTP();
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    })
    useEffect(() => {
        const timer = resendCounter > 0 && setInterval(() => setResendCounter(resendCounter - 1), 1000);
        return () => clearInterval(timer);
    }, [resendCounter])
    return (
        <>
            <button className='changePasswordProfile' onClick={() => setChangeState(true)}>Change Password</button>
            <div className='HeadingsProfileEdit'>

                <h4 className="account-title mt-3">Email Address</h4>
                <button type='button' className='exitButtonProfile' onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
            </div>

            <div className="account-details">
                <div className="row ">
                    {
                        editState ?
                            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex' }}>
                                <div className="col-md-6 my-3">
                                    <div className="form-box__single-group">
                                        <input
                                            type="text"
                                            placeholder="Email address"
                                            name='email_or_mobile'
                                            onChange={handleChange}
                                            value={formValues.email_or_mobile}
                                        />
                                        <p>{formErrors.email_or_mobile}</p>
                                    </div>
                                </div>
                                <div className='col-md-6 my-3'>
                                    <button type='submit' className='submitProfileBtn2'>{loader ? 'Saving..' : 'Save'}</button>
                                </div>
                            </form>
                            :
                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <input type="text" disabled placeholder="Email address" value={formValues.email_or_mobile} />
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Changepasswordmodal
                changeState={changeState}
                setChangeState={() => setChangeState(false)}
            />
            <Emailotpmodel
                placeHolders={placeHolders}
                sendOtpLoader={loader}
                resendCounter={resendCounter}
                sendOtpIsSubmit={() => setIsSubmit(true)}
                email_or_mobile={formValues.email_or_mobile}
                setEditState={setEditState}
                openEmailOtpModel={openEmailOtpModel}
                setOpenEmailOtpModel={() => setOpenEmailOtpModel(false)}
            />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.shop.userInfo
    }
}
export default connect(mapStateToProps)(Emailchanges)