import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { setPopup } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Basicpopup = ({ popup, setPopup }) => {
    setTimeout(() => {
        if(popup){
            setPopup(false)
        }
    }, 3000)

    return (
        <div>
            <Modal
                open={popup}
                onClose={() => setPopup(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Product Added to Wishlist
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        popup: state.shop.popup
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPopup: (boolean) => dispatch(setPopup(boolean))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Basicpopup)