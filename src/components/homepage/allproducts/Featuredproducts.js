import axios from '../../API/axios';
import React, { useEffect, useState } from 'react'
import Carouselfeatured from './Carouselfeatured';
import './product.css'
import { Link } from 'react-router-dom';
const Featuredproducts = () => {

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
    console.log(featuredproducts)
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
                                    <button>View more</button>
                                </Link></div>
                            <Carouselfeatured products={products} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Featuredproducts