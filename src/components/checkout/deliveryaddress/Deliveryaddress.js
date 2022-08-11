import { useEffect, useState } from "react"
import useAxiosPrivate from "../../../hooks/useAxiosPrivate"
import Addnewaddress from "../../profile/addresssetting/Addnewaddress";
import Selectaddress from "./Selectaddress";

const Deliveryaddress = () => {
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
            {
                deliveryAddresses.map((details, index) => {

                    return (
                        <Selectaddress
                            key={index}
                            details={details}
                            setFetchAddress={() => setFetchAddress(!fetchAddress)}
                        />
                    )
                })}
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

                <Addnewaddress
                    setFetchAddress={() => setFetchAddress(!fetchAddress)}
                />
            </div>
        </>

    )
}

export default Deliveryaddress