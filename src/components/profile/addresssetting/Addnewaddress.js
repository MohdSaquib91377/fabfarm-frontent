import { faCircleXmark, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const Addnewaddress = ({ setFetchAddress }) => {

    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        full_name: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        locality: '',
        landmark: '',
        address: '',
        alternate_number: ''
    }
    const [addNewAddressButton, setAddNewAddressButton] = useState(false)
    const [addressFormValues, setAddressFormValues] = useState(initialValues)
    const [addressFormErrors, setAddressFormErrors] = useState({})
    const [isAddNewAddressSubmit, setIsAddNewAddressSubmit] = useState(false)
    const [loaderAddNewAddress, setLoaderAddNewAddress] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressFormValues({ ...addressFormValues, [name]: value })
    }

    const handleSubmitAddNewAddress = (e) => {
        e.preventDefault();
        setAddressFormErrors(validateAddressForm(addressFormValues))
        setIsAddNewAddressSubmit(true)
    }

    const handleCancleAddNewAddress = (e) => {
        e.preventDefault();
        setAddNewAddressButton(false)
        setAddressFormErrors({})
        setAddressFormValues(initialValues)
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
        if (Object.keys(addressFormErrors).length === 0 && isAddNewAddressSubmit) {
            setIsAddNewAddressSubmit(false)
            setLoaderAddNewAddress(true)
            axiosPrivate.post('/api/v1/account/user-address/', addressFormValues)
                .then(() => {
                    setLoaderAddNewAddress(false)
                    setAddressFormValues(initialValues)
                    setAddressFormErrors({})
                    setAddNewAddressButton(false)
                    setFetchAddress();
                })
                .catch(error => {
                    setLoaderAddNewAddress(false)
                    throw error
                })
        }
    })

    return (
        <>
            {
                addNewAddressButton ?
                    <>
                        <h6>ADD A NEW ADDRESS</h6>
                        <form onSubmit={handleSubmitAddNewAddress}>
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
                                {loaderAddNewAddress ? 'SAVING...' : 'SAVE'}
                            </button>
                            <button
                                type='button'
                                className='exitButtonProfile'
                                onClick={handleCancleAddNewAddress}
                            >CANCEL</button>
                        </form>
                    </>
                    :
                    <button
                        onClick={() => setAddNewAddressButton(!addNewAddressButton)}
                        className="exitButtonProfile"
                    >
                        <FontAwesomeIcon icon={addNewAddressButton ? faCircleXmark : faSquarePlus} /> ADD A NEW ADDRESS
                    </button>
            }

        </>
    )

}

export default Addnewaddress