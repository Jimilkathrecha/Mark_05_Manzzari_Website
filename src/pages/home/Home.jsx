import React from 'react'
import { Landingpage, Landingpage2 } from '../../components/landingpage/Landingpage'
import Categori from '../../components/categori/categori'
import Banner from '../../components/slider/offers'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/Header'
import Styleoflife from '../../components/styleoflife/styleoflife'
// import Modal from '../../components/models/modal'
import { Soulmates } from '../../components/slider/soulmates'
import Spotlight from '../../components/spotlights/Spotlight'
import Kadli from '../../components/slider/kadli'
import Clientgallary from '../../components/slider/Clientgallary'
import Whyus from '../about/Whyus'
import { Features } from '../../components/features/Features'
import { Favorite } from '../../components/favorite/favorit'
import Modal from '../../components/models/modal'

export default function Home({ isOpenLoginModal ,  setIsOpenLoginModal}) {
  return (
    <>
      <Header   setIsOpenLoginModal  = {setIsOpenLoginModal}/>
      {/* <Landingpage /> */}
      <Landingpage2 />
      <Styleoflife />
      <Categori />
      <Spotlight />
      <Favorite />
      <Kadli />
      <Soulmates />
      <Banner />
      <Whyus />
      {/* <Supporter /> */}
      <Features />
      <Clientgallary />
      <Footer />
      <Modal isOpenLoginModal= {isOpenLoginModal} setIsOpenLoginModal  = {setIsOpenLoginModal}  />
    </>
  )
}
