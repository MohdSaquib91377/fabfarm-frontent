import axios from '../../API/axios';
import React, { useEffect, useState } from 'react'
import Carouselfeatured from './Carouselfeatured';
import './product.css'
import { Link } from 'react-router-dom';
import { setProducts } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';
const Featuredproducts = ({ setProducts }) => {

    const [featuredproducts, setFeaturedProducts] = useState([]);
    const [allCatProducts, setAllCatProducts] = useState([]);
    useEffect(() => {
        const fecthFeaturedProducts = async () => {
            try {
                const res = await axios.get('/api/v1/store/category-product/')
                setFeaturedProducts(res.data)
            } catch (error) {
                console(error)
            }
        }
        fecthFeaturedProducts();
    }, [])
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            featuredproducts.map((content) => {
                const { products } = content;
                products.map(items => {
                    setAllCatProducts(allCatProducts => [...allCatProducts, items])
                })
            })
            setProducts(allCatProducts)
        }
        return () => {
            mounted = false;
        }
    }, [featuredproducts])
    console.log(allCatProducts)
    return (
        <div className="garden_about_wrapper clv_section">
            <div className="container pageTitle">
                {featuredproducts.map((allproducts, i) => {
                    const { id, name, products } = allproducts;
                    return (
                        <div key={i} style={{
                            marginTop: '30px'
                        }}>
                            <h3>{name}</h3>
                            <Carouselfeatured catID={id} products={products} />
                            <Link style={{
                                position: 'relative',
                                float: 'right'
                            }} to={`/shop/${id}`}>
                                <button onClick={() => setProducts(products)}>View more</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (products) => dispatch(setProducts(products))
    }
}

export default connect(null, mapDispatchToProps)(Featuredproducts)