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
// import Modal from '../../components/models/modal'
import { Collection } from "../../components/slider/collection";
import Spotlight from "../../components/spotlights/Spotlight";
import Kadli from "../../components/slider/kadli";
import Clientgallary from "../../components/slider/Clientgallary";
import Whyus from "../about/Whyus";
import { Features } from "../../components/features/Features";
import { Favorite } from "../../components/favorite/favorit";
import Modal from "../../components/models/modal";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollectionAction } from "../../redux/actions/collection";
import Category from "../../components/category/Category";

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

  const dispatch = useDispatch();
  const collectionState = useSelector((state) => state?.collectionState);
  const [Collections, setCollections] = useState([]);

  useEffect(() => {
    dispatch(getAllCollectionAction());
  }, [dispatch]);

  useEffect(() => {
    const collections = collectionState?.getAllCollection?.filter(
      (collection) => {
        return collection?.is_active === true;
      }
    );
    setCollections(collections);
  }, [collectionState?.getAllCollection]);

  return (
    <>
      <Header setIsOpenLoginModal={setIsOpenLoginModal} />

      {/* <Slider className="h-[80vh]" {...Banners}> */}
      <div id="carouselExampleRide" class="carousel carousel-dark slide " data-bs-ride="true">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="flex-none w-full h-full snap-center border">
              <Landingpage />
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="20000">
            <div className="flex-none w-full h-full snap-center border">
              <Landingpage2 />
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="30000">
            <div className="flex-none w-full h-full snap-center border">
              <Landingpage3 />
            </div>
          </div>
          <div class="carousel-item">
            <div className="flex-none w-full h-full snap-center border">
              <Landingpage4 />
            </div>
          </div>
          <div class="carousel-item">
            <div className="flex-none w-full h-full snap-center border">
              <Landingpage5 />
            </div>
          </div>
          <div class="carousel-item">
            <div className="flex-none w-full h-full snap-center border">
              <Landingpage6 />
            </div>
          </div>
          <div class="carousel-item">
            <div className="flex-none w-full h-full snap-center border">
              <Landingpage7 />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex snap-x snap-mandatory scroll-d-none overflow-auto w-200 h-[100vh]"></div> */}
      {/* </Slider> */}

      <Styleoflife />
      <Category />
      <Spotlight />
      <Collection
        Direction="RTL"
        Title="Manzzri's Fevorite"
        Collections={Collections}
      />
      {/* <Favorite /> */}
      <Collection
        Direction="RTL"
        Title="bacha Kadli"
        Collections={Collections}
      />
      <Collection Direction="RTL" Title="Soulmates" Collections={Collections} />
      <Collection
        Direction="RTL"
        Title="bacha Kadli"
        Collections={Collections}
      />
      <Collection
        Direction="RTL"
        Title="Panner Jewells"
        Collections={Collections}
      />
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
