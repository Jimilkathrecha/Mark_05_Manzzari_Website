import React from 'react'
import Slider from "react-slick";


export default function Styleoflife() {


    const categories = ({
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        centerMode: true,
  centerPadding: '60px',
    });

    const faded = ({
        // fade: true,
        // cssEase: 'linear',
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        centermode: true
    });


    return (
        <>
            <p className="mt-[100px] mb-3 text-center fs-1 gallient-font fw-bold">~ Style of Life ~</p>

            <Slider className='w-[80%] mx-auto d-none d-md-block rounded-[15px] overflow-hidden' {...categories}>
                <div className='p-4 my-5 col'>
                    <div className='uniq shadow-4 rounded-tl-3xl rounded-br-xl border-3 border-brown text-center py-1'>
                        <img className='w-[150px] h-[150px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 1.png" alt="" />
                    </div>
                </div>
                <div className='p-4 my-5 col'>
                    <div className='uniq shadow-4 rounded-tl-3xl rounded-br-xl border-3 border-brown text-center py-1'>
                        <img className='w-[150px] h-[150px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 2.png" alt="" />
                    </div>
                </div>
                <div className='p-4 my-5 col'>
                    <div className='uniq shadow-4 rounded-tl-3xl rounded-br-xl border-3 border-brown text-center py-1'>
                        <img className='w-[150px] h-[150px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 3.png" alt="" />
                    </div>
                </div>
                <div className='p-4 my-5 col'>
                    <div className='uniq shadow-4 rounded-tl-3xl rounded-br-xl border-3 border-brown text-center py-1'>
                        <img className='w-[150px] h-[150px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 4.png" alt="" />
                    </div>
                </div>
                <div className='p-4 my-5 col'>
                    <div className='uniq shadow-4 rounded-tl-3xl rounded-br-xl border-3 border-brown text-center py-1'>
                        <img className='w-[150px] h-[150px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 5.png" alt="" />
                    </div>
                </div>
                <div className='p-4 my-5 col'>
                    <div className='uniq shadow-4 rounded-tl-3xl rounded-br-xl border-3 border-brown text-center py-1'>
                        <img className='w-[150px] h-[150px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 5.png" alt="" />
                    </div>
                </div>
            </Slider>


            <Slider className='w-[80%] h-[500px] mx-auto d-none d-md-block rounded-[15px] overflow-hidden' {...faded}>
                <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-1'>
                    <img className='w-100 h-[500px] object-cover rounded-[15px] pointer-events-none' src="./images/styleof life-images/banner4.1.png" alt="" />
                </div>
                <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-1'>
                    <img className='w-100 h-[500px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-2.png' alt="" />
                </div>
                <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-1'>
                    <img className='w-100 h-[500px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-3.png' alt="" />
                </div>
            </Slider>
        </>
    )
}
