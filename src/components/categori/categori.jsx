import React from 'react'
import '../../assets/css/categori.css'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

export default function Categories() {

  const Categoryslide = ({
    // fade: true,
    // cssEase: 'linear',
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "60px",
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          slidesToScroll: 1,
        }
      }
    ]
  });

  const category = [
    { id: 1, name: "Earring", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw49fd1e7c/images/hi-res/500934SBAAAA09_1.jpg?sw=360&sh=360" },
    { id: 2, name: "Ring", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b40fba0/images/hi-res/50D2FFFHAAA29_1.jpg?sw=360&sh=360" },
    { id: 3, name: "Mangalsutra", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8550650c/images/hi-res/511819YGTAA00_1.jpg?sw=360&sh=360" },
    { id: 4, name: "Bracelet", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf1f167f2/images/hi-res/50D2P2BYRAA32_1.jpg?sw=360&sh=360" },
    { id: 5, name: "Necklace", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb74efb4c/images/hi-res/50D2P2NYYAA32_1.jpg?sw=360&sh=360" },
    { id: 6, name: "Nose ring", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4b1020ed/images/hi-res/500064OZAAAB04_1.jpg?sw=360&sh=360" },
    { id: 7, name: "Baccha Kadli", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1f2c44aa/images/hi-res/51F2KCVAD1A00.jpg?sw=360&sh=360" },
    { id: 8, name: "Kadli", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw18c8f8f9/images/hi-res/511178VKB2A00_1.jpg?sw=360&sh=360" },
  ];

  return (
    <>
      <div className="w-100">
        <div className="">
          <p className="my-5 fs-1 text-center gallient-font fw-bold">~ Our Categories ~</p>
        </div>
      </div>
      <div className='w-[80%] mx-auto'>
        <div className="flex flex-col">
          <div className="justify-between xl:flex">
            <div className="justify-between gap-4 my-3 xl:flex-col md:flex">
              <div className="flex gap-3 my-3 justify-center">
                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[50px] rounded-br-[50px] p-2 ps-0 pb-1.5">
                  <img className='min-w-[180px] h-60 rounded-[7px] rounded-tl-[50px] rounded-br-[50px]' src="./images/categories-images/bacha kadli png.png" alt="" />
                </div>
                <div className="flex flex-col justify-center align-items-center my-4">
                  <h3 className='text-center mb-2 font-medium text-lg px-1'>Mangalsutra</h3>
                  <span className='relative bs-brown h-[2px] w-20 rounded-2xl'>
                    <p className='absolute bs-brown h-[7px] w-[7px] start-[-1px] top-[-2.5px] rounded-full'></p>
                  </span>
                </div>
              </div>
              <div className="flex gap-3 my-3 justify-center">
                <div className="flex flex-col justify-center align-items-center my-4">
                  <h3 className='text-center mb-2 font-medium text-lg px-1'>Dokyas</h3>
                  <span className='relative bs-brown h-[2px] w-20 rounded-2xl'>
                    <p className='absolute bs-brown h-[7px] w-[7px] top-[-2.5px] rounded-full end-[-1px]'></p>
                  </span>
                </div>
                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[50px] rounded-br-[50px] p-2 ps-0 pb-1.5">
                  <img className='min-w-[180px] h-60 rounded-[7px] rounded-tl-[50px] rounded-br-[50px]' src="./images/categories-images/bajubandh png.png" alt="" />
                </div>
              </div>
            </div>
            <div className="justify-between gap-4 my-3 xl:flex-col md:flex">
              <div className="flex gap-3 my-3 justify-center">
                <div className="img2 border-2 border-brown rounded-lg rounded-tl-[50px] rounded-br-[50px] p-2 ps-0 pb-1.5">
                  <img className='min-w-[180px] h-60 rounded-[7px] rounded-tl-[50px] rounded-br-[50px]' src="./images/categories-images/bangle png.png" alt="" />
                </div>
                <div className="flex flex-col justify-center align-items-center my-4">
                  <span className='relative bs-brown h-[2px] w-20 rounded-2xl'>
                    <p className='absolute bs-brown h-[7px] w-[7px] start-[-1px] top-[-2.5px] rounded-full'></p>
                  </span>
                  <h3 className='text-center mt-2 font-medium text-lg'>Bracelate</h3>
                </div>
              </div>
              <div className="flex gap-3 my-3 justify-center">
                <div className="flex flex-col justify-center align-items-center my-4">
                  <span className='relative bs-brown h-[2px] w-20 rounded-2xl'>
                    <p className='absolute bs-brown h-[7px] w-[7px] top-[-2.5px] rounded-full end-[-1px]'></p>
                  </span>
                  <h3 className='text-center mt-2 font-medium text-lg'>Kadlis</h3>
                </div>
                <div className="img2 border-2 border-brown rounded-lg rounded-tl-[50px] rounded-br-[50px] p-2 ps-0 pb-1.5">
                  <img className='min-w-[180px] h-60 rounded-[7px] rounded-tl-[50px] rounded-br-[50px]' src="./images/categories-images/bracelete.png" alt="" />
                </div>
              </div>
            </div>
            <div className="justify-between gap-4 my-3 xl:flex-col md:flex">
              <div className="flex gap-3 my-3 justify-center">
                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[50px] rounded-br-[50px] p-2 ps-0 pb-1.5">
                  <img className='min-w-[180px] h-60 rounded-[7px] rounded-tl-[50px] rounded-br-[50px]' src="./images/categories-images/bacha kadli png.png" alt="" />
                </div>
                <div className="flex flex-col justify-center align-items-center my-4">
                  <h3 className='text-center mb-2 font-medium text-lg px-1'>Earrings or Pandant</h3>
                  <span className='relative bs-brown h-[2px] w-20 rounded-2xl'>
                    <p className='absolute bs-brown h-[7px] w-[7px] start-[-1px] top-[-2.5px] rounded-full'></p>
                  </span>
                </div>
              </div>
              <div className="flex gap-3 my-3 justify-center">
                <div className="flex flex-col justify-center align-items-center my-4">
                  <h3 className='text-center mb-2 font-medium text-lg px-1'>Rings</h3>
                  <span className='relative bs-brown h-[2px] w-20 rounded-2xl'>
                    <p className='absolute bs-brown h-[7px] w-[7px] top-[-2.5px] rounded-full end-[-1px]'></p>
                  </span>
                </div>
                <div className="img1 border-2 border-brown rounded-lg rounded-tl-[50px] rounded-br-[50px] p-2 ps-0 pb-1.5">
                  <img className='min-w-[180px] h-60 rounded-[7px] rounded-tl-[50px] rounded-br-[50px]' src="./images/categories-images/bajubandh png.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <button className="mx-auto my-3 tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Explore More</button>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
