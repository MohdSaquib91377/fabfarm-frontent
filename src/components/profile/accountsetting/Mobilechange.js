import React, { useState } from 'react'

const Mobilechange = () => {
    const [editState, setEditState] = useState(false)
    return (
        <>
        <div className='HeadingsProfileEdit'>

            <h4 className="account-title mt-3">Mobile Number</h4>
            <button onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
        </div>
            <div className="account-details posrelProfile">
                <div className="row">
                    {
                        editState ?
                        <>
                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Mobile"  />
                                </div>
                                
                            </div>
                            <div className='col-md-6 my-3'>
                                <button className='submitProfileBtn2'>Save</button>

                            </div>


                        </>
                            :

                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Mobile" disabled value='99999999' />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Mobilechange