import axios from '../components/API/axios'
import { setUser } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
const useRefreshtoken = () => {
    const user = useSelector(state => state.shop.user)
    const dispatch = useDispatch();
    const refresh = async () => {
        var data = {
            refresh: user.refresh
        }
        const response = await axios.post('/api/v1/account/api/token/refresh/', data)
        console.log(response.data)
        dispatch(setUser({
            refresh: user.refresh,
            access: response.data.access
        }))
        return response.data.access
    }
    return refresh
}
export default useRefreshtoken