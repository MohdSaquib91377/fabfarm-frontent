import React, { useState } from 'react'

const Mobilechange = () => {
    const [editState, setEditState] = useState(false)
    return (
        <>
            <h4 className="account-title mt-3">Mobile/E-mail</h4>
            <button onClick={() => setEditState(!editState)}>{editState ? 'Cancel' : 'Edit'}</button>
            <div className="account-details posrelProfile">
                <div className="row">
                    {
                        editState ?
                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Mobile/E-mail"  />
                                </div>
                                
                                <button className='submitProfileBtn2'>Save</button>
                            </div>


                            :

                            <div className="col-md-12 my-3">
                                <div className="form-box__single-group">
                                    <input type="text" placeholder="Mobile/E-mail" disabled value='99999999' />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Mobilechange