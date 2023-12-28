import React, { useEffect, useState } from "react";
import {
  Landingpage,
  Landingpage2,
  Landingpage3,
  Landingpage4,
  Landingpage5,
  Landingpage6,
  Landingpage7,
} from "../../components/landingpage/Landingpage";
import Banner from "../../components/slider/offers";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import Styleoflife from "../../components/styleoflife/styleoflife";
import Spotlight from "../../components/spotlights/Spotlight";
import Kadli from "../../components/slider/kadli";
import Whyus from "../about/Whyus";
import { Features } from "../../components/features/Features";
import Category from "../../components/category/Category";
import Supporters from "../../components/supporters/Supporters ";
import Modals from "../../components/models/Modals";
// import Slider from "react-slick";
// import Modal from '../../components/models/modal'
// import { Collection } from "../../components/slider/collection";
// import Clientgallary from "../../components/slider/Clientgallary";
// import { Favorite } from "../../components/favourite/Favourite";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCollectionAction } from "../../redux/actions/collection";

export default function Home({
  isSkipLogin,
  setIsSkipLogin,
  isOpenLoginModal,
  setIsOpenLoginModal,
  isOpenOtpModal,
  setIsOpenOtpModal,
  isOpenRegModal,
  setIsOpenRegModal,
}) {
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

  // const dispatch = useDispatch();
  // const collectionState = useSelector((state) => state?.collectionState);
  // const [Collections, setCollections] = useState([]);

  // useEffect(() => {
  //   dispatch(getAllCollectionAction());
  // }, [dispatch]);

  // useEffect(() => {
  //   const collections = collectionState?.getAllCollection?.filter(
  //     (collection) => {
  //       return collection?.is_active === true;
  //     }
  //   );
  //   setCollections(collections);
  // }, [collectionState?.getAllCollection]);

  return (
    <>
      <Header setIsOpenLoginModal={setIsOpenLoginModal} />
      <div
        id="carouselExampleRide"
        class="carousel carousel-dark slide "
        data-bs-ride="true"
      >

        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="flex-none w-full h-full snap-center">
              <Landingpage />
            </div>
          </div>
        </div>
      </div>

      <Styleoflife setIsOpenLoginModal={setIsOpenLoginModal} />
      <Features />
      <Category setIsOpenLoginModal={setIsOpenLoginModal} />
      <Spotlight setIsOpenLoginModal={setIsOpenLoginModal} />
      <Banner setIsOpenLoginModal={setIsOpenLoginModal} />
      {/*<Collection
        isSkipLogin={isSkipLogin}
        setIsSkipLogin={setIsSkipLogin}
        setIsOpenLoginModal={setIsOpenLoginModal}
        Direction="RTL"
        Title="Soulmates"
        Collections={Collections}
      /> */}
      {/* <Whyus /> */}
      {/* <Supporters /> */}
      {/* <Clientgallary /> */}
      <Footer />
      <Modals
        isOpenLoginModal={isOpenLoginModal}
        setIsOpenLoginModal={setIsOpenLoginModal}
        isOpenOtpModal={isOpenOtpModal}
        setIsOpenOtpModal={setIsOpenOtpModal}
        isOpenRegModal={isOpenRegModal}
        setIsOpenRegModal={setIsOpenRegModal}
      />
    </>
  );
}
