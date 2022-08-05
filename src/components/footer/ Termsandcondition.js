import React from 'react'
import { Link } from 'react-router-dom'
import useBannerImages from '../../hooks/useBannerImages'
import Tabtitle from '../../pages/Tabtitle'

const Termsandcondition = () => {
    Tabtitle('FAB | Terms and Condition')
    const banner = useBannerImages('terms_and_condition')
    return (
        <>
            <div className="breadcrumb_wrapper" style={{
                minHeight: '250px',
                backgroundImage: `url(${banner[0]?.image_or_video})`
            }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="breadcrumb_inner">
                                <h3>Term And Condition</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--About Section--> */}
            <div className="container ">
                <div className="row">
                    <div className="col-12  my-3">
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                            <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                            <span className='breadcrum-width-dot'>Terms And Condition</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Termsandcondition