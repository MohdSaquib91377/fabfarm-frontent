import axios from '../components/API/axios'
import { useEffect, useState } from 'react'

const useBannerImages = (page) => {
    const [bannerDetails, setBannerDetails] = useState([])
    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            axios.get(`/api/v1/banner/${page}/`)
                .then(response => {
                    setBannerDetails(response.data[0].baners)
                })
                .catch(error => {
                    if (error.code === 'ERR_NETWORK') {
                        alert(error.message)
                    }
                    throw error
                })
        }

        return (() => {
            isMounted = false
        })
    }, [])
    return bannerDetails
}

export default useBannerImages