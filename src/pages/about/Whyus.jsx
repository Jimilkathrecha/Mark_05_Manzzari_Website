import React from "react";

const Whyus = () => {
  return (
    <>
      <div className="w-100 mt-[100px]">
        <div className="text-center">
          <p className="my-5 fs-1 text-center gallient-font fw-bold">
            ~ Why Manzzri ~
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row mx-auto justify-center align-items-center w-[80%]">
          <div className="w-100 md:w-50 mx-auto overflow-hidden">
            <div className="mx-auto w-[600px]">
              <video
                className="mx-auto object-top w-100"
                loop
                autoplay="autoplay"
                controls
                muted
              >
                <source src="../../../Jewellery_ad.mp4" type="video/mp4" />
                <source src="../../../Jewellery_ad.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="w-100 md:w-50 mx-auto">
            <div className="flex my-2 px-2 py-2 align-items-center rounded-lg bs-white border-[1px] border-brown shadow-md ">
              <i class="fa-solid fa-shield mx-2 tx-brown"></i>
              <p className="m-0 font-bold">Jewellery evaluation</p>
            </div>
            <div className="flex my-2 px-2 py-2 align-items-center rounded-lg bs-white border-[1px] border-brown shadow-md ">
              <i class="fa-solid fa-shield mx-2 tx-brown"></i>
              <p className="m-0 font-bold">Customised Jewellery design</p>
            </div>
            <div className="flex my-2 px-2 py-2 align-items-center rounded-lg bs-white border-[1px] border-brown shadow-md ">
              <i class="fa-solid fa-shield mx-2 tx-brown"></i>
              <p className="m-0 font-bold">Jewellery cleaning and polishing</p>
            </div>
            <div className="flex my-2 px-2 py-2 align-items-center rounded-lg bs-white border-[1px] border-brown shadow-md ">
              <i class="fa-solid fa-shield mx-2 tx-brown"></i>
              <p className="m-0 font-bold">
                Customised Jewellery manufacturing
              </p>
            </div>
            <div className="flex my-2 px-2 py-2 align-items-center rounded-lg bs-white border-[1px] border-brown shadow-md ">
              <i class="fa-solid fa-shield mx-2 tx-brown"></i>
              <p className="m-0 font-bold">
                In-house jewellery design and manufacturing
              </p>
            </div>
            <div className="flex my-2 px-2 py-2 align-items-center rounded-lg bs-white border-[1px] border-brown shadow-md ">
              <i class="fa-solid fa-shield mx-2 tx-brown"></i>
              <p className="m-0 font-bold">
                Buying and selling of gold and silver bars or coins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
