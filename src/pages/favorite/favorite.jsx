import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'

export default function Favorite() {
    return (
        <>
            <Header />
            <div className='container-xl my-5'>
                <div className='w-100 text-center d-flex justify-content-evenly'>

                    <div>
                        <img className='rounded' src="/images/noWish.png" alt="" />
                    </div>
                    <div className='d-flex flex-column justify-content-evenly'>
                        <div>
                            <h4> Your Wishlist Is Empty ! </h4>
                            <p className='text-black'>Add Tanishq To Your Jewellery Wardrobe</p>
                        </div>

                        <div>
                            <Link to="/home">
                                <button className='mx-auto my-2 tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1'>Continue Shoping</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
