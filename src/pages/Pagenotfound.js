import React from 'react'
import { Link } from 'react-router-dom'
const Pagenotfound = () => {
    return (
        <div className="error_wrapper clv_section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-">
                        <div className="error_block">
                            <div className="error_image">
                                <h2>404</h2>
                            </div>
                            <div className="error_content">
                                <h3><span>oops...</span> page not found</h3>
                                <p>look like something was wrong we're working on it</p>
                                <Link className="clv_btn" to='/'>back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagenotfound