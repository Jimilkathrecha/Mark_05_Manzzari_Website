import React from 'react'
import '../../assets/css/styleoflife.css'

export default function Styleoflife() {
    return (
        <>
            <div className="container-xl sol-section" id="Style Of Life">
                <p className="my-5 text-center fs-1 gallient-font fw-bold">~ Style of Life ~</p>
                <div className="slideimg d-flex justify-content-evenly my-5">
                    <div className='border-brown'><img src="./images/styleof life-images/bangle 1.png" alt="" /></div>
                    <div className='border-brown'><img src="./images/styleof life-images/bangle 2.png" alt="" /></div>
                    <div className='border-brown'><img src="./images/styleof life-images/bangle 3.png" alt="" /></div>
                    <div className='border-brown'><img src="./images/styleof life-images/bangle 4.png" alt="" /></div>
                    <div className='border-brown'><img src="./images/styleof life-images/bangle 5.png" className="object-cover w-80" alt="" /></div>
                </div>
                <div className="cardsol d-flex justify-content-between my-4 border-brown align-items-center">
                    <div className="cardsol-img">
                        <img className="img6" src="./images/styleof life-images/banner4.1.png" alt="" />
                        {/* <img className="img6" src="./images/styleof life-images/banner5.0.jpg" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
