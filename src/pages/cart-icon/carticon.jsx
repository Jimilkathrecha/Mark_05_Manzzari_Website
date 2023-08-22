import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'

export default function Carticon() {
    return (
        <>
            <Header />

            <div className='container-xl my-5'>
                <div className='w-100 text-center d-flex justify-content-center flex-column'>
                    <img className='h-[200px]' src="/images/emptybag.svg" alt="" />
                    <h4 className='mt-5'> YOUR CART IS EMPTY </h4>
                    <Link to="/home">
                        <button className='mx-auto my-2 tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1'>Continue Shoping</button>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}
