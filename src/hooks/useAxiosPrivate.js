import { axiosPrivate } from "../components/API/axios";
import { useEffect } from "react";
import useRefreshtoken from "./useRefreshtoken";
import { useSelector } from 'react-redux';

const useAxiosPrivate = () => {
    const refresh = useRefreshtoken();
    const user = useSelector(state => state.shop.user)

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${user.access}`
                }

                return config
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }

                return Promise.reject(error);
            }
        );
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [refresh])

    return axiosPrivate
}

export default useAxiosPrivate;