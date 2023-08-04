import React from 'react'
import '../../assets/css/landingpage.css'

export default function Landingpage() {
  return (
    <>
      <div className="main-page container-xl">
        <div className="main-content justify-content-between">
          <div className="main-img position-relative d-flex">
            <div className="fingers position-relative">
              <img className="position-absolute" src="./images/fingers.jpg" alt="" />
              <span></span>
            </div>
            <div className="landing-img">
              <div className="line_ position-relative">
                <div className="line-1"></div>
                <img className="main-kadli mt-5" src="./images/img1.png" alt="" />
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
              <span></span>
            </div>
            <div className="hands position-relative">
              <img className="position-absolute" src="./images/hands.jpg" alt="" />
              <a href=""></a>
            </div>
          </div>
          <div className="main-text position-relative px-2">
            <h3 className="text-end pt-3 px-3">Women's Collection</h3>
            <h1 className="text-end px-3 ">Every Piece Of Jewelry Tells A Story</h1>
            <p>Show More Love, Spread More Light, And carry A Little Sparkle With You Everywhere You Go.</p>
            <button className="ml-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Discover Now</button>
            <div className="back-img">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
