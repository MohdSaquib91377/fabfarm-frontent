import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
const Selectaddress = ({ details, setFetchAddress }) => {
    const axiosPrivate = useAxiosPrivate();
    const { id, full_name, alternate_number, address, locality, landmark, city, state, country, pincode } = details;
    const [addressFormValues, setAddressFormValues] = useState(details)
    const [addressFormErrors, setAddressFormErrors] = useState({})
    const [editState, setEditState] = useState(false)
    const [isEditAddressSubmit, setIsEditAddressSubmit] = useState(false)
    const [loaderEditAddress, setLoaderEditAddress] = useState(false)
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressFormValues({ ...addressFormValues, [name]: value })
    }

    const handleEditAddressSubmit = (e) => {
        e.preventDefault();
        setAddressFormErrors(validateAddressForm(addressFormValues))
        setIsEditAddressSubmit(true)
    }

    const handleEditAddressCancel = (e) => {
        e.preventDefault();
        setEditState(false)
        setAddressFormErrors({})
        setAddressFormValues(details)
    }
    const validateAddressForm = (values) => {
        const errors = {};
        const regexFullName = /^[A-Za-z ]+$/;
        const regexPincode = /^[1-9][0-9]{5}$/;
        const regexmobile = /^([+]\d{2})?\d{10}$/;
        if (!values.full_name) {
            errors.full_name = 'Full Name is required!'
        } else if (!regexFullName.test(values.full_name)) {
            errors.full_name = 'Enter a valid name'
        }
        if (!values.city) {
            errors.city = 'City is required!'
        }
        if (!values.state) {
            errors.state = 'State is required!'
        }
        if (!values.country) {
            errors.country = 'Country is required!'
        }
        if (!values.pincode) {
            errors.pincode = 'Pincode is required!'
        } else if (!regexPincode.test(values.pincode)) {
            errors.pincode = 'Enter a valid pincode!';
        }
        if (!values.locality) {
            errors.locality = 'Locality is required!'
        }
        if (!values.landmark) {
            errors.landmark = 'Lanmark is required!'
        }
        if (!values.address) {
            errors.address = 'Address is required!'
        }
        if (!values.alternate_number) {
            errors.alternate_number = 'Alternate Number is required!'
        } else if (!regexmobile.test(values.alternate_number)) {
            errors.alternate_number = 'Enter a valid mobile number!';
        }

        return errors;
    }

    useEffect(() => {
        if (Object.keys(addressFormErrors).length === 0 && isEditAddressSubmit) {
            setIsEditAddressSubmit(false)
            setLoaderEditAddress(true)
            axiosPrivate.patch(`/api/v1/account/user-address/${id}/`, addressFormValues)
                .then(() => {
                    setLoaderEditAddress(false)
                    setAddressFormValues(details)
                    setAddressFormErrors({})
                    setEditState(false)
                    setFetchAddress();
                })
                .catch(error => {
                    setLoaderEditAddress(false)
                    throw error
                })
        }
    })
    useEffect(() => {
        setAddressFormValues(details)
    }, [details])

    return (
        <div
            style={{
                border: '1px solid #ebebeb',
                borderRadius: '3px',
                padding: '10px 20px',
                width: '100%',
                outline: 'none',
                fontSize: '14px',
            }}
        >
            {
                editState ?
                    <div>
                        <h6>EDIT ADDRESS</h6>
                        <form onSubmit={handleEditAddressSubmit}>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='full_name'
                                    placeholder='Full Name*'
                                    value={addressFormValues.full_name}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.full_name}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='city'
                                    placeholder='City*'
                                    value={addressFormValues.city}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.city}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='state'
                                    placeholder='State*'
                                    value={addressFormValues.state}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.state}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='country'
                                    placeholder='Country*'
                                    value={addressFormValues.country}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.country}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='pincode'
                                    placeholder='Pincode*'
                                    value={addressFormValues.pincode}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.pincode}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='locality'
                                    placeholder='Locality*'
                                    value={addressFormValues.locality}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.locality}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='landmark'
                                    placeholder='Landmark*'
                                    value={addressFormValues.landmark}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.landmark}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='address'
                                    placeholder='Address*'
                                    value={addressFormValues.address}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.address}</p>
                            </div>
                            <div className="form-box__single-group">
                                <input
                                    type='text'
                                    name='alternate_number'
                                    placeholder='Alternate Number*'
                                    value={addressFormValues.alternate_number}
                                    onChange={handleChange}
                                />
                                <p>{addressFormErrors.alternate_number}</p>
                            </div>
                            <button
                                type='submit'
                                className='exitButtonProfile'
                            >
                                {loaderEditAddress ? 'SAVING...' : 'SAVE'}
                            </button>
                            <button
                                type='button'
                                className='exitButtonProfile'
                                onClick={handleEditAddressCancel}
                            >CANCEL</button>
                        </form>
                    </div>
                    :
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div>
                            <h6>{full_name} {alternate_number}</h6>
                            <p>{address}, {locality}, {landmark}, {city}, {state}, {country}, {pincode}</p>
                        </div>
                        <div>
                            <button
                                onClick={()=>setEditState(true)}
                            >
                                Edit
                            </button>

                        </div>
                    </div>
            }
        </div >
    )
}
export default Selectaddress