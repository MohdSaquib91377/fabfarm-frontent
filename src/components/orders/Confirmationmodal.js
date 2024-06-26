import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    borderRadius:"10px",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const Confirmationmodal = ({ openConfirmModal, setOpenConfirmModal, setConfirm }) => {

    return (
        <div>
            <Modal
                open={openConfirmModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" className='mb-4' variant="h6" component="h2">
                        Are you sure ?
                    </Typography>
                    
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginRight: 5 }}
                        onClick={() => setOpenConfirmModal(false)}
                    >No</Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => setConfirm('yes')}
                    >yes</Button>
                </Box>
            </Modal>
        </div>)
}

export default Confirmationmodal