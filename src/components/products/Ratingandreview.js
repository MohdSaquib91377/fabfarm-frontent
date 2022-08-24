import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Ratingandreview = ({ currentItem }) => {
    const { product_avg_ratings, ratings, total_ratings_reviews, rating_bar } = currentItem
    console.log(ratings)
    return (
        <div>
            <span className='product-var__text m-t-15'>Ratings {'&'} Reviews</span>
            <div className='rating-section'>
                <div className='rating-text'>
                    {
                        product_avg_ratings !== null &&
                        <div className='d-flex '>
                            <h1>{product_avg_ratings}</h1>
                            <div className='m-t-10'>
                                <FontAwesomeIcon size='xl' icon={faStar} />
                            </div>
                        </div>
                    }
                    <p>
                        {total_ratings_reviews}
                    </p>
                </div>
                <div className='rating-chart'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            5<FontAwesomeIcon size='xs' icon={faStar} />
                        </div>
                        <div className='rating-status-bar'>
                            <span style={{
                                backgroundColor: '#388e3c',
                                width: '100%'
                            }}></span>
                        </div>
                        <di>
                            1
                        </di>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            4<FontAwesomeIcon size='xs' icon={faStar} />
                        </div>
                        <div className='rating-status-bar'>
                            <span style={{
                                backgroundColor: '#388e3c',
                                width: '40%'
                            }}></span>
                        </div>
                        <di>
                            1
                        </di>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            3<FontAwesomeIcon size='xs' icon={faStar} />
                        </div>
                        <div className='rating-status-bar'>
                            <span style={{
                                backgroundColor: '#388e3c',
                                width: '20%'
                            }}></span>
                        </div>
                        <di>
                            1
                        </di>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            2<FontAwesomeIcon size='xs' icon={faStar} />
                        </div>
                        <div className='rating-status-bar'>
                            <span style={{
                                backgroundColor: '#FF9F00',
                                width: '60%'
                            }}></span>
                        </div>
                        <di>
                            1
                        </di>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            1<FontAwesomeIcon size='xs' icon={faStar} />
                        </div>
                        <div className='rating-status-bar'>
                            <span style={{
                                backgroundColor: '#FF6161',
                                width: '0%'
                            }}></span>
                        </div>
                        <di>
                            1
                        </di>
                    </div>
                </div>
            </div>
            <div className='m-t-15'>
                {
                    ratings.map((content, index) => {
                        const { comment, created_at, rating, user } = content;
                        return (
                            <div className='product-var review-section' key={index}>
                                <div className='rating m-t-10'>
                                    {rating}
                                    <FontAwesomeIcon size='xs' icon={faStar} />
                                </div>
                                <div>{comment}</div>
                                <div className='d-flex'>
                                    <p className='name'>{user}</p>
                                    <p className='name'>{created_at}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ratingandreview