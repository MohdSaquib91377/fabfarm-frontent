import { FaSpinner } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Verifyotp = (
    {
        handleBackButton,
        state,
        handleOTPSubmit,
        formErrors,
        formValues,
        resendCounter,
        loader,
        handleResendOtp,
        resendOtpLoader,
        handleChange
    }) => {

    return (
        <div className={state ? 'signup_form_section' : 'disabled'}>
            <button
                style={{
                    position: 'absolute',
                    top: '30px',
                    left: '40px',
                }}
                type='button'
                onClick={handleBackButton}
            ><FontAwesomeIcon icon={faCircleArrowLeft} /> Back</button>
            <h4>Verify OTP</h4>
            <img src="/images/clv_underline.png" alt="verifyimage" />
            <form onSubmit={handleOTPSubmit}>
                <div className="form_block">
                    <input type="text" name='otp' value={formValues.otp} onChange={handleChange} className="form_field" placeholder="OTP" autoComplete='off' />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <p>{formErrors.otp}</p>
                    {
                        resendCounter !== 0 ?
                            <span>Resend OTP in {resendCounter} sec</span>
                            :
                            <button onClick={handleResendOtp}>{resendOtpLoader ? <FaSpinner icon="spinner" className="spinner" /> : 'Resend OTP'}</button>
                    }
                </div>
                <button type='submit' className="clv_btn">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'Verify'}</button>
            </form>
        </div>
    )
}

export default Verifyotp