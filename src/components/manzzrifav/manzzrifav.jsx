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

const manzzrifav = ({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

export const Manzzrifav = () => {
    return (
        <>
            <div className='px-5 my-5 py-3'>
                <div className="md:flex px-2 justify-center gap-5 w-100">
                    <div className='3xs:w-100 w-100 my-auto'>
                        <div className="text-center mb-3">
                            <p className="my-1 fs-1 text-center gallient-font fw-bold">~ Manzzri's Favorites ~</p>
                        </div>
                        <div className=''>
                            <Slider className='w-100 h-100' {...manzzrifav}>
                                {product.map(product => (
                                    <div key={product} className='w-100 h-100 border-0 p-2'>
                                        <div className="d-flex gap-4 w-100 h-100 justify-center">
                                            <div className='w-[250px] hover:shadow-lg border-1 border-marun rounded-1 overflow-hidden'>
                                                <div className='w-fit relative'>
                                                    <Link to="/product">
                                                        <img className='w-[250px] !h-[150px] object-cover border-b-[1px] border-marun' src={product.img} alt="" />
                                                    </Link>
                                                </div>
                                                <div className='p-[10px]'>
                                                    <div className=''>
                                                        <p className='uppercase fs-6 text-red-600'>Only 10 in Stock</p>
                                                        <p className='col m-0 p-0 text-sm font-bold leading-6 text-gray-900 whitespace-nowrap'>{product.name}</p>
                                                        <p className='col m-0 p-0 fs-7 font-semibold leading-6 text-gray-500'>₹ 24607 <del className='tx-red'>₹ 25902</del></p>
                                                    </div>
                                                    <p className='block m-0 p-0 fs-6 font-semibold leading-6 text-gray-900'>Women <span className='tx-marun'>|</span> Earrings </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
