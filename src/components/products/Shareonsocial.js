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
const Shareonsocial = ({ url, title }) => {
    return (
        <>
            <FacebookShareButton url={url} title={title} >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TelegramShareButton url={url} title={title} >
                <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <TwitterShareButton url={url} title={title} >
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title} >
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
        </>
    )
}

export default Shareonsocial