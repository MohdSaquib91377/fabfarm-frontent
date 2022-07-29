import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useBannerImages from '../../hooks/useBannerImages'
import Tabtitle from '../../pages/Tabtitle'

const Orderlist = ({ user }) => {
    Tabtitle('FAB | Order List')
    const banner = useBannerImages('orderlist')
    const [getOrder, setGetOrder] = useState(false)
    const [items, setItems] = useState([])
    const axiosPrivate = useAxiosPrivate();
    const cancelOrder = (id) => {
        axiosPrivate.put(`/api/v1/order/order-cancel/${id}/`)
            .then((response) => {
                setGetOrder(!getOrder)
            })
            .catch(error => { throw (error) })
    }
    useEffect(() => {
        const fetchOrderList = () => {
            axiosPrivate.get('/api/v1/order/place-order/')
                .then(response => {
                    setItems(response.data)
                })
                .catch(error => {
                    throw (error)
                })
        }
        fetchOrderList()
    }, [user, getOrder])
    const orderList = items.map((data, i) => {
        console.log(data)
        const { id, product: { name, image }, order, price, quantity, status } = data;
        return (

            <div key={i} className="order_list_top" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center'
            }}>
                <div style={{
                    height: '100px',
                    width: '100px'
                }}>
                    <Link to={`/orderproductdetails/${order}`}>
                        <img src={process.env.REACT_APP_BASE_URL + image[0].image} alt={name} />
                    </Link>
                </div>
                <Link to={`/orderproductdetails/${order}`}><h6>{name}</h6></Link>
                <h6>order id : {order}</h6>
                <h6>price: {price}</h6>
                <h6>quantity: {quantity}</h6>
                <h6>status: {status}</h6>
                {
                    status !== "Cancel" ?
                        <button onClick={() => cancelOrder(id)}>{status === 'Delivered' ? 'Return' : 'Cancel'}</button> : undefined
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
                                <h3>order list</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> &nbsp;order list</li>
                    </ul>
                </div>
            </div>

            <div className='p-3'>

                <div className='box-shadow-adding' style={{
                    position: 'relative',
                    top: '50px',
                    marginBottom: '280px',
                    width: 'auto'
                }}>
                    {orderList}
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.shop.user
    }
}
export default connect(mapStateToProps)(Orderlist)