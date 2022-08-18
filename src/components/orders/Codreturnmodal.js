import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Bankaccountsetting from '../profile/bank account setting/Bankaccountsetting';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};
const Codreturnmodal = ({ codReturnForm, setCodReturnForm, setGetOrder, orderItemID, setCancleOrderItemID }) => {

    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        bank_id: '',
        reason: '',
        order_item: ''
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
        setFormErrors(validateCodReturnForm(formValues))
        setIsSubmit(true)
    }
    const handleClose = () => {
        setFormValues(initialValues)
        setFormErrors({})
        setCodReturnForm(false)
        setCancleOrderItemID()
    }
    const validateCodReturnForm = (values) => {
        const errors = {};
        if (!values.id) {
            errors.id = 'Fill Account Details'
        }
        if (!values.reason) {
            errors.reason = 'Reason is required!'
        }

        return errors
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getBankAccountDetails = async () => {
            try {
                const response = await axiosPrivate.get(`/api/v1/order/cod-create-bank/`)
                setFormValues({ ...initialValues, bank_id: response?.data[0]?.id })
            } catch (error) {
                throw error
            }
        }
        if (isMounted) {
            getBankAccountDetails();
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])


    useEffect(() => {
        setFormValues({ ...formValues, order_item: orderItemID })
    }, [orderItemID])

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false)
            axiosPrivate.post(`/api/v1/order/cod-request-refund/`, formValues)
                .then(() => {
                    setGetOrder()
                    setCodReturnForm(false)
                })
                .catch(error => { throw (error) })
        }
    })
    return (
        <div>
            <Modal
                open={codReturnForm}
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
                    <Bankaccountsetting profileState='Payment' />
                    <p style={{
                        color: 'red'
                    }}>{formErrors.bank_id}</p>
                    <form onSubmit={handleSubmit} >
                        <div className="d-flex flex-wrap">
                            <div className="col-md-6 col-12 form-box__single-group">
                                <input
                                    name='reason'
                                    placeholder='Reason'
                                    value={formValues.reason}
                                    onChange={handleChange}
                                />
                                <p>{formErrors.reason}</p>
                            </div>
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

export default Codreturnmodal