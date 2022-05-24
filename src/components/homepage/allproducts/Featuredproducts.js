import axios from '../../API/axios';
import React, { useEffect, useState } from 'react'
import Carouselfeatured from './Carouselfeatured';
import './product.css'
import { Link } from 'react-router-dom';
import { setProducts } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';
const Featuredproducts = ({ setProducts }) => {

    const [featuredproducts, setFeaturedProducts] = useState([]);
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
    return (
        <div className="garden_about_wrapper clv_section">
            <div className="container">
                {featuredproducts.map((allproducts, i) => {
                    const { id, name, products } = allproducts;
                    return (
                        <div key={i} style={{
                            marginTop: '30px'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <h3>{name}</h3>
                                <Link to={`/shop/${id}`}>
                                    <button onClick={() => setProducts(products)}>View more</button>
                                </Link></div>
                            <Carouselfeatured products={products} />
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