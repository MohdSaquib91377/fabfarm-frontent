import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'

const Bankaccountsetting = ({ profileState }) => {
  const axiosPrivate = useAxiosPrivate();
  const initialValues = {
    ifsc_code: '',
    account_number: '',
    confirm_account_number: '',
    account_holder_name: '',
    phone_number: '',
    reason: '',
    order:'',
    order_item: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [editState, setEditState] = useState(false)
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
    setFormErrors({})
    setEditState(false)
  }
  const validateCodReturnForm = (values) => {
    const errors = {};
    const regexIFSCCODE = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    const regexAccountNumber = /^[0-9]{9,18}/;
    const regexName = /^[A-Za-z ]+$/;
    const regexmobile = /^([+]\d{2})?\d{10}$/;

    if (!values.ifsc_code) {
      errors.ifsc_code = 'IFSC CODE is required!'
    } else if (!regexIFSCCODE.test(values.ifsc_code)) {
      errors.ifsc_code = 'Enter a valid IFSC CODE'
    }

    if (!values.account_number) {
      errors.account_number = 'Account number is required!'
    } else if (!regexAccountNumber.test(values.account_number)) {
      errors.account_number = 'Enter a valid account number'
    }

    if (!values.confirm_account_number) {
      errors.confirm_account_number = 'Confirm account number is required!'
    } else if (values.account_number !== values.confirm_account_number) {
      errors.confirm_account_number = 'Account number and confirm account number does not match'
    }

    if (!values.account_holder_name) {
      errors.account_holder_name = 'Account holder name is required!'
    } else if (!regexName.test(values.account_holder_name)) {
      errors.account_holder_name = 'Enter a valid account holder name'
    }

    if (!values.phone_number) {
      errors.phone_number = 'Phone number is required!'
    } else if (!regexmobile.test(values.phone_number)) {
      errors.phone_number = 'Enter a valid phone number'
    }

    if (!values.reason) {
      errors.reason = 'Reason is required!'
    }

    return errors
  }

  useEffect(()=>{
    let isMounted = true;
        const controller = new AbortController();
        const getBankAccountDetails = async () => {
            try {
                const response = await axiosPrivate.get(`/api/v1/order/cod-request-refund/`)
                console.log(response)
                setFormValues(response.data[0])
            } catch (error) {
                throw error
            }
        }
        if (isMounted && !editState) {
            getBankAccountDetails();
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
  },[])
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsSubmit(false)
      axiosPrivate.patch(`/api/v1/order/cod-request-refund/${formValues.order_item}/`, formValues)
        .then(() => {

        })
        .catch(error => { throw (error) })
    }
  })
  return (
    <div className={profileState === 'Payment' ? 'tab-pane fade show active' : 'tab-pane fade '}>
      <div className="my-account-dashboard account-wrapper">
        <div
          className='HeadingsProfileEdit'>
          <h4 className="account-title">Account Details</h4>
          {
            !editState
            &&
            <button
              className='exitButtonProfile'
              onClick={() => setEditState(true)}
            >
              Edit
            </button>
          }
        </div>
        {editState ?
          <form onSubmit={handleSubmit} >
            <div className="d-flex flex-wrap">
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='ifsc_code'
                  placeholder='IFSC CODE'
                  value={formValues.ifsc_code}
                  onChange={handleChange}
                />
                <p>{formErrors.ifsc_code}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='account_number'
                  placeholder='Account number'
                  value={formValues.account_number}
                  onChange={handleChange}
                />
                <p>{formErrors.account_number}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='confirm_account_number'
                  placeholder='Confirm account number'
                  value={formValues.confirm_account_number}
                  onChange={handleChange}
                />
                <p>{formErrors.confirm_account_number}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='account_holder_name'
                  placeholder='Account holder name'
                  value={formValues.account_holder_name}
                  onChange={handleChange}
                />
                <p>{formErrors.account_holder_name}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='phone_number'
                  placeholder='Phone number'
                  value={formValues.phone_number}
                  onChange={handleChange}
                />
                <p>{formErrors.phone_number}</p>
              </div>
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
          :
          <form>
            <div className="d-flex flex-wrap">
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='ifsc_code'
                  placeholder='IFSC CODE'
                  value={formValues.ifsc_code}
                  disabled
                />
                <p>{formErrors.ifsc_code}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='account_number'
                  placeholder='Account number'
                  value={formValues.account_number}
                  disabled
                />
                <p>{formErrors.account_number}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='confirm_account_number'
                  placeholder='Confirm account number'
                  value={formValues.confirm_account_number}
                  disabled
                />
                <p>{formErrors.confirm_account_number}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='account_holder_name'
                  placeholder='Account holder name'
                  value={formValues.account_holder_name}
                  disabled
                />
                <p>{formErrors.account_holder_name}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='phone_number'
                  placeholder='Phone number'
                  value={formValues.phone_number}
                  disabled
                />
                <p>{formErrors.phone_number}</p>
              </div>
              <div className="col-md-6 col-12 form-box__single-group">
                <input
                  name='reason'
                  placeholder='Reason'
                  value={formValues.reason}
                  disabled
                />
                <p>{formErrors.reason}</p>
              </div>
            </div>
          </form>
        }
      </div>
    </div>
    )
}

export default Bankaccountsetting