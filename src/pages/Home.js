import axios from '../components/API/axios';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import Tabtitle from './Tabtitle';
// import Servicestwo from '../components/homepage/Servicestwo';
const Banner = lazy(() => import('../components/homepage/Banner'))
const Services = lazy(() => import('../components/homepage/Services'))
const Counter = lazy(() => import('../components/homepage/Counter'))
const Weare = lazy(() => import('../components/homepage/Weare'))
const Featuredproducts = lazy(() => import('../components/homepage/allproducts/Featuredproducts'))
// const Testimonial = lazy(() => import('../components/homepage/Testimonial'))
// const Seeds = lazy(() => import('../components/homepage/topproducts/Seeds'))
// const Fertilizers = lazy(() => import('../components/homepage/topproducts/Fertilizers'))
// const Soils = lazy(() => import('../components/homepage/topproducts/Soils'))
const Home = () => {
    Tabtitle('Osty')          

    
    const [category, setCategory] = useState([])
    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            axios.get('/api/v1/store/category/')
                .then(response => {
                    setCategory(response.data)
                    window.scrollTo(0, 0)
                })
                .catch(error => {
                    if (error.code === 'ERR_NETWORK') {
                        alert(error.message)
                    }
                    throw error
                })
        }
        return () => {
            isMounted = false
        }
    }, [])
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Banner />
            </Suspense>
            <Suspense >
                <Services category={category} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Weare />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Featuredproducts />
            </Suspense>
            {/* <!--Shop--> */}

            {/* <Suspense fallback={<div>Loading...</div>}>
                <Seeds />
            </Suspense> */}
            {/* 
            <Suspense fallback={<div>Loading...</div>}>
                <Fertilizers />
            </Suspense> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Counter />
            </Suspense>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Soils />
            </Suspense> */}

            {/* <Suspense fallback={<div>Loading...</div>}>
                <Testimonial />
            </Suspense> */}
            {/* <Servicestwo category={category} /> */}


            {/* <!--Partner--> */}
            {/* <Partner /> */}
        </>
    )
}

export default Home