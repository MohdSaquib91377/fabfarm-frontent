import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useBannerImages from '../../hooks/useBannerImages'
import Tabtitle from '../../pages/Tabtitle'


const faqData = [
    {
        Question: `How do I find my Windows Product key?`,
        Answer: "The product key is located inside the product packaging, on the receipt or confirmation page for a digital purchase or in aconfirmation e-mail that shows you purchased Windows. If youpurchased a digital copy from Microsoft Store, you can locate your product key in your Account under Digital Content."
    },
    {
        Question: `I've downloaded an ISO file, now what?`,
        Answer: `The product key is located inside the product packaging, on the
        receipt or confirmation page for a digital purchase or in a
        confirmation e-mail that shows you purchased Windows. If you
        purchased a digital copy from Microsoft Store, you can locate your
        product key in your Account under Digital Content.
        To create bootable media such as a bootable USB drive or DVD, you
        will need an ISO burning or mounting software. We recommend always
        using a blank USB or blank DVD because contents may be deleted
        when creating a bootable image.
        `
    },
    {
        Question: `What's the difference between 32-bit and 64-bit versions of Windows?`,
        Answer: `
        The terms 32-bit and 64-bit refer to the way a computer's
        processor (also called a CPU) handles information. The 64-bit
        version of Windows handles large amounts of random access memory
        (RAM) more effectively than a 32-bit system. Not all devices can
        run the 64-bit versions of Windows.`
    },
    {
        Question: 'How do I find my Windows Product key?',
        Answer: `The product key is located inside the product packaging, on the
        receipt or confirmation page for a digital purchase or in a
        confirmation e-mail that shows you purchased Windows. If you
        purchased a digital copy from Microsoft Store, you can locate your
        product key in your Account under Digital Content.`
    },
    {
        Question: `How do I find my Windows Product key?`,
        Answer: `The product key is located inside the product packaging, on the
        receipt or confirmation page for a digital purchase or in a
        confirmation e-mail that shows you purchased Windows. If you
        purchased a digital copy from Microsoft Store, you can locate your
        product key in your Account under Digital Content.`
    },
    {
        Question: `I've downloaded an ISO file, now what?`,
        Answer: `The product key is located inside the product packaging, on the
        receipt or confirmation page for a digital purchase or in a
        confirmation e-mail that shows you purchased Windows. If you
        purchased a digital copy from Microsoft Store, you can locate your
        product ky in your Account under Digital Content.
        To create bootable media such as a bootable USB drive or DVD, you
        will need an ISO burning or mounting software. We recommend always
        using a blank USB or blank DVD because contents may be deleted
        when creating a bootable image.
        `
    },
    {
        Question: `What's the difference between 32-bit and 64-bit versions of Windows?`,
        Answer: `<p>
        The terms 32-bit and 64-bit refer to the way a computer's
        processor (also called a CPU) handles information. The 64-bit
        version of Windows handles large amounts of random access memory
        (RAM) more effectively than a 32-bit system. Not all devices can
        run the 64-bit versions of Windows.
    </p>`
    },
    {
        Question: 'How do I find my Windows Product key?',
        Answer: `The product key is located inside the product packaging, on the
        receipt or confirmation page for a digital purchase or in a
        confirmation e-mail that shows you purchased Windows. If you
        purchased a digital copy from Microsoft Store, you can locate your
        product key in your Account under Digital Content.`
    },
]


const Faqspage = () => {
    Tabtitle('FAB | FAQs')
    const banner = useBannerImages('faqs')
    const [checked, setChecked] = useState(false)
    const handleToggle = (index) => {
        if (checked === index) {
            return setChecked(null)
        }
        setChecked(index)
    }

    return (
        <>
            <div className="breadcrumb_wrapper" style={{
                minHeight: '250px',
                backgroundImage: `url(${banner[0]?.image_or_video})`
            }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="breadcrumb_inner">
                                <h3>FAQs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--About Section--> */}
            <div className="container ">
                <div className="row">
                    <div className="col-12  my-3">
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                            <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                            <span className='breadcrum-width-dot'>FAQs   </span>
                        </p>
                    </div>
                </div>
            </div>
            <main id="main-container" className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-content m-b-60 text-center">
                                <h5 className="section-content__title">Frequently Questions</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-section ">
                                <div className="faq-top m-b-40">
                                    <h5 className="faq__title font--bold m-b-15">Below are frequently asked questions, you may find the answer for yourself</h5>
                                    <p className="text--gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                                </div>
                                <div className="faq__accordion accordian" id="faq__accordion">
                                    {
                                        faqData.map((items, index) => {
                                            const { Question, Answer } = items;
                                            return (
                                                <div key={index} className="accordian-item">
                                                    <div onClick={() => handleToggle(index)} className={checked === index ? "accordian-item-header active" : "accordian-item-header"}>
                                                        <h4>{Question}</h4>
                                                    </div>
                                                    {
                                                        checked === index ?
                                                            <div>
                                                                <div className="accordian-item-body-content">
                                                                    <p>{Answer}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            undefined}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Faqspage