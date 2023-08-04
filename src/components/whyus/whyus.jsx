import React from 'react'
import '../../assets/css/whyus.css';

export default function Whyus() {
    return (
        <>
            <div className="container-xl wu-section my-5" id="क्यों हम">
                <p className="my-5 fs-1 text-center gallient-font">~ क्यों हम ~</p>
                <div className="wu-details d-flex justify-content-between">
                    <div className="wu-text d-flex flex-column gap-3">
                        <h4>
                            <i className="fa-solid fa-gear"></i> Unique designs that captivate,
                            setting trends with distinctive creativity.
                        </h4>
                        <h4>
                            <i className="fa-solid fa-sliders"></i> Customized jewelry that
                            reflects your unique style and personal story.
                        </h4>
                        <h4>
                            <i className="fa-solid fa-circle-user"></i> Trusted by satisfied
                            customers, with rave reviews and glowing testimonials.
                        </h4>
                        <h4>
                            <i className="fa-solid fa-dollar-sign"></i> Unbeatable value, offering
                            high-quality jewelry at competitive prices.
                        </h4>
                        <h4>
                            {/*<i className="fa-solid fa-brain"></i>*/} Peace of mind with our
                            comprehensive warranties and reliable after-sales support.
                        </h4>
                        <h4>
                            <i className="fas fa-award"></i> A heritage of excellence, with
                            decades of experience in crafting exquisite jewelry.
                        </h4>
                    </div>
                    <div className="wu-img w-25 bg-white p-4 position-relative">
                        <div className="border-img">
                            <img className='image-0 w-100' src="./images/png 1.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="wu-carbanners flex justify-content-evenly mt-3">
                    <div className="wu-carbanner">
                        <img className="banner" src="./images/tmj-banner-website-02.jpg" alt="" />
                    </div>
                    <div className="wu-carbanner">
                        <img className="banner" src="./images/tmj-banner-website-06.jpg" alt="" />
                    </div>
                </div> */}
            </div>
        </>
    )
}
