import React, { useState } from 'react'

const Mobilechange = () => {
    const [editState, setEditState] = useState(false)
    return (
        <>
            <h4 className="account-title">Mobile Number</h4>
            <button onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
            <div className="account-details">
                <div className="row">
                    {
                        editState ?
                            <div className="col-md-12">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Mobile Number" value='' />
                                </div>
                                <button>Save</button>
                            </div>
                            :
                            <div className="col-md-12">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Mobile Number" disabled value='99999999' />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Mobilechange