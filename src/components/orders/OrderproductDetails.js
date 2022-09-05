import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Tabtitle from '../../pages/Tabtitle';
import useBannerImages from '../../hooks/useBannerImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Ratingandreviewmodal from './Ratingandreviewmodal';

const colors = {
    green: '#317b31',
    grey: '#a9a9a9'
}
export function Orderdetails({ items }) {
    const { payment_mode, order } = items;
    const { address: { address, alternate_number, city, country, full_name, landmark, locality, pincode, state } } = order;
    return (
        //add stytle here for address section 
        <div className='address-place container'>
            <div className='addresss-bg'>

                <h4> <b> Delivery Details</b></h4>
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
                    <b>Payment Mode: </b>
                    {payment_mode}

                </p>
                <p><b> Mobile:</b> <span>{alternate_number}</span> </p>

            </div>
        </div>
    )
}
function Productdetails({ items, setGetOrder, getOrder }) {
    const { status, product: { id, category, name, image, price }, order_item_rating } = items;
    const [ratingAndReviewState, setRatingAndReviewState] = useState(false)
    const [orderItem, setOrderItem] = useState(null)
    const stars = Array(5).fill(0);
    const handleRating = (id) => {
        setRatingAndReviewState(true)
        setOrderItem(id)
    }
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
                        <div> <b> Price: </b>₹{price.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')} </div>
                        <div>
                            <b>Status:</b>
                            <span>
                                {status}
                            </span>
                        </div>
                        <br />
                        <div></div>
                    </div>
                    {
                        status === 'Delivered' ?
                            <div>
                                {
                                    order_item_rating !== null &&
                                    <div>
                                        {
                                            stars.map((_, index) => {
                                                return (
                                                    <FontAwesomeIcon
                                                        style={{
                                                            padding: '5px',
                                                        }}
                                                        icon={faStar}
                                                        key={index}
                                                        size='sm'
                                                        color={parseInt(order_item_rating.ratings) > index ? colors.green : colors.grey}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                }
                                <button
                                    onClick={() => handleRating(items.id)}
                                >
                                    Rate {'&'} Review Product
                                </button>
                                <Ratingandreviewmodal
                                    order_item_rating={order_item_rating}
                                    ratingAndReviewState={ratingAndReviewState}
                                    setRatingAndReviewState={setRatingAndReviewState}
                                    setGetOrder={() => setGetOrder(!getOrder)}
                                    orderItem={orderItem}
                                    setOrderItem={() => setOrderItem(null)}
                                />
                            </div>
                            :
                            undefined
                    }
                </div>
            </div>
        </div>
    )
}

function OrderproductDetails() {
    let { prodID } = useParams();
    Tabtitle('FAB | Orders Details')
    const banner = useBannerImages('order_details_page')
    const axiosPrivate = useAxiosPrivate();
    const [items, setItems] = useState([]);
    const [getOrder, setGetOrder] = useState(false)
    useEffect(() => {
        axiosPrivate.get(`/api/v1/order/order-details/${prodID}/`)
            .then(response => {
                setItems(response.data[0])
            })
            .catch(error => {
                throw (error)
            })
    }, [getOrder])


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
                            < Productdetails items={items} setGetOrder={setGetOrder} getOrder={getOrder} />
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


