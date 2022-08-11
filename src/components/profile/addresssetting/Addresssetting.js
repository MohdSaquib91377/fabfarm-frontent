import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Addnewaddress from "./Addnewaddress";
import Addressdetails from "./Addressdetails";

const Addresssetting = ({ profileState }) => {
    const axiosPrivate = useAxiosPrivate();
    const [userAddresses, setUserAddresses] = useState([])
    const [fetchAddress, setFetchAddress] = useState(false)
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getAddress = async () => {
            setLoader(true)
            try {
                const response = await axiosPrivate.get('/api/v1/account/user-address/')
                setUserAddresses(response.data)
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

    return (
        <div className={profileState === 'Address' ? 'tab-pane fade show active' : 'tab-pane fade '}>
            <div className="my-account-address account-wrapper">
                <h4 className="account-title">Manage Addresses</h4>
                <div className="account-address m-t-30">
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

                    {
                        loader ?
                            <>
                                Loding...
                            </>
                            :
                            userAddresses.length !== 0 &&
                            userAddresses.map((details, index) => {
                                return (
                                    <Addressdetails
                                        key={index}
                                        details={details}
                                        setFetchAddress={() => setFetchAddress(!fetchAddress)}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Addresssetting