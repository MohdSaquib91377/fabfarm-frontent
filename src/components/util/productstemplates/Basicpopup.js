import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { setPopup, setPopupMessage } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';

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
const Basicpopup = ({ popup, setPopup, popupMessage, setPopupMessage }) => {
    setTimeout(() => {
        if (popup) {
            setPopup(false)
            setPopupMessage('')
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
                        {popupMessage}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        popup: state.shop.popup,
        popupMessage: state.shop.popupMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Basicpopup)