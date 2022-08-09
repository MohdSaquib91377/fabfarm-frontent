import { FaSpinner } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Registoruser = ({ state, formValues, formErrors, handleSubmit, handleChange, loader }) => {

    const [seePassword, setSeePassword] = useState(false)

    return (
        <div className={state ? 'disabled' : 'signup_form_section'}>
            <h4>create account</h4>
            <img src={process.env.PUBLIC_URL + "/images/clv_underline.png"} alt="Regitsterimage" />
            <form onSubmit={handleSubmit}>
                <div className="form_block">
                    <input type="text" name='name' value={formValues.name} onChange={handleChange} className="form_field" placeholder="Name" autoComplete='off' />
                </div>
                <p>{formErrors.name}</p>
                <div className="form_block">
                    <input type="text" name='email' value={formValues.email} onChange={handleChange} className="form_field" placeholder="Email" autoComplete='off' />
                </div>
                <p>{formErrors.email}</p>
                <div className="form_block" style={{
                    position: 'relative'
                }}>
                    <input type={seePassword ? 'text' : 'password'} name='password' value={formValues.password} onChange={handleChange} className="form_field" placeholder="Password" autoComplete='off' />
                    <FontAwesomeIcon style={{
                        position: 'absolute',
                        right: '10px',
                        top: '16px'
                    }}
                        onMouseDown={() => setSeePassword(true)}
                        onMouseUp={() => setSeePassword(false)}
                        onTouchStart={() => setSeePassword(true)}
                        onTouchEnd={() => setSeePassword(false)}
                        icon={seePassword ? faEyeSlash : faEye} />
                </div>
                <p>{formErrors.password}</p>
                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'sign up'}</button>
            </form>

            {/* <div className="social_button_section">
                <a href="#" className="fb_btn">
                    <span><img src={process.env.PUBLIC_URL + "/images/fb.png"} alt="image" /></span>
                    <span>facebook</span>
                </a>
                <a href="#" className="google_btn">
                    <span><img src={process.env.PUBLIC_URL + "/images/google.png"} alt="image" /></span>
                    <span>google+</span>
                </a>
            </div> */}
        </div>
    )
}

export default Registoruser