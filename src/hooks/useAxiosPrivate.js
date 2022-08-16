import { axiosPrivate } from "../components/API/axios";
import { useEffect } from "react";
import useRefreshtoken from "./useRefreshtoken";
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthorized, setPopup, setPopupMessage, setSigninOpen, setUser } from "../redux/actions/productActions";

const useAxiosPrivate = () => {
    const refresh = useRefreshtoken();
    const user = useSelector(state => state.shop.user);
    const dispatch = useDispatch();


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
                if (error?.response?.status === 403) {
                    dispatch(setPopup(true));
                    dispatch(setPopupMessage('your Session as be expired please login'))
                    dispatch(setIsAuthorized(false))
                    dispatch(setSigninOpen(true))
                    dispatch(setUser([]))
                    return Promise.reject(error)
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