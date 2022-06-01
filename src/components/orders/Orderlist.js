import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const Orderlist = ({ user }) => {
    const [items, setItems] = useState([])
    const axiosPrivate = useAxiosPrivate();
    const cancelOrder = (order) => {
        axiosPrivate.put(`/api/v1/order/order-cancel/${order}/`)
            .then(response => console.log(response))
            .catch(response => console.log(response))
    }
    useEffect(() => {
        const fetchOrderList = () => {
            axiosPrivate.get('/api/v1/order/place-order/')
                .then(response => {
                    setItems(response.data)
                })
                .catch(response => {
                    console.log(response)
                })
        }
        fetchOrderList()
    }, [user])
    const orderList = items.map((data, i) => {
        const { product: { id, name, image }, order, price, quantity, status } = data;
        return (
            <div key={i} className="order_list_top" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center'
            }}>
                <Link to={`/orderproductdetails/${order}`}><h6>{name}</h6></Link>
                <div style={{
                    height: '100px',
                    width: '100px'
                }}>
                    <Link to={`/orderproductdetails/${order}`}>
                        <img src={process.env.REACT_APP_BASE_URL + image[0].image} alt={name} />
                    </Link>
                </div>
                <h6>order id : {order}</h6>
                <h6>price: {price}</h6>
                <h6>quantity: {quantity}</h6>
                <h6>status: {status}</h6>

                <button onClick={() => cancelOrder(order)}>Cancle Order</button>
            </div>
        )
    })
    return (
        <>
            <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
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
            <div style={{
                position: 'relative',
                top: '200px',
                height: '100vh',
                width: 'auto'
            }}>
                {orderList}
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