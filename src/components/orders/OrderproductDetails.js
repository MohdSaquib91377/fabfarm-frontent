import axios from '../API/axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';


export function Orderdetails({ items }) {

    const { order } = items;
    const { address, alternate_number, city, country, full_name, landmark, locality, message, payment_mode, pincode, state } = order;
    return (
        //add stytle here for address section 
        <p>
            {address},{alternate_number}, {city}, {country}, {full_name}, {landmark}, {locality}, {message}, {payment_mode}, {pincode}
            {state}
        </p>
    )
}
function Productdetails({ items }) {
    const { status, product: { name, description, image } } = items;
    return (
        //add stytle here for product section 
        <p>
            {name},
            {description},
            <div>
                <img style={{
                    height: '150px',
                    width: '150px'
                }} src={process.env.REACT_APP_BASE_URL + image[0].image} alt={name} />
            </div>
            <div>status:{status}</div>
        </p>
    )
}

function OrderproductDetails({ user }) {
    let { prodID } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`/api/v1/order/order-details/${prodID}/ `, {
            headers: {
                Authorization: `Bearer ${user.access}`
            }
        })
            .then(response => {
                setItems(response.data[0])
            })
            .catch(response => {
                console.log(response)
            })
    }, [])


    // const { id, order, product, quantity, status } = item;

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
                        <li> &nbsp;ordered product</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    {items.length !== 0 ?
                        <Orderdetails items={items} /> :
                        <p>Loading...</p>
                    }
                </div>
                <div>
                    {items.length !== 0 ?
                        < Productdetails items={items} />
                        :
                        <p>Loading...</p>
                    }
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
export default connect(mapStateToProps)(OrderproductDetails)


