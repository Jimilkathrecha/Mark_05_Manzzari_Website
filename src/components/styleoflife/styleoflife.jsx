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
        slidesToShow: 3,
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
            <div className='mx-3 px-3 my-5'>
                <div class="flex text-center w-100 justify-evenly items-center">
                    <div class="">
                        <img class="mx-auto my-2" alt="Assured Lifetime Jewellery Maintenance" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/assured-lifetime-maintenances2.svg" />
                        <h3>
                            <a title="" >Assured Lifetime<br />Maintenance</a>
                        </h3>
                    </div>
                    <div class="">
                        <a title="Easy Exchange">
                            <img class="mx-auto my-2" alt="Easy Exchange of Jewellery" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/easy-exchange2.svg" />
                        </a>
                        <h3>
                            <a title="Easy Exchange">Easy<br />Exchange</a>
                        </h3>
                    </div>
                    <div class="">
                        <a title="Your Jewellery is Insured">
                            <img class="mx-auto my-2" alt="Your Jewellery is Insured" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/your-jewellery-is-Insured2.svg" />
                        </a>
                        <h3>
                            <a title="Your Jewellery is Insured">Your Jewellery<br />is Insured</a>
                        </h3>
                    </div>
                    <div class="">
                        <a title="14 Days Return Policy">
                            <img class="mx-auto my-2" alt="14 Days Jewellery Return Policy" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/14-days-return-policy2.svg" />
                        </a>
                        <h3>
                            <a title="14 Days Return Policy">14 Days<br />Return Policy</a></h3>
                    </div>
                    <div class="">
                        <a title="Tested &amp; Certified Diamonds">
                            <img class="mx-auto my-2" alt="Tested and Certified Diamonds" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/Only_Certified_Jewellery-012.svg" />
                        </a>
                        <h3>
                            <a title="Tested &amp; Certified Diamonds">Tested &amp; Certified<br />Diamonds</a></h3>
                    </div>
                    <div class="">
                        <a title="Complete Transparency">
                            <img class="mx-auto my-2" alt="Complete Jewellery Transparency" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/complete-transparency1.svg" />
                        </a>
                        <h3>
                            <a title="Complete Transparency">Complete<br />Transparency</a></h3>
                    </div>
                    <div class="">
                        <a title="Zero Deduction Gold Exchange">
                            <img class="mx-auto my-2" alt="Zero Deduction Gold Exchange" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/zero-deduction-gold-exchange2.svg" />
                        </a>
                        <h3>
                            <a title="Zero Deduction Gold Exchange">Zero Deduction<br />Gold Exchange</a></h3>
                    </div>
                    <div class="">
                        <a title="BIS 916 Hallmarked Pure Gold">
                            <img class="mx-auto my-2 !w-[68px]" alt="BIS 916 Hallmarked Pure Gold" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/100-Huid.svg" />
                        </a>
                        <h3>
                            <a title="BIS 916 Hallmarked Pure Gold">100% HUID<br />Compliant Gold</a></h3>
                    </div>
                    <div class="">
                        <a title="Guaranteed Buyback">
                            <img class="mx-auto my-2" alt="Guaranteed Jewellery Buyback" src="https://www.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2020/02_feb/malabar-promise/online-promise/svg/guaranteed-buyback2.svg" />
                        </a>
                        <h3>
                            <a title="Guaranteed Buyback">Guaranteed<br />Buyback</a></h3>
                    </div>
                </div>
            </div>

            <div>
            <p className="mt-[100px] mb-3 text-center fs-1 gallient-font fw-bold">~ In The Spotlight ~</p>
                <Slider className='w-[90%] h-[500px] mx-auto d-none d-md-block rounded-[15px] overflow-hidden pointer' {...faded}>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 h-[300px] object-cover rounded-[15px] pointer-events-none' src="./images/styleof life-images/banner4.1.png" alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 h-[300px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-2.png' alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 h-[300px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-3.png' alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 h-[300px] object-cover rounded-[15px] pointer-events-none' src="./images/styleof life-images/banner4.1.png" alt="" />
                    </div>
                    <div className='w-100 rounded-[15px] overflow-hidden grab grabbing px-2'>
                        <img className='w-100 h-[300px] object-cover rounded-[15px] pointer-events-none' src='images/banner-animation/styleoflife-2.png' alt="" />
                    </div>
                </Slider>
            </div>
        </>
    )
}
