import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
   
};
const Videopopup = ({ videoPopup, setVideoPopup }) => {
    return (
        <div>
            <Modal
                open={videoPopup}
                onClose={setVideoPopup}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <video src='/images/video/Nature Beautiful short video 720p HD.mp4' width="100%"  controls autoPlay loop />
                </Box>
            </Modal>
        </div>)
}

export default Videopopup