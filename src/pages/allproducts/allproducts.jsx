import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
import Product from '../../components/product/product'

export default function Allproducts() {
    return (

        <>
            <Header />

            <Product />

            <center>
                <Link className='m-auto mb-3' to='/home' >
                    <button className="mx-auto my-4 tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Back</button>
                </Link>
            </center>
            
            <Footer />
        </>

    )
}
