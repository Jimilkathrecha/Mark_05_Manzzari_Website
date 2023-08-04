import React from 'react'
import '../../assets/css/categori.css'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <>
      <div className="main-page2 container-xl d-flex flex-column">
        <p className="my-5 fs-1 text-center gallient-font fw-bold">~ Categories ~</p>
        <div className="fullpage d-flex justify-content-between">
          <div className="main_images d-flex w-75 flex-column justify-content-between gap-3">
            <div className="first_img ">
              <div className="img1">
                <img src="./images/categories-images/bacha kadli png.png" alt="" />
              </div>
              <div className="b-kadli d-flex flex-column justify-content-center align-items-center my-4">
                <h3>Baccha Kadli</h3>
                <span></span>
              </div>
            </div>
            <div className="secound_img ">
              <div className="bajuband d-flex flex-column justify-content-center align-items-center my-4">
                <h3>Bajubandh</h3>
                <span></span>
              </div>
              <div className="img1">
                <img src="./images/categories-images/bajubandh png.png" alt="" />
              </div>
            </div>
          </div>
          <div className="main_images d-flex w-75 flex-column justify-content-between">
            <div className="third_img ">
              <div className="img2">
                <img src="./images/categories-images/bangle png.png" alt="" />
              </div>
              <div className="c-kadli d-flex flex-column justify-content-center align-items-center my-4">
                <span></span>
                <h3 className="mt-2 mb-0">Copper Bangles</h3>
              </div>
            </div>
            <div className="fourth_img ">
              <div className="l-bracelet d-flex flex-column justify-content-center align-items-center my-4">
                <span></span>
                <h3 className="mt-2 mb-0">Ladies Bracelet</h3>
              </div>
              <div className="img2">
                <img src="./images/categories-images/bracelete.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Link to="/allcategories" className='mx-auto my-5'>
          <button className="mx-auto my-3 tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Explore More</button>
        </Link>
      </div>
    </>
  )
}
