import { useEffect, useState } from "react"
import useAxiosPrivate from "../../../hooks/useAxiosPrivate"
import Addnewaddress from "../../profile/addresssetting/Addnewaddress";
import Selectaddress from "./Selectaddress";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const Deliveryaddress = ({ formErrors, formValues, handleChange }) => {
    const axiosPrivate = useAxiosPrivate();
    const [deliveryAddresses, setDeliveryAddresses] = useState([])
    const [fetchAddress, setFetchAddress] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getAddress = async () => {
            setLoader(true)
            try {
                const response = await axiosPrivate.get('/api/v1/account/user-address/')
                setDeliveryAddresses(response.data)
                setLoader(false)
            } catch (error) {
                setLoader(false)
                throw error
            }
        }
        if (isMounted) {
            getAddress();
        }

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [fetchAddress])
    if (loader) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            {deliveryAddresses.length !== 0 && <div
                style={{
                    border: '1px solid #ebebeb',
                    borderRadius: '3px',
                    padding: '10px 20px',
                    width: '100%',
                    outline: 'none',
                    fontSize: '14px',
                }}
            >

                <FormControl>
                    <FormLabel>Delivery Address</FormLabel>
                    <RadioGroup
                        name="user_address"
                        value={formValues.user_address}
                        onChange={handleChange}
                    >
                        {deliveryAddresses.map((details, index) => {
                            const { id } = details;
                            return (
                                <div
                                    style={{
                                        padding: '10px 20px',
                                        width: '100%',
                                        outline: 'none',
                                        fontSize: '14px',
                                        display: 'flex'
                                    }}
                                >
                                    <FormControlLabel value={id} control={<Radio />} />

                                    <Selectaddress
                                        key={index}
                                        details={details}
                                        setFetchAddress={() => setFetchAddress(!fetchAddress)}
                                    />
                                </div>
                            )
                        })}
                    </RadioGroup>
                    <p style={{
                        color: 'red'
                    }}>{formErrors.user_address}</p>
                </FormControl>
            </div>}
            <div style={{
                marginTop: '10px',
                marginBottom: '10px',
                border: '1px solid #ebebeb',
                borderRadius: '3px',
                padding: '10px 20px',
                width: '100%',
                outline: 'none',
                fontSize: '14px'
            }}>
                {formErrors.user_address !== undefined && deliveryAddresses.length === 0 ?
                    <p
                        style={{
                            color: 'red'
                        }}
                    >
                        Delivery address is required!
                    </p>
                    :
                    undefined
                }
                <Addnewaddress
                    setFetchAddress={() => setFetchAddress(!fetchAddress)}
                />
            </div>
        </>

    )
}

export default Deliveryaddress