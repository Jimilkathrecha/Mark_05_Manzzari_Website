import React from 'react'
import '../../assets/css/categori.css'
import { Link } from 'react-router-dom'

export default function Categories() {

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
          <p className="my-5 fs-1 text-center gallient-font fw-bold">~ Categories ~</p>
        </div>
      </div>
      <div className="w-[80%] flex flex-wrap gap-4 mx-auto justify-center">
        {category.map((item) => (
          <div key={item} className="border-anime scale-img shadow zoom-in">
            <div className="content">
              <div className="back">
                <div className="back-content w-1 p-2">
                  <div className="w-[220px] rounded-lg overflow-hidden shadow-2">
                    <img className='w-100 rounded-lg overflow-hidden object-cover' src={item.img} alt="" />
                  </div>
                  <div className="rounded-md">
                    <p className='tx-brown fs-5 font-bold px-2 py-1'>~ {item.name} ~</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
