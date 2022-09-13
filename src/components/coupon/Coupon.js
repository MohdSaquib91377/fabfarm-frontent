import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { setCouponDetails } from '../../redux/actions/productActions';

const Coupon = ({ setCouponDetails }) => {
    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        couponcode: ""
    };
    const [coupon, setCoupon] = useState({ initialValues })
    const [couponErrors, setCouponErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCoupon({ coupon, [name]: value })
    }
    const handleApply = () => {
        setCouponErrors(validateCoupon(coupon))
        setIsSubmit(true)
    }
    const validateCoupon = (values) => {
        const errors = {};
        if (!values.couponcode) {
            errors.couponcode = 'Coupon Code is requied!'
        }
        return errors;
    }
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const applyCoupon = async () => {
            setIsSubmit(false)
            try {
                const response = await axiosPrivate.get(`/api/v1/coupon/apply/${coupon.couponcode}/`)
                setCouponDetails({
                    couponDetails: response.data.data,
                    couponName: coupon.couponcode
                })
            } catch (error) {
                setCouponErrors({ couponcode: error?.response?.data?.message })
                throw error
            }
        }
        if (Object.keys(couponErrors).length === 0 && isMounted && isSubmit) {
            applyCoupon();
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    })

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
            <div className='w-75'>
                <input
                    name='couponcode'
                    placeholder='Coupon code'
                    value={coupon.couponcode}
                    className="coupenCodeInput w-100"
                    onChange={handleChange}
                    type="text" />
                <p style={{
                    color:'red'
                }}>{couponErrors.couponcode}</p>
            </div>
            <div>
                <button
                    onClick={() => handleApply()}
                    className="buttonViewMore p-3">Apply</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCouponDetails: (coupon) => dispatch(setCouponDetails(coupon))
    }
}
export default connect(null, mapDispatchToProps)(Coupon)