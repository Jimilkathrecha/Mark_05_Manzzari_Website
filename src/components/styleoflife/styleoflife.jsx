import React from "react";
import Slider from "react-slick";

export default function Styleoflife() {
    const categories = {
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 4000,
        speed: 2000,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "80px",
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "150px",
                    centerMode: true,
                },
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "130px",
                    centerMode: true,
                },
            },
            {
                breakpoint: 605,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "110px",
                    centerMode: true,
                },
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "90px",
                    centerMode: true,
                },
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "40px",
                    centerMode: true,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "20px",
                    centerMode: true,
                },
            },
        ],
    };

    const faded = {
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        rtl: true,
        autoPlaySpeed: 4000,
        speed: 2000,
        centermode: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <p className="mt-[40px] lg:mt-[100px] mb-3 text-center fs-1 title">~ Style of Life ~</p>

            <Slider className='w-[80%] mx-auto d-md-block rounded-[15px] overflow-hidden' {...categories}>
                <div className='my-5 min-w-[200px] min-h-[200px]'>
                    <div className='max-w-[200px] max-h-[200px] mx-auto rounded-3xl w-100 border-0 text-center'>
                        <img className='w-[200px] h-[200px] rounded-3 my-3 mx-auto' src="/images/Try-1.png" alt="" />
                    </div>
                </div>
                <div className='my-5 min-w-[200px] min-h-[200px]'>
                    <div className='max-w-[200px] max-h-[200px] mx-auto rounded-3xl w-100 border-0 text-center'>
                        <img className='w-[200px] h-[200px] rounded-3 my-3 mx-auto' src="/images/Try-2.png" alt="" />
                    </div>
                </div>
                <div className='my-5 min-w-[200px] min-h-[200px]'>
                    <div className='max-w-[200px] max-h-[200px] mx-auto rounded-3xl w-100 border-0 text-center'>
                        <img className='w-[200px] h-[200px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 3.png" alt="" />
                    </div>
                </div>
                <div className='my-5 min-w-[200px] min-h-[200px]'>
                    <div className='max-w-[200px] max-h-[200px] mx-auto rounded-3xl w-100 border-0 text-center'>
                        <img className='w-[200px] h-[200px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 4.png" alt="" />
                    </div>
                </div>
                <div className='my-5 min-w-[200px] min-h-[200px]'>
                    <div className='max-w-[200px] max-h-[200px] mx-auto rounded-3xl w-100 border-0 text-center'>
                        <img className='w-[200px] h-[200px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 5.png" alt="" />
                    </div>
                </div>
                <div className='my-5 min-w-[200px] min-h-[200px]'>
                    <div className='max-w-[200px] max-h-[200px] mx-auto rounded-3xl w-100 border-0 text-center'>
                        <img className='w-[200px] h-[200px] rounded-3 my-3 mx-auto' src="./images/styleof life-images/bangle 5.png" alt="" />
                    </div>
                </div>
            </Slider>
            <div className='w-100 mt-5'>
                {/* <Slider className='w-[90%] mx-auto 3xs:h-[200px] xs:h-[250px] lg:h-[300px] rounded-[15px] overflow-hidden pointer' {...faded}>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 3xs:h-[200px] xs:h-[250px] lg:h-[300px] object-cover rounded-[15px] pointer-events-none' src="./images/styleof life-images/banner4.1.png" alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 3xs:h-[200px] xs:h-[250px] lg:h-[300px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-2.png' alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 3xs:h-[200px] xs:h-[250px] lg:h-[300px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-3.png' alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 3xs:h-[200px] xs:h-[250px] lg:h-[300px] object-cover rounded-[15px] pointer-events-none' src="./images/styleof life-images/banner4.1.png" alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 3xs:h-[200px] xs:h-[250px] lg:h-[300px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-2.png' alt="" />
                    </div>
                </Slider> */}
                <div className="w-[90%] mx-auto rounded-xl overflow-hidden">
                    <img src="/images/banner-animation/MZR1-3.png" alt="" />
                </div>
            </div>
        </>
    )
}
