import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useBannerImages from '../../hooks/useBannerImages'
import Tabtitle from '../../pages/Tabtitle'
import Codreturnmodal from './Codreturnmodal'
import Confirmationmodal from './Confirmationmodal'
import Razorpayreturnmodel from './Razorpayreturnmodel'

const Orderlist = ({ user }) => {
    Tabtitle('FAB | Order List')
    const banner = useBannerImages('orderlist')
    const orderPaymentMode = useRef();
    const orderStatus = useRef();
    const [getOrder, setGetOrder] = useState(false)
    const [items, setItems] = useState([])
    const axiosPrivate = useAxiosPrivate();
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const [confirm, setConfirm] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)
    const [codReturnForm, setCodReturnForm] = useState(false)
    const [razorpayReturnForm, setRazorpayReturnForm] = useState(false)
    const [cancleOrderItemID, setCancleOrderItemID] = useState(null)
    const cancelOrder = (id, payment_mode, status) => {
        setOpenConfirmModal(true)
        setCancleOrderItemID(id);
        orderPaymentMode.current = payment_mode
        orderStatus.current = status
        setIsSubmit(true)
    }
    useEffect(() => {
        if (confirm === 'yes' && isSubmit) {
            const funcCancelorder = () => {
                setIsSubmit(false)
                setOpenConfirmModal(false)
                setConfirm('')
                if (orderPaymentMode.current === 'Razorpay') {
                    setRazorpayReturnForm(true)
                } else if (orderPaymentMode.current === 'Cash on delivery' && orderStatus.current === 'Delivered') {
                    setCodReturnForm(true)
                } else (
                    axiosPrivate.put(`/api/v1/order/order-cancel/${cancleOrderItemID}/`)
                        .then(() => {
                            setGetOrder()
                        })
                        .catch(error => { throw (error) })
                )
            }
            funcCancelorder()
        }
    })


    useEffect(() => {
        const fetchOrderList = () => {
            setLoader(true)
            axiosPrivate.get('/api/v1/order/place-order/')
                .then(response => {
                    setItems(response.data)
                    setLoader(false)
                })
                .catch(error => {
                    setLoader(false)
                    throw (error)
                })
        }
        fetchOrderList()
    }, [user, getOrder])
    const orderList = items.map((data, i) => {
        const { id, product: { name, image }, order, price, quantity, status, payment_mode } = data;
        return (

            <div key={i} className="order_list_top orderListTopMain">
                <div style={{
                    height: '100px',
                    width: '100px',
                    overflow: 'hidden'
                }}>
                    <Link to={`/orderproductdetails/${id}`}>
                        <img src={process.env.REACT_APP_BASE_URL + image[0].image} alt={name} />
                    </Link>
                </div>
                <Link to={`/orderproductdetails/${id}`}><h6>{name}</h6></Link>
                <h6>Order Id : {order}</h6>
                <h6>Price: <FontAwesomeIcon icon={faIndianRupee} /> {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Status: {status}</h6>
                {
                    status !== 'Cancelled'
                        && status !== 'Refunded'
                        && status !== 'Refund In Progress'
                        && status !== 'Refund Failed'
                        && status !== 'Request Refund'
                        && status !== 'Completed'
                        ?

                        <button className='buttonViewMore delete-button' onClick={() => cancelOrder(id, payment_mode, status)}>{status === 'Delivered' ? 'Return' : 'Cancel'}</button>
                        :
                        <button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                }
            </div>

        )
    })

    return (
        <>
            <div className="breadcrumb_wrapper"
                style={{
                    minHeight: '250px',
                    backgroundImage: `url(${banner[0]?.image_or_video})`
                }}
            >
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Order List</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row pl-md-3">
                    <div className="col-12  my-3">
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                            <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                            <span className='breadcrum-width-dot'>Order List  </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className='p-3'>

                    <div className='box-shadow-adding' style={{
                        position: 'relative',
                        marginBottom: '280px',
                        width: 'auto',
                        overflowX: 'auto',
                    }}>
                        {
                            loader ?
                                <div>
                                    Loading...
                                </div>
                                :
                                <>
                                    <div className='text-center py-4'>

                                        {items.length !== 0 ?
                                            orderList
                                            :
                                            'No Items'}
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <Confirmationmodal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}
                setConfirm={setConfirm}
            />
            <Codreturnmodal
                codReturnForm={codReturnForm}
                setCodReturnForm={setCodReturnForm}
                setGetOrder={() => setGetOrder(!getOrder)}
                orderItemID={cancleOrderItemID}
                setCancleOrderItemID={() => setCancleOrderItemID(null)}
            />
            <Razorpayreturnmodel
                razorpayReturnForm={razorpayReturnForm}
                setRazorpayReturnForm={setRazorpayReturnForm}
                setGetOrder={() => setGetOrder(!getOrder)}
                orderItemID={cancleOrderItemID}
                setCancleOrderItemID={() => setCancleOrderItemID(null)}
            />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.shop.user
    }
}
export default connect(mapStateToProps)(Orderlist)