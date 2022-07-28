import React, { useState } from 'react'
import Changepasswordmodal from './Changepasswordmodal'
const Emailchanges = () => {
    const [editState, setEditState] = useState(false)
    const [changeState, setChangeState] = useState(false)
    return (
        <>
            <h4 className="account-title">Email Address</h4>
            <button onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
            <button onClick={() => setChangeState(true)}>Change Password</button>
            <div className="account-details">
                <div className="row">
                    {
                        editState ?
                            <div className="col-md-12">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Email address" value='' />
                                </div>
                            </div>
                            :
                            <div className="col-md-12">
                                <div className="form-box__single-group">
                                    <input type="text" disabled placeholder="Email address" value='naurot@gmail.com' />
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Changepasswordmodal changeState={changeState} setChangeState={() => setChangeState(false)} />
        </>
    )
}

export default Emailchanges