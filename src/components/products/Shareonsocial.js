import React from 'react'
import {
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
const Shareonsocial = ({ url }) => {
    return (
        <>
            <FacebookShareButton url={url} >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TelegramShareButton url={url} >
                <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <TwitterShareButton url={url} >
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={url} >
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
        </>
    )
}

export default Shareonsocial