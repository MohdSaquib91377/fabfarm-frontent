import React, { useState } from 'react'
import Changepasswordmodal from './Changepasswordmodal'
const Emailchanges = () => {
    const [editState, setEditState] = useState(false)
    const [changeState, setChangeState] = useState(false)
    return (
        <>
            {/* <h4 className="account-title mt-3">Email Address</h4> */}
            <div className="account-details">
                {/* <button className='exitButtonProfile' onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button> */}
                <button onClick={() => setChangeState(true)}>Change Password</button>
                {/* <div className="row ">
                    {
                        editState ?
                            <div className="col-md-12 my-3">
                            <div className="form-box__single-group">
                                    <input type="text" placeholder="Email address"  />
                                </div>
                            </div>
                            :
                            <div className="col-md-12 my-3">
                            <div className="form-box__single-group">
                            <input type="text" disabled placeholder="Email address" value='naurot@gmail.com' />
                            </div>
                            </div>
                        }
                </div> */}
            </div>
            <Changepasswordmodal changeState={changeState} setChangeState={() => setChangeState(false)} />
        </>
    )
}

export default Emailchanges