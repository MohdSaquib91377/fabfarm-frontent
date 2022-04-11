import React from 'react';
const About = () => {
    return (
        <section className="container">
            <div className="about">
                <div className="inner">
                    <div className="figArt">
                        <div className="col">
                            <div className="fig">
                                <img src={process.env.PUBLIC_URL + '/images/tomato-seeds.jpg'} alt='tamoto' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="art">
                                <div className="title">
                                    <h1>WHO WE ARE?</h1>
                                </div>
                                <p>
                                    We, at The Essential Greens want to make urban population self- sufficient by transforming their unused spaces into their own garden and creating an eco system to sustain in such uncertain and unprecedented times.
                                    <br /><br />
                                    We care about what goes into food, goes into you. Maintaining a fruitful, sustainable home garden provides sense of empowerment because you’re in complete control of what you will consume.Our kitchen gardening kits are carefully curated selection of roots, exotic, local vegetable saplings delivered to your home. Our kit also involves fertilisers , coco peat and tools, thats all a gardener needs to create his own garden. Before the sapling reaches you we have fully sterilised our kits. We grow in complete control ecosystem and constantly monitor multiple parameters to ensure best quality,
                                    <br /><br />
                                    We use advanced technology with minimum human touch to fill in the coco peat, experts and professionals to examine the process of soil germination on routine, foggers for right amount of water. Whenever you take up any creative activity you are bound to be happy, gardening included. You can be completely creative in creating your own space where you feel at peace and make it look beautiful as you can. The most important aspect, is emotion connection with your plants and being completely responsible for it.
                                    <br /><br />
                                    Safety is no small thing, even when it comes to the smallest of things. Our team ensures every step along the journey of our produce is met with perfection, so that you get your hand on only the best. We are adhering to all the prescribed hygiene measures to deliver the package safely
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gridView">
                    <div className="inner">
                        <div className="col">
                            <img src={process.env.PUBLIC_URL + "images/icons/plant1.png"} alt='plant1' />
                            <h2>OUR AIM</h2>
                            <p>
                                “What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has”
                            </p>
                        </div>
                        <div className="col">
                            <img src={process.env.PUBLIC_URL + "images/icons/watering-plants.png"} alt='plant2' />
                            <h2>OUR SERVICES</h2>
                            <p>
                                “What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has”
                            </p>
                        </div>
                        <div className="col">
                            <img src={process.env.PUBLIC_URL + "images/icons/plants2.png"} alt="plant3" />
                            <h2>OUR MISSION</h2>
                            <p>
                                “What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About