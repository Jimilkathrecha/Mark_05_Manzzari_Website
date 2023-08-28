import React from 'react'
import Landingpage from '../../components/landingpage/Landingpage'
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
import Supporters from '../../components/supporters/Supporters'
import Whyus from '../about/Whyus'
import { Features } from '../../components/features/Features'
import { Favorite } from '../../components/favorite/favorit'

export default function Home() {
  return (
    <>
      <Header />
      <Landingpage />
      <Styleoflife />
      <Categori />
      <Spotlight />
      <Favorite />
      <Kadli />
      <Soulmates />
      <Banner />
      <Whyus />
      <Supporters />
      <Features />
      <Clientgallary />
      <Footer />
      {/* <Modal /> */}
    </>
  )
}
