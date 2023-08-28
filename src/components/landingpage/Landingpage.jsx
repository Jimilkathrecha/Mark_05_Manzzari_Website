import React from "react";
import "../../assets/css/landingpage.css";
import Slider from "react-slick";

export default function Landingpage() {
  const landing = {
    fade: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centermode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="3xs:px-1 lg:px-5 my-4">
        <div className="lg:px-5 lg:mx-3">
          <div className="flex flex-col lg:flex-row justify-content-between">
            <div className="position-relative d-flex justify-center">
              <div className="w-[150px] h-[150px] position-relative">
                <img
                  className="hidden md:block absolute top-[20%] W-100 h-100 object-cover left-10 rounded-pill"
                  src="https://t3.ftcdn.net/jpg/01/35/08/72/240_F_135087291_CVVR7VzUDlKDnvvW4e5ZlDimzWfaOGZQ.jpg"
                  alt=""
                />
                <span className="dot-line absolute hidden"></span>
              </div>
              <div className="z-10 h-fit">
                <div className="line_ position-relative">
                  <div className="line-1 left-[0px] w-100 h-100"></div>
                  <div className="p-[14px]">
                    <div className="border-[6px] border-brown rounded-t-[450px] rounded-b-[80px] mx-2 my-2 overflow-hidden">
                      <Slider
                        className="xs:w-[330px] 3xs:w-[240px]  rounded-t-[450px] overflow-hidden z-20"
                        {...landing}
                      >
                        <img
                          className="3xs:h-[400px] 3xs:w-100 xs:h-[450px] md:h-[530px] min-w-[250px] w-100 rounded-t-[450px] rounded-b-3xl pointer-events-none"
                          src="images/Hero-section/main-hero-section.jpg"
                          alt=""
                        />
                        <img
                          className="3xs:h-[400px] 3xs:w-100 xs:h-[450px] md:h-[530px] min-w-[250px] w-100 rounded-t-[450px] rounded-b-3xl pointer-events-none"
                          src="https://i.pinimg.com/originals/22/91/39/229139499d8849fefc968da7596f5be0.jpg"
                          alt=""
                        />
                      </Slider>
                    </div>
                  </div>
                  <div className="line-2 right-[-3px] w-100 h-100"></div>
                  <div className="line-3 right-[3px] w-100 h-100"></div>
                </div>
                <span className="dot-line"></span>
              </div>
              <div className="w-[150px] 3xs:h-[400px] xs:h-[450px] md:h-[550px] relative">
                <div className="overflow-hidden rotate-45 rounded-[30px] W-[150px] h-[150px] absolute bottom-[-30px]">
                  <img
                    className="hidden md:block transform rotate-z-[-45deg] scale-150 -rotate-45 h-100 w-100 object-cover"
                    src="https://cdn0.weddingwire.in/article/3193/3_2/1280/jpg/73913-gold-jewellery-set-rahulprakashtilokani-lead.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="md:w-100 md:text-center lg:flex flex-col lg:w-50 h-100 3xs:pt-[20px] xs:pt-[40px] md:pt-[60px] lg:pt-[80px] position-relative lg:pe-5">
              <div className="bs-light-brown h-[445px] rounded-2xl absolute md:w-[100%] md:top-[-70%] md:end-[-100%] lg:w-[150%] lg:top-[85%] lg:start-[25%] translate-middle -z-10"></div>

              <div className="w-fit 2xs:my-2 3xs:mx-auto lg:my-3 2xs:mx-auto xs:mx-auto sm:mx-auto md:mx-auto lg:mx-0 lg:ms-auto">
                <h1 className="3xs:text-base 3xs:mx-auto 2xs:text-lg 2xs:mx-auto xs:text-2xl md:text-3xl m-0 xl:text-5xl font-bold type-effect lg:text-3xl">
                  Women's Collection
                </h1>
              </div>

              <div className="w-fit 2xs:my-2 3xs:mx-auto lg:my-3 2xs:mx-auto xs:mx-auto sm:mx-auto md:mx-auto lg:mx-0 lg:ms-auto">
                <p className="3xs:text-base 3xs:mx-auto 2xs:text-lg 2xs:mx-auto xs:text-2xl md:text-3xl m-0 xl:text-4xl font-bold type-effect lg:text-3xl">
                  Every Piece Of Jewelry Tells A Story
                </p>
              </div>
              <div className="w-fit text-end md:mx-auto justify-end ms-auto">
                <p className="hidden lg:flex lg:text-lg">
                  Show More Love, Spread More Light, And carry A Little Sparkle
                  With You Everywhere You Go.
                </p>
              </div>

              <button className="block items-center my-4 mx-auto tx-brown rounded-lg px-5 border border-brown fs-5 py-1">
                Discover Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
