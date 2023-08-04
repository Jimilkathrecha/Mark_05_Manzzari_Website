import React from 'react'
import Landingpage from '../../components/landingpage/Landingpage'
import Categori from '../../components/categori/categori'
import Banner from '../../components/slider/banner'
// import Product from '../../components/product/product'
// import Cart from '../../components/cart/cart'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/Header'
import Styleoflife from '../../components/styleoflife/styleoflife'
import Whyus from '../../components/whyus/whyus'
import Modal from '../../components/models/modal'
// import Bloggrid from '../../components/slider/blogs/bloggrid'

export default function Home() {
  return (
    <>
      <Header />
      <Landingpage />
      <Styleoflife />
      <Categori />
      {/* <Bloggrid /> */}
      {/* <Product /> */}
      <Banner />
      {/* <Cart /> */}
      <Whyus />
      <Footer />
      <Modal />
    </>
  )
}
