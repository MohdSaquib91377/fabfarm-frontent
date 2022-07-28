import React from 'react'
import { Link } from 'react-router-dom'

const Weare = () => {
    return (
        <div className="garden_about_wrapper clv_section">
            <div className="container">
                <div style={{ position: 'relative', top: '20px', marginBottom:'100px' }} className="garden_about_section">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="garden_about_image">
                                <img src={process.env.PUBLIC_URL + "/images/hands-g0eecfe8b7_640.jpg"} alt="" className='w-100'/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="garden_about_content pageTitle">
                                <h1>We Are Nice People With A <br />Lot Of Experience.</h1>
                                <h6>Farming is not just for growing crops, it is for the cultivation of human beings !!!</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod temponcididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatiomco laboris nisi ut aliquip ex ea commodo consequat...</p>

                                <div className="garden_contact_section">
                                    <Link to='/aboutus' className="clv_btn">more details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weare