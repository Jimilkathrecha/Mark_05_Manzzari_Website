import React, { useEffect, useState } from "react";
import "../../assets/css/categori.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../redux/actions/category";

export default function Category() {
    // const dispatch = useDispatch();
    // const { getAllCategory, addCategory, updateCategory, deleteCategory } =
    //     useSelector((state) => state.categoryState);
    // const [Categories, setCategories] = useState([]);

    // useEffect(() => {
    //     dispatch(getAllCategoryAction());
    // }, [dispatch]);

    // useEffect(() => {
    //     const categories = getAllCategory?.filter((category) => {
    //         return category?.is_publish === true;
    //     });
    //     setCategories(categories);
    // }, [getAllCategory]);

    const Categoryslide = {
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 4000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "60px",
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const category = [
        {
            id: 1,
            name: "Mangalsutra",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw49fd1e7c/images/hi-res/500934SBAAAA09_1.jpg?sw=360&sh=360",
        },
        {
            id: 2,
            name: "Necklace",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b40fba0/images/hi-res/50D2FFFHAAA29_1.jpg?sw=360&sh=360",
        },
        {
            id: 3,
            name: "Bracelet",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8550650c/images/hi-res/511819YGTAA00_1.jpg?sw=360&sh=360",
        },
        {
            id: 4,
            name: "Kadli",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf1f167f2/images/hi-res/50D2P2BYRAA32_1.jpg?sw=360&sh=360",
        },
        {
            id: 5,
            name: "Earring",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb74efb4c/images/hi-res/50D2P2NYYAA32_1.jpg?sw=360&sh=360",
        },
        {
            id: 6,
            name: "Ring",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4b1020ed/images/hi-res/500064OZAAAB04_1.jpg?sw=360&sh=360",
        },
        {
            id: 7,
            name: "Baccha Kadli",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1f2c44aa/images/hi-res/51F2KCVAD1A00.jpg?sw=360&sh=360",
        },
        {
            id: 8,
            name: "Kadli",
            img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw18c8f8f9/images/hi-res/511178VKB2A00_1.jpg?sw=360&sh=360",
        },
    ];

    return (
        <>
            <div className="w-100">
                <div className="">
                    <p className="my-5 fs-1 text-center title">Our Categories</p>
                </div>
            </div>
            <div className="w-[80%] mx-auto font-raleway">
                <div className="flex flex-col">
                    <div className="justify-between xl:flex">
                        <div className="justify-between gap-4 my-3 xl:flex-col md:flex">
                            <div className="flex gap-3 my-4 justify-center">
                                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[40px] rounded-br-[40px] relative min-w-[200px] min-h-[240px]">
                                    <img
                                        className="min-w-[200px] h-60 rounded-[7px] rounded-tl-[40px] rounded-br-[40px] absolute top-2 right-2 -z-10 hover:top-0 hover:right-0"
                                        src="/images/Category/mangalsutra.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-center align-items-center my-4">
                                    <h3 className="text-center mb-2 font-semibold text-lg px-1">
                                        {category[0]?.name}
                                    </h3>
                                    <span className="relative bs-brown h-[2px] w-20 rounded-2xl">
                                        <p className="absolute bs-brown h-[7px] w-[7px] start-[-1px] top-[-2.5px] rounded-full"></p>
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-3 my-4 justify-center">
                                <div className="flex flex-col justify-center align-items-center my-4">
                                    <h3 className="text-center mb-2 font-semibold text-lg px-1">
                                        {category[1]?.name}
                                    </h3>
                                    <span className="relative bs-brown h-[2px] w-20 rounded-2xl">
                                        <p className="absolute bs-brown h-[7px] w-[7px] top-[-2.5px] rounded-full end-[-1px]"></p>
                                    </span>
                                </div>
                                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[40px] rounded-br-[40px] relative min-w-[200px] min-h-[240px]">
                                    <img
                                        className="min-w-[200px] h-60 rounded-[7px] rounded-tl-[40px] rounded-br-[40px] absolute top-2 left-2 -z-10 hover:top-0 hover:right-0"
                                        src="/images/Category/dokiya.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="justify-between gap-4 my-3 xl:flex-col md:flex">
                            <div className="flex gap-3 my-4 justify-center">
                                <div className="img2 border-2 border-brown rounded-lg rounded-tl-[40px] rounded-br-[40px] relative min-w-[200px] min-h-[240px]">
                                    <img
                                        className="min-w-[200px] h-60 rounded-[7px] rounded-tl-[40px] rounded-br-[40px] absolute top-2 right-2 -z-10 hover:top-0 hover:right-0"
                                        src="/images/Category/bracelet.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-center align-items-center my-4">
                                    <span className="relative bs-brown h-[2px] w-20 rounded-2xl">
                                        <p className="absolute bs-brown h-[7px] w-[7px] start-[-1px] top-[-2.5px] rounded-full"></p>
                                    </span>
                                    <h3 className="text-center mt-2 font-semibold text-lg">
                                        {category[2]?.name}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex gap-3 my-4 justify-center">
                                <div className="flex flex-col justify-center align-items-center my-4">
                                    <span className="relative bs-brown h-[2px] w-20 rounded-2xl">
                                        <p className="absolute bs-brown h-[7px] w-[7px] top-[-2.5px] rounded-full end-[-1px]"></p>
                                    </span>
                                    <h3 className="text-center mt-2 font-semibold text-lg">
                                        {category[3]?.name}
                                    </h3>
                                </div>
                                <div className="img2 border-2 border-brown rounded-lg rounded-tl-[40px] rounded-br-[40px] relative min-w-[200px] min-h-[240px]">
                                    <img
                                        className="min-w-[200px] h-60 rounded-[7px] rounded-tl-[40px] rounded-br-[40px] absolute top-2 left-2 -z-10 hover:top-0 hover:right-0"
                                        src="/images/Category/kadli.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="justify-between gap-4 my-3 xl:flex-col md:flex">
                            <div className="flex gap-3 my-4 justify-center">
                                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[40px] rounded-br-[40px] relative min-w-[200px] min-h-[240px]">
                                    <img
                                        className="min-w-[200px] h-60 rounded-[7px] rounded-tl-[40px] rounded-br-[40px] absolute top-2 right-2 -z-10 hover:top-0 hover:right-0"
                                        src="/images/Category/earing.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-center align-items-center my-4">
                                    <h3 className="text-center mb-2 font-semibold text-lg px-1">
                                        {category[4]?.name}
                                    </h3>
                                    <span className="relative bs-brown h-[2px] w-20 rounded-2xl">
                                        <p className="absolute bs-brown h-[7px] w-[7px] start-[-1px] top-[-2.5px] rounded-full"></p>
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3 my-4 justify-center">
                                <div className="flex flex-col justify-center align-items-center my-4">
                                    <h3 className="text-center mb-2 font-semibold text-lg px-1">
                                        {category[5]?.name}
                                    </h3>
                                    <span className="relative bs-brown h-[2px] w-20 rounded-2xl">
                                        <p className="absolute bs-brown h-[7px] w-[7px] top-[-2.5px] rounded-full end-[-1px]"></p>
                                    </span>
                                </div>
                                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[40px] rounded-br-[40px] relative min-w-[200px] min-h-[240px]">
                                    <img
                                        className="min-w-[200px] h-60 rounded-[7px] rounded-tl-[40px] rounded-br-[40px] absolute top-2 left-2 -z-10 hover:top-0 hover:right-0"
                                        src="/images/Category/ring.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
