import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

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

const colors = {
    green: '#317b31',
    grey: '#a9a9a9'
}

const Ratingandreviewmodal = ({ ratingAndReviewState, setRatingAndReviewState, setGetOrder, order_item_rating, orderItem,setOrderItem }) => {
    const axiosPrivate = useAxiosPrivate();
    const initialValues = {
        id: '',
        rating: 0,
        comment: '',
        order_item: '',
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [hoverValue, setHoverValue] = useState(undefined)
    const stars = Array(5).fill(0);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    console.log(orderItem)
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateRatingAndReview(formValues))
        setIsSubmit(true)
    }
    const handleClose = () => {
        setFormValues(initialValues)
        setFormErrors({})
        setRatingAndReviewState(false)
    }
    const validateRatingAndReview = (values) => {
        const errors = {};

        return errors
    }

    useEffect(() => {
        setFormValues({ ...formValues, order_item: orderItem })
    },[orderItem])
    useEffect(() => {
        setFormValues({ ...formValues, ...order_item_rating })
    }, [order_item_rating])

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false)
            if (order_item_rating !== null) {
                axiosPrivate.patch(`/api/v1/rating-review/product-details/${formValues.id}/`, formValues)
                    .then(() => {
                        setFormValues(initialValues)
                        setRatingAndReviewState(false)
                        setOrderItem()
                        setGetOrder()
                    })
                    .catch(error => { throw (error) })
            } else {
                axiosPrivate.post(`/api/v1/rating-review/product/`, formValues)
                    .then(() => {
                        setFormValues(initialValues)
                        setRatingAndReviewState(false)
                        setOrderItem()
                        setGetOrder()
                    })
                    .catch(error => { throw (error) })
            }
        }
    })

    return (
        <div>
            <Modal
                open={ratingAndReviewState}
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
                            <div>
                                {
                                    stars.map((_, index) => {
                                        return (
                                            <FontAwesomeIcon
                                                style={{
                                                    padding: '5px',
                                                    cursor: 'pointer'
                                                }}
                                                icon={faStar}
                                                key={index}
                                                size='xl'
                                                color={(hoverValue || formValues.rating) > index ? colors.green : colors.grey}
                                                onClick={() => setFormValues({ ...formValues, rating: index + 1 })}
                                                onMouseOver={() => setHoverValue(index + 1)}
                                                onMouseLeave={() => setHoverValue(undefined)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="form-box__single-group">
                            <textarea
                                style={{
                                    height: '150px',
                                }}
                                name='comment'
                                placeholder='comment'
                                value={formValues.comment}
                                onChange={handleChange}
                            />
                            <p>{formErrors.comment}</p>
                        </div>
                        <div>
                            <Button
                                type='submit'
                                variant="contained"
                                color="success"
                            >submit</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default Ratingandreviewmodal