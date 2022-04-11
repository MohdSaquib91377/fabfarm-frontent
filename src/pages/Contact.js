import React from 'react'

const Contact = () => {
    return (
        <section className="container">
            <div className="contact">
                <div className="inner">
                    <h2>Contact Us Now</h2>
                    <form onsubmit="return(validateContact())">
                        <input type="text" id="name" placeholder="Your Name" />
                        <input type="text" id="email" placeholder="Your E-mail Address" />
                        <textarea placeholder="Write message here"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact