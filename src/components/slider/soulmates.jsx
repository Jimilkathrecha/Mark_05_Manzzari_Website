import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const product = [
    { id: 1, name: "Dainty Gold Fancy Diamond Stud Earrings", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9babb3bd/images/hi-res/501718SEQAAA09_1.jpg?sw=360&sh=360" },
    { id: 2, name: "Graceful Crossover Diamond Ring", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw49fd1e7c/images/hi-res/500934SBAAAA09_1.jpg?sw=360&sh=360" },
    { id: 3, name: "Sparkling Flower Diamond Stud Earrings", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb58ab686/images/hi-res/502998SCHAAA09_1.jpg?sw=360&sh=360" },
    { id: 4, name: "Leafy Charm Diamond Mangalsutra", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb842fe47/images/hi-res/505002SAVAGA09_1.jpg?sw=360&sh=360" },
    { id: 5, name: "Star Petite Layered Diamond Ring", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw73a1156b/images/hi-res/505001SDGAGB02_1.jpg?sw=360&sh=360" },
    { id: 6, name: "Graceful Diamond Hoop", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb842fe47/images/hi-res/505002SAVAGA09_1.jpg?sw=360&sh=360" },
    { id: 7, name: "Extravagant Diamond Pendant and Earrings", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw73a1156b/images/hi-res/505001SDGAGB02_1.jpg?sw=360&sh=360" },
    { id: 8, name: "Petite Round Diamond Stud Earrings", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9babb3bd/images/hi-res/501718SEQAAA09_1.jpg?sw=360&sh=360" },
    { id: 9, name: "Dainty Gold Fancy Diamond Stud Earrings", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw49fd1e7c/images/hi-res/500934SBAAAA09_1.jpg?sw=360&sh=360" },
    { id: 10, name: "Star Petite Layered Diamond Ring", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb58ab686/images/hi-res/502998SCHAAA09_1.jpg?sw=360&sh=360" },
    { id: 11, name: "Leafy Charm Diamond Mangalsutra", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb842fe47/images/hi-res/505002SAVAGA09_1.jpg?sw=360&sh=360" },
    { id: 12, name: "Extravagant Diamond Pendant and Earrings", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw73a1156b/images/hi-res/505001SDGAGB02_1.jpg?sw=360&sh=360" },
    { id: 13, name: "Sparkling Flower Diamond Stud Earrings", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw49fd1e7c/images/hi-res/500934SBAAAA09_1.jpg?sw=360&sh=360" },
];


const soulmate2 = ({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
});


const soulmate = ({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                settings: "unslick"
                // slidesToShow: 3,
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

export const Soulmates = () => {
    return (
        <>
            <div className='px-3 my-5 py-3'>
                <div className="md:flex px-5 justify-center gap-5 w-100">
                    <div className='w-[60%] d-none d-md-block my-auto'>
                        <div className="text-center h-25 mb-3">
                            <p className="my-1 fs-1 text-center gallient-font fw-bold">~ Soulmate ~</p>
                        </div>
                        <div className=''>
                            <Slider className='w-100 h-100' {...soulmate}>
                                {product.map(product => (
                                    <div key={product} className='w-100 border-0 p-2'>
                                        <div className="d-flex gap-4 w-100 justify-center">
                                            <div className='w-[250px] hover:shadow-lg border-1 border-marun rounded-1 overflow-hidden'>
                                                <div className='w-fit relative'>
                                                    <Link to="/product">
                                                        <img className='w-[250px] !h-[150px] object-cover border-b-[1px] border-marun' src={product.img} alt="" />
                                                    </Link>
                                                    <Link to='/compare' >
                                                        <i className="fa fa-arrow-right-arrow-left absolute top-0 p-2 m-1 hov-scale-2 tx-marun" title='Add to Compare'></i>
                                                    </Link>
                                                    {/* <div className='flex absolute top-0 end-0 hov-scale-2 p-2' onClick={() => toggleLike(product.id)}>
                                                        {likes[product.id] ?
                                                            <i className="fa-solid fa-heart fs-5 tx-red"></i>
                                                            :
                                                            <i className="fa-regular fa-heart fs-5"></i>
                                                        }
                                                    </div> */}
                                                </div>
                                                <div className='p-[10px] pb-0'>
                                                    <div className=''>
                                                        <p className='uppercase fs-6 text-red-600'>Only 10 in Stock</p>
                                                        <p className='col m-0 p-0 text-sm font-bold leading-6 text-gray-900 whitespace-nowrap'>{product.name}</p>
                                                        <p className='col m-0 p-0 fs-7 font-semibold leading-6 text-gray-500'>₹ 24607 <del className='tx-red'>₹ 25902</del></p>
                                                    </div>
                                                    <p className='block m-0 p-0 fs-6 font-semibold leading-6 text-gray-900'>Women <span className='tx-marun'>|</span> Earrings </p>
                                                </div>
                                                <div className="flex gap-2 w-100 p-[10px] pt-0">
                                                    <Link className='col' to="/product">
                                                        <div className='col text-center pointer my-2 rounded-1 border-1 border-marun'>
                                                            <p className='px-3 py-[5px] fs-7 font-semibold'>Explore Now</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <Slider className='w-[30%] d-none d-md-block' {...soulmate2}>
                        <div className='w-100 rounded-5 overflow-hidden border-0 px-2'>
                            <img className='h-[400px] w-100 rounded-5 border-0 object-fit object-right' src="https://www.tanishq.co.in/on/demandware.static/-/Sites/default/dw2e4d2b6b/586x430-copy-8.jpg" alt="" />
                        </div>
                        <div className='w-100 rounded-5 overflow-hidden border-0 px-2'>
                            <img className='h-[400px] w-100 rounded-5 border-0 object-cover object-left' src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/07-JULY/AppBanner/OGE/01/Mobile_768x890.webp" alt="" />
                        </div>
                    </Slider>

                </div>
            </div>
        </>
    )
}
