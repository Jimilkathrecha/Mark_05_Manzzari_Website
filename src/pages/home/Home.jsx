import React from "react";
import {
  Landingpage,
  Landingpage2,
  Landingpage3,
  Landingpage4,
  Landingpage5,
  Landingpage6,
  Landingpage7,
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
    autoPlay: false,
    autoPlaySpeed: 3000,
    speed: 2000,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <>
      <Header setIsOpenLoginModal={setIsOpenLoginModal} />

      {/* <Slider {...Banners}> */}
      <div className="flex snap-x snap-mandatory scroll-d-none overflow-auto w-200 h-[100vh]">
        <div className="flex-none w-full h-full snap-center border">
          <Landingpage />
        </div>
        <div className="flex-none w-full h-full snap-center border">
          <Landingpage2 />
        </div>
        <div className="flex-none w-full h-full snap-center border">
          <Landingpage3 />
        </div>
        <div className="flex-none w-full h-full snap-center border">
          <Landingpage4 />
        </div>
        <div className="flex-none w-full h-full snap-center border">
          <Landingpage5 />
        </div>
        <div className="flex-none w-full h-full snap-center border">
          <Landingpage6 />
        </div>
        <div className="flex-none w-full h-full snap-center border">
          <Landingpage7 />
        </div>
      </div>

      {/* </Slider> */}

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
