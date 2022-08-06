import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Tabtitle from '../../pages/Tabtitle';
import useBannerImages from '../../hooks/useBannerImages';


export function Orderdetails({ items }) {
    const { order } = items;
    const { address, alternate_number, city, country, full_name, landmark, locality, message, payment_mode, pincode, state } = order;
    return (
        //add stytle here for address section 
        <div className='address-place container'>
            <div className='addresss-bg'>

                <h4> <b> Delivery Address</b></h4>
                <br />
                <p>
                    <b>Name: </b>
                    {full_name}
                </p>
                <p>
                    <b>Address: </b>
                    {address},{landmark}, {locality}, {city},{state}, {country} - {pincode}
                </p>
                <p>
                    <b>Message: </b>
                    {message}
                </p>
                <p>
                    <b>Payment Mode: </b>
                    {payment_mode}

                </p>
                <h6><b> Mobile:</b> <span>{alternate_number}</span> </h6>
            </div>
        </div>
    )
}
function Productdetails({ items }) {
    const { status, product: { id, category, name, image, price } } = items;
    return (
        //add stytle here for product section 
        <div className='product-page-wrap container'>
            <div className='product-page'>
                <div className='left'>
                    <div>
                        <Link to={`/shop/${category.id}/product/${id}`}>
                            <img style={{
                                height: '150px',
                                width: '150px'
                            }} src={process.env.REACT_APP_BASE_URL + image[0].image} alt={name} />
                        </Link>
                    </div>
                    <div>
                        <Link to={`/shop/${category.id}/product/${id}`}>

                            <h5>
                                {name}
                            </h5>
                        </Link>
                        <div>Status:{status}</div>
                        <div>Price:{price}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function OrderproductDetails({ user }) {
    let { prodID } = useParams();
    Tabtitle('FAB | Orders Details')
    const banner = useBannerImages('order_details_page')
    const axiosPrivate = useAxiosPrivate();
    const [items, setItems] = useState([]);
    useEffect(() => {
        axiosPrivate.get(`/api/v1/order/order-details/${prodID}/`)
            .then(response => {
                setItems(response.data[0])
            })
            .catch(error => {
                throw (error)
            })
    }, [])


    // const { id, order, product, quantity, status } = item;

    return (
        <>
            <div className="breadcrumb_wrapper"
                style={{
                    minHeight: "250px",
                    backgroundImage: `url(${banner[0]?.image_or_video})`,
                }}
            >
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Order Details</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> &nbsp;ordered product</li>
                    </ul>
                </div> */}
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-12  my-3">
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                            <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                            <span className='breadcrum-width-dot'>Ordered Product </span>
                        </p>
                    </div>
                </div>
            </div>
            <div>{
                items.length !== 0 ?
                    <>
                        <div>
                            <Orderdetails items={items} />

                        </div>
                        <div>
                            < Productdetails items={items} />
                        </div>
                    </>
                    :
                    <p>Loading...</p>
            }
            </div>

        </>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.shop.user
    }
}
export default connect(mapStateToProps)(OrderproductDetails)


