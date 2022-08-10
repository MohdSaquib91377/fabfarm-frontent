import React, { useState } from 'react'
import { connect } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { setCouponDetails } from '../../redux/actions/productActions';

const Coupon = ({ setCouponDetails }) => {
    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        couponcode: ""
    };
    const [coupon, setCoupon] = useState({ initialValues })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCoupon({ coupon, [name]: value })
    }
    const applyCoupon = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/coupon/apply/${coupon.couponcode}/`)
            setCouponDetails({
                couponDetails: response.data.data,
                couponName: coupon.couponcode
            })
        } catch (error) {
            throw error
        }
    }
    return (
        <>
            <input
                name='couponcode'
                placeholder='Coupon code'
                value={coupon.couponcode}
                onChange={handleChange}
                type="text" />
            <button  onClick={() => applyCoupon()} className="buttonViewMore">Apply</button>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCouponDetails: (coupon) => dispatch(setCouponDetails(coupon))
    }
}
export default connect(null, mapDispatchToProps)(Coupon)