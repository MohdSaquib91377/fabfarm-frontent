import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useBannerImages from '../../hooks/useBannerImages';
import Tabtitle from '../../pages/Tabtitle';

const Wishlist = () => {
    Tabtitle('FAB | Wish List')
    const banner = useBannerImages('wishlist')
    const axiosPrivate = useAxiosPrivate();
    const [wishlistItems, setWishlistItems] = useState([])
    const [onclickRemove, setOnlickRemove] = useState(false);
    const removeItem = (id) => {
        axiosPrivate.delete(`/api/v1/wishlist/wishlist/add-to-wishlist/`, {
            data: {
                product_id: id
            }
        })
            .then(
                () => {
                    setOnlickRemove(!onclickRemove);
                }
            )
            .catch(error => {
                throw error;
            })
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
    }, [onclickRemove])
    const wishlist = wishlistItems.map((data, i) => {
        const { product: { id, name, image, price, quantity, } } = data;
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

                    <img src={process.env.REACT_APP_BASE_URL + image[0].image} alt={name} />

                </div>
                <h6>{name}</h6>
                {/* <h6>price: {price}</h6> */}
                <h6>₹{price}</h6>
                <h6>quantity: {quantity}</h6>

                <button onClick={() => removeItem(id)}><FontAwesomeIcon color='red' icon={faTrash} /></button>
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
            <div className='p-3'>

                <div className='parent-wishlist' style={{
                    position: 'unset',
                    margin: '50px auto',
                    top: '200px',
                    overflow: 'auto',
                    width: 'auto'
                }}>
                    {
                        wishlistItems.length !== 0 ?
                            wishlist
                            :
                            "No items"
                    }
                </div>
            </div>
        </>
    )
}

export default Wishlist