import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Bankaccountsetting from '../profile/bank account setting/Bankaccountsetting';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Addnewaccount from './Addnewaccount';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 800,
    width:'100%',
    bgcolor: 'background.paper',
    border: '0',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    maxHeight:"80vh",
    overflow:"auto",
};
const Codreturnmodal = ({ codReturnForm, setCodReturnForm, setGetOrder, orderItemID, setCancleOrderItemID }) => {

    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        fund_accounts: '',
        order_item: ''
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [accountDetails, setAccountDetails] = useState([])
    const [fetchAccountDetails, setFetchAccountDetails] = useState(false)
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
        if (!values.fund_accounts) {
            errors.fund_accounts = 'Add Account Details'
        }
        return errors
    }
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getBankAccountDetails = async () => {
            try {
                const response = await axiosPrivate.get(`/api/v1/order/razorpay/create-fund-account/`)
                setAccountDetails(response?.data)
                setFormValues({ ...formValues, fund_accounts: response?.data[0]?.id })
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
    }, [fetchAccountDetails])


    useEffect(() => {
        setFormValues({ ...formValues, order_item: orderItemID })
    }, [orderItemID])

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false)
            axiosPrivate.post(`/api/v1/order/request-refund-item/`, formValues)
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
                <Box sx={style} >
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
                    <div style={{
                        textAlign: 'left',
                    }}>
                        <Addnewaccount fetchAccountDetails={fetchAccountDetails} setFetchAccountDetails={setFetchAccountDetails} />
                        {
                            accountDetails.length !== 0 &&
                            <div
                                style={{
                                    border: '1px solid #ebebeb',
                                    borderRadius: '3px',
                                    padding: '10px 20px',
                                    width: '100%',
                                    outline: 'none',
                                    fontSize: '14px',
                                }}
                            >

                                <FormControl className='formBankAccount' style={{width:'100%'}}>
                                    {/* <FormLabel >Account Details</FormLabel> */}
                                    <RadioGroup
                                        name="fund_accounts"
                                        value={formValues.fund_accounts}
                                        onChange={handleChange}
                                    >
                                        {accountDetails.map((details, index) => {
                                            const { id, name, ifsc, account_number } = details;
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        padding: '10px 20px',
                                                        width: '100%',
                                                        outline: 'none',
                                                        fontSize: '14px',
                                                        display: 'flex'
                                                    }}
                                                >
                                                    <FormControlLabel value={id} control={<Radio />} />
                                                    
                                                    <div className={parseInt(formValues.fund_accounts) === id ? 'accountDetailIndividual activeIndiividal':'accountDetailIndividual' }>
                                                        <h3 style={{fontWeight:"600"}}>{name}</h3>
                                                        <p className='m-0'>{ifsc}</p>
                                                        <p className='m-0'>{account_number}</p>
                                                    </div>
                                                    {/* <input type="radio"  name='indi' id={`abc${id}`} value={id} checked/>
                                                    <label className='accountDetailIndividual' htmlFor={`abc${id}`}>
                                                        <h3 style={{fontWeight:"600"}}>{name}</h3>
                                                        <p>{ifsc}</p>
                                                        <p>{account_number}</p>
                                                    </label> */}
                                                </div>
                                            )
                                        })}
                                    </RadioGroup>
                                    {/* <p style={{
                                    color: 'red'
                                }}>{formErrors.fund_accounts}</p> */}
                                </FormControl>
                            </div>
                        }
                    </div>
                    <p style={{
                        color: 'red',
                        textAlign:'left',
                        marginLeft:'30px'
                    }}>{formErrors.fund_accounts}</p>
                    <form onSubmit={handleSubmit} >
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