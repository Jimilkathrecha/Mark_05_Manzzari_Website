import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'

export default function Offers() {
    return (
        <>
            <Header />

            <div className='container-xl d-flex '>
                <img className='w-50 p-3' src="./images/offers/offer-1.png" alt="" />
                <img className='w-50 p-3' src="./images/offers/offer-2.png" alt="" />
            </div>
            <center>
                <Link className='m-auto mb-3' to='/home' >
                    <button className="mx-auto my-4 tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Back</button>
                </Link>
            </center>

            <Footer />
        </>
    )
}
