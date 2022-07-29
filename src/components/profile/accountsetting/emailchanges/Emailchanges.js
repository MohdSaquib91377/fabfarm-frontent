import React, { useState } from 'react'
import Changepasswordmodal from './Changepasswordmodal'
const Emailchanges = () => {
    const [editState, setEditState] = useState(false)
    const [changeState, setChangeState] = useState(false)
    return (
        <>
            <button className='changePasswordProfile' onClick={() => setChangeState(true)}>Change Password</button>
            <div className='HeadingsProfileEdit'>

            <h4 className="account-title mt-3">Email Address</h4>
                <button className='exitButtonProfile' onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
                </div>

            <div className="account-details">
                <div className="row ">
                    {
                        editState ?
                        <>
                            <div className="col-md-6 my-3">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Email address"  />
                                </div>

                            </div>
                            <div className='col-md-6 my-3'>

                                <button className='submitProfileBtn2'>Save</button>
                            </div>
                        </>
                            :
                            <div className="col-md-6 my-3">
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