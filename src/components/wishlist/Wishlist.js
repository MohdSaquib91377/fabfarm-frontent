import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import Tabtitle from '../../pages/Tabtitle';

const Wishlist = () => {
    Tabtitle('FAB | Wish List')
    const axiosPrivate = useAxiosPrivate();
    const [wishlistItems, setWishlistItems] = useState([])
    const removeItem = (id) => {
        axiosPrivate.delete(`/api/v1/wishlist/wishlist/add-to-wishlist/`, {
            data:{
                product_id: id
            }
        })
            .then(response => console.log(response))
            .catch(response => console.log(response))
    }
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getWishList = async () => {
            try {
                const response = await axiosPrivate.get('/api/v1/wishlist/wishlist/add-to-wishlist/')
                isMounted && setWishlistItems(response.data)
            } catch (error) {
                throw error
            }
        }
        getWishList();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])
    const wishlist = wishlistItems.map((data, i) => {
        const { product: { id, name, image, price, quantity, } } = data;
        return (
            <div key={i} className="order_list_top" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center'
            }}>
                <h6>{name}</h6>
                <div style={{
                    height: '100px',
                    width: '100px'
                }}>

                    <img src={process.env.REACT_APP_BASE_URL + image[0].image} alt={name} />

                </div>
                <h6>price: {price}</h6>
                <h6>quantity: {quantity}</h6>

                <button onClick={() => removeItem(id)}>Remove</button>
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
                                <h3>Wish list</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> &nbsp;Wish list</li>
                    </ul>
                </div>
            </div>
            <div className='parent-wishlist' style={{
                position: 'unset',
                margin: '50px auto',
                top: '200px',
                minHeight: '100vh',
                width: 'auto'
            }}>
                {wishlist}
            </div>
        </>
    )
}

export default Wishlist