import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
import Categories from '../../components/categori/categori'

export default function Allcategories() {
  return (

    <>
      <Header />

      <Categories />

      <center>
        <Link className='m-auto mb-3' to='/home' >
          <button className="m-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Back</button>
        </Link>
      </center>

      <Footer />
    </>

  )
}
