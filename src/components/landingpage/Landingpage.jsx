import React from 'react'
import '../../assets/css/landingpage.css'

export default function Landingpage() {
  return (
    <>
      <div className="px-5 my-4">
        <div className="px-5 mx-3">
          <div className="main-content justify-content-between">
            <div className="main-img position-relative d-flex">
              <div className="w-[150px] h-[150px] position-relative">
                <img className="absolute top-[20%] left-10 rounded-pill" src="images/Hero-section/bottom-sm-hero-section.jpg" alt="" />
                <span className='dot-line'></span>
              </div>
              <div className="landing-img">
                <div className="line_ position-relative">
                  <div className="line-1 left-[0px] w-100 h-100"></div>
                  <div className='p-[14px]'>
                    <img className="h-[530px] min-w-[250px] w-100 border-[13px] border-brown rounded-t-[450px] rounded-b-[80px] mx-auto mt-2" src="images/Hero-section/main-hero-section.jpg" alt="" />
                  </div>
                  <div className="line-2 right-[-3px] w-100 h-100"></div>
                  <div className="line-3 right-[3px] w-100 h-100"></div>
                </div>
                <span className='dot-line'></span>
              </div>
              <div className="relative w-[150px] h-100">
                <img className="bottom-0 absolute rotate-45 rounded-xl" src="images/Hero-section/top-sm-hero-section.jpg" alt="" />
              </div>
            </div>

            {/* <div className="">
              <div class="type-effect">Web Developer</div>
            </div> */}

            <div className="flex flex-col w-50 h-100 pt-[80px] position-relative px-5 ">
              <div className="back-img absolute top-[75%] start-[25%] translate-middle"></div>

              <div className='w-fit my-3 justify-end ms-auto'>
                <h1 className="m-0 text-5xl font-bold type-effect">Women's Collection</h1>
              </div>

              <div className='w-fit my-3 justify-end ms-auto'>
                <p className="m-0 text-4xl font-bold type-effect">Every Piece Of Jewelry Tells A Story</p>
              </div>
              <div className='w-fit text-end justify-end ms-auto'>
                <p className="type">Show More Love, Spread More Light, And carry A Little Sparkle With You Everywhere You Go.</p>
              </div>

              <button className="my-5 mx-auto tx-brown rounded-lg px-5 border border-brown fs-5 py-1">Discover Now</button>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}
