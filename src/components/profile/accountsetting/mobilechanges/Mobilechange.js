import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import Mobileotpmodal from './Mobileotpmodal';

const Mobilechange = ({ userInfo }) => {

    const axiosPrivate = useAxiosPrivate();
    const [editState, setEditState] = useState(false)
    const [openMobileOtpModel, setOpenMobileOtpModel] = useState(false)
    const initialValues = { mobile: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [resendCounter, setResendCounter] = useState(0)
    const [loader, setLoader] = useState(false)
    const [placeHolders, setPlaceHolders] = useState({ new_mobile_otp: '', exists_email_or_mobile_otp: '' })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateMobileChanges(formValues))
        setIsSubmit(true)
    }

    const validateMobileChanges = (value) => {
        const errors = {};
        const regexmobile = /^([+]\d{2})?\d{10}$/;

        if (!value.mobile) {
            errors.mobile = `Mobile number is required!`
        } else if (!regexmobile.test(value.mobile)) {
            errors.mobile = 'Enter a valid mobile number!';
        }

        return errors
    }

    useEffect(() => {
        if (!editState) {
            setFormErrors(initialValues)
        }
        if(userInfo.mobile !== null)
        {
            const { mobile } = userInfo
            setFormValues({ mobile: mobile })
        }
        else{
            setFormValues(initialValues)
        }
    }, [userInfo, editState])

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const sendOTP = async () => {
            setLoader(true)
            setIsSubmit(false)
            try {
                const response = await axiosPrivate.post('/api/v1/account/update-mobile/', {
                    mobile: formValues.mobile
                })
                setPlaceHolders(response.data.message)
                setLoader(false)
                setOpenMobileOtpModel(true)
                setResendCounter(60)
            } catch (error) {
                if (error.response.status !== 500) {
                    setLoader(false)
                    setFormErrors(error?.response?.data?.message)
                    setOpenMobileOtpModel(false)
                }
                else {
                    setLoader(false)
                    alert('Add your number to Twilio Acc')
                }
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
            <div className='HeadingsProfileEdit'>

                <h4 className="account-title mt-3">Mobile Number</h4>
                <button className='exitButtonProfile' type='button' onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
            </div>
            <div className="account-details posrelProfile w-100">
                <div className="row">
                    {
                        editState ?
                            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex' }}>
                                <div className="col-md-6 my-3">
                                    <div className="form-box__single-group">
                                        <input
                                            type="text"
                                            name='mobile'
                                            placeholder="Mobile Number"
                                            onChange={handleChange}
                                            value={formValues.mobile}
                                        />
                                        <p>{formErrors.mobile}</p>
                                    </div>

                                </div>
                                <div className='col-md-6 my-3'>
                                    <button type='submit' className='submitProfileBtn2'>{loader ? 'Saving...' : 'Save'}</button>
                                </div>
                            </form>
                            :

                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        disabled
                                        value={formValues.mobile}
                                    />
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Mobileotpmodal
                openMobileOtpModel={openMobileOtpModel}
                setOpenMobileOtpModel={() => setOpenMobileOtpModel(false)}
                mobile={formValues.mobile}
                setEditState={setEditState}
                sendOtpIsSubmit={() => setIsSubmit(true)}
                sendOtpLoader={loader}
                placeHolders={placeHolders}
                resendCounter={resendCounter}
            />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.shop.userInfo
    }
}
export default connect(mapStateToProps)(Mobilechange)