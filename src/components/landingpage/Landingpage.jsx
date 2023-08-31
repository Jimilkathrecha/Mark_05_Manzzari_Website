import React from "react";
import "../../assets/css/landingpage.css";
import Slider from "react-slick";

export const Landingpage = () => {
  const landing = {
    fade: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 4000,
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
      <div className="block md:hidden 3xs:px-1 lg:px-5 mt-[100px]">
        <div className="lg:px-5 lg:mx-3">
          <div className="flex flex-col lg:flex-row justify-content-between">
            <div className="position-relative d-flex justify-center">
              {/* <div className="w-[150px] h-[150px] position-relative">
                <img
                  className="hidden md:block absolute top-[20%] W-100 h-100 object-cover left-10 rounded-pill"
                  src="https://t3.ftcdn.net/jpg/01/35/08/72/240_F_135087291_CVVR7VzUDlKDnvvW4e5ZlDimzWfaOGZQ.jpg"
                  alt=""
                />
                <span className="dot-line absolute hidden"></span>
              </div> */}
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
                          className="3xs:h-[400px] 3xs:w-100 xs:h-[450px] md:h-[530px] object-cover min-w-[250px] w-100 rounded-t-[450px] rounded-b-3xl pointer-events-none"
                          src="images/Hero-section/main-hero-section.jpg"
                          alt=""
                        />
                        <img
                          className="3xs:h-[400px] 3xs:w-100 xs:h-[450px] md:h-[530px] object-cover min-w-[250px] w-100 rounded-t-[450px] rounded-b-3xl pointer-events-none"
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
              {/* <div className="w-[150px] 3xs:h-[400px] xs:h-[450px] md:h-[550px] relative">
                <div className="overflow-hidden rotate-45 rounded-[30px] W-[150px] h-[150px] absolute bottom-[-30px]">
                  <img
                    className="hidden md:block transform rotate-z-[-45deg] scale-150 -rotate-45 h-100 w-100 object-cover"
                    src="https://cdn0.weddingwire.in/article/3193/3_2/1280/jpg/73913-gold-jewellery-set-rahulprakashtilokani-lead.webp"
                    alt=""
                  />
                </div>
              </div> */}
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
      <div className="hidden md:block w-100 mt-[75px]">
        <div className="flex justify-center w-100 px-5 gap-20">
          <div className="w-[60%]">
            <div className="h-100 flex flex-col justify-center">
              <div className="h-75 flex flex-col font-Philosopher justify-center">
                <h1 className="text-7xl">READY FOR</h1>
                <h1 className="text-7xl">
                  <span className="tx-border">EVERY</span> OCCASION
                </h1>
                <button className="w-fit text-3xl border-2 border-brown px-3 py-2 rounded-full rounded-s-none mt-3 tx-brown">
                  Shop Now
                </button>
              </div>
              <div className="flex h-25 gap-24">
                <div className="flex flex-col text-center">
                  <h1 className="text-5xl">20k</h1>
                  <h1 className="text-2xl text-gray-500">Products</h1>
                </div>
                <div className="flex flex-col text-center">
                  <h1 className="text-5xl">50k</h1>
                  <h1 className="text-2xl text-gray-500">New Clients</h1>
                </div>
                <div className="flex flex-col text-center">
                  <h1 className="text-5xl">40k</h1>
                  <h1 className="text-2xl text-gray-500">Recent Review</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-25 hidden xl:block relative overflow-hidden">
            <div
              className="w-100"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Slider
                className="mx-auto 3xs:w-[240px] xs:w-[330px] rounded-b-[450px] overflow-hidden z-20"
                {...landing}
              >
                <img
                  className="3xs:h-[400px] 3xs:w-100 xs:h-[450px] md:h-[555px] min-w-[250px] w-100 rounded-b-[450px] pointer-events-none"
                  src="images/Hero-section/main-hero-section.jpg"
                  alt=""
                />
                <img
                  className="3xs:h-[400px] 3xs:w-100 xs:h-[450px] md:h-[555px] min-w-[250px] w-100 rounded-b-[450px] pointer-events-none"
                  src="https://i.pinimg.com/originals/22/91/39/229139499d8849fefc968da7596f5be0.jpg"
                  alt=""
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Landingpage2 = () => {
  const landing = {
    speed: 2000,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex w-100 px-5 mt-[100px] align-items-center h-[60vh]">
        <div className="h-100 w-[50%] flex flex-col justify-center">
          <div className="h-75 ps-5 drop-shadow-2xl flex flex-col font-noticia justify-center">
            <h1 className="text-7xl ">READY FOR</h1>
            <h1 className="text-7xl">
              <span className="tx-border">EVERY</span> OCCASION
            </h1>
            <button className="w-fit text-3xl border-2 border-brown px-3 py-2 rounded-full rounded-s-none mt-3 tx-brown">
              Shop Now
            </button>
          </div>
          <div className="flex h-25 mt-4 ps-5 gap-24">
            <div className="flex flex-col text-center">
              <h1 className="text-5xl">20k</h1>
              <h1 className="text-2xl text-gray-500">Products</h1>
            </div>
            <div className="flex flex-col text-center">
              <h1 className="text-5xl">50k</h1>
              <h1 className="text-2xl text-gray-500">New Clients</h1>
            </div>
            <div className="flex flex-col text-center">
              <h1 className="text-5xl">40k</h1>
              <h1 className="text-2xl text-gray-500">Recent Review</h1>
            </div>
          </div>
        </div>
        <Slider
          {...landing}
          className="w-[700px] mx-auto d-md-block rounded-[15px] overflow-hidden"
        >
          <div className="landing col rounded-[50px]">
            <div className="w-[100%] h-[250px] rounded-[50px] text-center">
              <img
                className="w-100 p-2 h-100 object-cover rounded-[50px] my-3 mx-auto"
                src="https://w0.peakpx.com/wallpaper/308/496/HD-wallpaper-%E1%83%A6-girl-jewelry-indian-makeup-actress.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="landing col rounded-[50px]">
            <div className="w-[100%] h-[250px] rounded-[50px] text-center">
              <img
                className="w-100 p-2 h-100 object-cover rounded-[50px] my-3 mx-auto"
                src="https://w0.peakpx.com/wallpaper/872/831/HD-wallpaper-models-model-brunette-earrings-girl-indian-jewelry-mood-necklace-woman.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="landing col rounded-[50px]">
            <div className="w-[100%] h-[250px] rounded-[50px] text-center">
              <img
                className="w-100 p-2 h-100 object-cover rounded-[50px] my-3 mx-auto"
                src="https://w0.peakpx.com/wallpaper/791/553/HD-wallpaper-actresses-rakul-preet-singh-actress-bollywood-brunette-girl-indian-jewelry-model-necklace.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="landing col rounded-[50px]">
            <div className="w-[100%] h-[250px] rounded-[50px] text-center">
              <img
                className="w-100 p-2 h-100 object-cover rounded-[50px] my-3 mx-auto"
                src="https://w0.peakpx.com/wallpaper/88/710/HD-wallpaper-jewelry-model-earrings-indian-necklace-celebrity-black-hair-actress-shriya-saran-bollywood-saree.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="landing col rounded-[50px]">
            <div className="w-[100%] h-[250px] rounded-[50px] text-center">
              <img
                className="w-100 p-2 h-100 object-cover rounded-[50px] my-3 mx-auto"
                src="https://w0.peakpx.com/wallpaper/516/666/HD-wallpaper-models-model-black-hair-earrings-girl-indian-jewelry-necklace-saree-woman.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export const Landingpage3 = () => {
  return (
    <>
      <div className="hidden md:block mt-[100px] h-[70vh]">
        <div className="flex justify-center w-100 px-5">
          <div className="w-50 z-20 flex flex-col">
            <div className="flex flex-col ps-60 p-48 pe-0">
              <h1 className="text-7xl">Bring Sparkle to</h1>
              <h1 className="text-7xl">Everyday Life</h1>
              <button className="w-fit mx-auto mt-5 border-2 border-brown py-3 px-5 rounded-t-[100%] rounded-b-[100%] text-xl">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="w-50 flex mt-6 relative">
            <div className="relative h-[450px] w-[350px] rounded-t-full border-2 border-brown pt-3">
              <img
                className="absolute h-[450px] rounded-t-full right-5 z-10"
                src="./images/womens-necklaces.jpg"
                alt=""
              />
            </div>
            <div className="relative right-40 h-[300px] w-[300px] border-2 border-brown top-80 rounded-tl-full rounded-b-full p-[14px]">
              <img
                className="absolute h-[270px] w-[270px] rounded-tl-full rounded-b-full z-20"
                src="./images/Earings/image 20.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Landingpage4 = () => {
  const landing4 = {
    infinite: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    ltr: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "0px",
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
      <div className="hidden md:block mt-[100px] h-[70vh]">
        <div className="w-100 px-5 my-3">
          <div className="flex w-100 gap-4 px-5 h-[600px]">
            <div className="w-50 h-100">
              <div className="flex flex-col h-100 justify-center px-3">
                <h1 className="text-4xl font-semibold">Manzzri Official</h1>
                <p className="text-xl first-letter:text-3xl first-letter:text-slate-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio at rem nisi incidunt illum accusamus tenetur
                  nesciunt! Tenetur velit, corrupti nobis natus facere repellat
                  quo quibusdam laborum ducimus ullam voluptates ipsa dolores
                  at, perspiciatis quia omnis eligendi repudiandae quas itaque.
                </p>
                <button className="p-3 py-1 mt-3 border-2 border-brown w-fit rounded-l-full rounded-r-full">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="w-50 h-100">
              <div className="w-100 relative landing">
                <Slider className="" {...landing4}>
                  <div className="col h-100 zoomin transition-all min-w-[335px]">
                    <img
                      className="w-100 rounded-t-[450px] rounded-b-[450px] pointer-events-none"
                      src="images/Hero-section/main-hero-section.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col h-100 zoomin transition-all min-w-[335px]">
                    <img
                      className="w-100 rounded-t-[450px] rounded-b-[450px] pointer-events-none"
                      src="https://i.pinimg.com/originals/22/91/39/229139499d8849fefc968da7596f5be0.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col h-100 zoomin transition-all min-w-[335px]">
                    <img
                      className="w-100 rounded-t-[450px] rounded-b-[450px] pointer-events-none"
                      src="images/Hero-section/main-hero-section.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col h-100 zoomin transition-all min-w-[335px]">
                    <img
                      className="w-100 rounded-t-[450px] rounded-b-[450px] pointer-events-none"
                      src="https://i.pinimg.com/originals/22/91/39/229139499d8849fefc968da7596f5be0.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Landingpage5 = () => {
  return (
    <>
      <div className="hidden md:block mt-[150px] h-[85vh]">
        <div className="flex flex-col px-5 h-100 justify-between">
          <div className="">
            <h1 className="text-center gallient-font font-bold">
              Manzzri Official
            </h1>
            <h1 className="mt-4 text-center text-2xl font-semibold gallient-font">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem vitae commodi pariatur doloribus nesciunt officia earum
              quaerat, totam eligendi quisquam nihil autem rerum provident.
              Excepturi, architecto. Tenetur iure ipsam
            </h1>
          </div>
          <div className="flex justify-between gap-4 relative h-[510px]">
            <div className="absolute -top-5 left-0 w-[23%] h-100">
              <img
                className="h-100 object-cover w-75 float-left rounded-tr-[220px]"
                src="./images/hans.jpg"
                alt=""
              />
            </div>
            <div className="absolute left-[25%] w-50 h-[466px] mt-4 px-44 pt-[70px]">
              <div className="bs-brown h-100 rounded-t-full relative overflow-hidden">
                <div className="absolute top-50 start-50 translate-middle">
                  <img
                    className="w-100 "
                    src="https://cdn-homdh.nitrocdn.com/pMtwLKJrTvjZiNwyOmoOfbQoFDWSfUwo/assets/images/optimized/rev-1ef884b/wp-content/uploads/2023/01/pexels-hoa-tran-13219658-removebg-preview-e1672643024304.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-5 right-0 w-[23%] h-100">
              <img
                className="h-100 object-cover w-75 float-right rounded-tl-[220px]"
                src="./images/hans.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Landingpage6 = () => {
  return (
    <>
      <div className="hidden md:block mt-[0px] h-[50vh]">
        <div className="flex px-20 w-100 h-100 my-28 align-items-center justify-between">
          <div className="w-[40%]">
            <div className="flex flex-col">
              <h1 className="text-right text-3xl gallient-font font-semibold">
                Manzzri For Online
              </h1>
              <p className="text-right text-lg italic gallient-font font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit ut in repellendus quis unde et ea nisi consectetur quam
                a expedita asperiores accusantium magnam quas pariatur ipsum,
                blanditiis ad optio.
              </p>
              <img
                className="mt-5 h-[240px] w-[270px] object-cover rounded-tr-full rounded-[800px] shadow-4"
                src="./images/Earings/image 20.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex w-[700px] float-right justify-between relative">
              <div className="absolute left-0 h-[500px] w-[330px] z-10">
                <img
                  className="absolute left-0 bottom-[90px] h-[300px] object-cover border-2 rounded-[20px] rounded-tl-[200px] border-white shadow-4"
                  src="./images/Earings/image 20.jpeg"
                  alt=""
                />
              </div>
              <div className="absolute right-0 h-[500px] w-[450px]">
                <img
                  className="absolute right-0 bottom-[100px] h-[500px] w-[410px] border-2 rounded-[800px] rounded-t-full border-white shadow-4"
                  src="./images/womens-necklaces.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Landingpage7 = () => {
  return (
    <>
      <div className="hidden md:block mt-[100px] h-[90vh]">
        <div className="flex flex-col w-100 h-100 px-5">
          <div className="text-center">
            <h1 className="text-xs">E-Website concept</h1>
            <h1 className="text-xs">By Manzzri Official</h1>
          </div>
          <div className="items-center text-center mt-5">
            <div className="flex justify-center gap-20">
              <span className="gallient-font fw-bold text-8xl">ALOHA</span>
              <span className="items-center my-4 italic gallient-font font-semibold text-xl">
                Modern Jewellery
              </span>
            </div>
            <h1 className="gallient-font fw-bold text-8xl text-right w-[70%]">
              GALA
            </h1>
          </div>
          <div className="flex justify-center relative mt-5">
            <div className="w-[290px] relative">
              <img
                className="h-[370px] rounded-t-full absolute top-[-115px]"
                src="./images/womens-necklaces.jpg"
                alt=""
              />
            </div>
            <div className="ps-5">
              <img
                className="h-64 w-[250px] object-cover rounded-tl-[100px]"
                src="./images/Earings/image 20.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
