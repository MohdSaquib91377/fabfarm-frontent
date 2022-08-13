import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const Razorpayreturnmodel = ({ razorpayReturnForm, setRazorpayReturnForm, setGetOrder, orderItemID, setCancleOrderItemID }) => {
    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        reason: '',
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateRazorpayReturnForm(formValues))
        setIsSubmit(true)
    }
    const handleClose = () => {
        setFormValues(initialValues)
        setFormErrors({})
        setRazorpayReturnForm(false)
        setCancleOrderItemID()
    }
    const validateRazorpayReturnForm = (values) => {
        const errors = {};

        if (!values.reason) {
            errors.reason = 'Reason is required!'
        }

        return errors
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false)
            axiosPrivate.post(`/api/v1/payment/payment-refund/${orderItemID}/`, formValues)
                .then(() => {
                    setGetOrder()
                    setRazorpayReturnForm(false)
                })
                .catch(error => { throw (error) })
        }
    })

    return (
        <div>
            <Modal
                open={razorpayReturnForm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <button
                        type='button'
                        onClick={() => handleClose()}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '20px'
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <form onSubmit={handleSubmit} >
                            <div className="form-box__single-group">
                                <input
                                    name='reason'
                                    placeholder='Reason'
                                    value={formValues.reason}
                                    onChange={handleChange}
                                />
                                <p>{formErrors.reason}</p>
                            </div>
                        <div>
                            <Button
                                type='button'
                                variant="contained"
                                color="error"
                                sx={{ marginRight: 5 }}
                                onClick={() => handleClose()}
                            >Cancel</Button>
                            <Button
                                type='submit'
                                variant="contained"
                                color="success"
                            >submit</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>)
}
export default Razorpayreturnmodel