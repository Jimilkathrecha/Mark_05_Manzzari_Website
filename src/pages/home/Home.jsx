import React from "react";
import {
  Landingpage,
  Landingpage2,
  Landingpage3,
} from "../../components/landingpage/Landingpage";
import Categori from "../../components/categori/categori";
import Banner from "../../components/slider/offers";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import Styleoflife from "../../components/styleoflife/styleoflife";
// import Modal from '../../components/models/modal'
import { Soulmates } from "../../components/slider/soulmates";
import Spotlight from "../../components/spotlights/Spotlight";
import Kadli from "../../components/slider/kadli";
import Clientgallary from "../../components/slider/Clientgallary";
import Whyus from "../about/Whyus";
import { Features } from "../../components/features/Features";
import { Favorite } from "../../components/favorite/favorit";
import Modal from "../../components/models/modal";
import Slider from "react-slick";

export default function Home({ isOpenLoginModal, setIsOpenLoginModal }) {
  const Banners = {
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <>
      <Header setIsOpenLoginModal={setIsOpenLoginModal} />

      <Slider {...Banners}>
        <Landingpage />
        <Landingpage2 />
        <Landingpage3 />
      </Slider>

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
      <Modal
        isOpenLoginModal={isOpenLoginModal}
        setIsOpenLoginModal={setIsOpenLoginModal}
      />
    </>
  );
}
