import React, { Component } from "react";
import Slider from "react-slick";

import '../../assets/css/banner.css';

export default function Banner() {

    const faded = ({
        // fade: true,
        // cssEase: 'linear',
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
    });


    return (
        <>
            {/*<div className="w-[80%] mx-auto rounded-2xl overflow-hidden relative my-5">
                <img className="w-100 h-100 " src="./images/banner-animation/manzzri background.png" alt="" />
                <p className="absolute top-[30%] start-[20%]  text-white dancingscript-font fs-2">This one can make you</p>
                <h3 className="absolute z-1 top-50 start-50 translate-middle m-0 text-white cinemasunday-font feel-text">FEEL &nbsp; UNIQUE</h3>
                <h3 className="absolute text-white cinemasunday-font unique-text"></h3>
                <img className="absolute h-100 top-50 start-50 translate-middle" src="./images/banner-animation/kadli3.png" alt="" /> 
            </div> */}


            <div className="">
                <p className="my-5 fs-1 text-center gallient-font fw-bold">~ Promotional ~</p>
            </div>
            <Slider className='w-[80%] h-[470px] my-[50px] mx-auto d-none d-md-block rounded-[15px] overflow-hidden' {...faded}>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img style={{ height: "380px" }} className='w-100 object-cover rounded-[15px] pointer-events-none' src="images/banner-animation/styleoflife-1.png" alt="" />
                </div>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img style={{ height: "380px" }} className='w-100 object-cover rounded-[15px] pointer-events-none' src="./images/banner-animation/manzzri background.png" alt="" />
                </div>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img style={{ height: "380px" }} className='w-100 object-cover rounded-[15px] pointer-events-none' src="images/banner-animation/styleoflife-1.png" alt="" />
                </div>
                <div className='w-100 grab grabbing rounded-[15px] overflow-hidden px-2'>
                    <img style={{ height: "380px" }} className='w-100 object-cover rounded-[15px] pointer-events-none' src="./images/banner-animation/manzzri background.png" alt="" />
                </div>
            </Slider>

            {/* <div className="w-[80%] mx-auto rounded-2xl overflow-hidden relative my-5">
                <img className="w-100 h-100 " src="./images/banner-animation/manzzri background.png" alt="" />
                {/* <p className="absolute top-[30%] start-[20%]  text-white dancingscript-font fs-2">This one can make you</p>
                <h3 className="absolute z-1 top-50 start-50 translate-middle m-0 text-white cinemasunday-font feel-text">FEEL &nbsp; UNIQUE</h3>
                // <h3 className="absolute text-white cinemasunday-font unique-text"></h3>
                <img className="absolute h-100 top-50 start-50 translate-middle" src="./images/banner-animation/kadli3.png" alt="" />
            </div> */}
        </>
    );
}