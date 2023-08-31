import React, { Component } from "react";
import Slider from "react-slick";

import '../../assets/css/banner.css';

export default function Offers() {

    const faded = ({
        // fade: true,
        // cssEase: 'linear',
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 4000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    return (
        <>
            <div className="mt-[100px]">
                <p className="my-5 fs-1 text-center gallient-font fw-bold">~ Offers ~</p>
            </div>
            <Slider className='w-[90%] h-[470px] my-[50px] mx-auto 3xs:h-[200px] xs:h-[250px] lg:h-[300px] rounded-[15px] overflow-hidden' {...faded}>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img className=' 3xs:h-[200px] xs:h-[250px] lg:h-[300px] w-100 object-cover rounded-[15px] pointer-events-none' src="images/banner-animation/styleoflife-1.png" alt="" />
                </div>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img className=' 3xs:h-[200px] xs:h-[250px] lg:h-[300px] w-100 object-cover rounded-[15px] pointer-events-none' src="./images/banner-animation/manzzri background.png" alt="" />
                </div>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img className=' 3xs:h-[200px] xs:h-[250px] lg:h-[300px] w-100 object-cover rounded-[15px] pointer-events-none' src="images/banner-animation/styleoflife-1.png" alt="" />
                </div>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img className=' 3xs:h-[200px] xs:h-[250px] lg:h-[300px] w-100 object-cover rounded-[15px] pointer-events-none' src="./images/banner-animation/manzzri background.png" alt="" />
                </div>
            </Slider>
        </>
    );
}