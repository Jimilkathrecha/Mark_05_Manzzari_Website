import React from "react";

export default function Spotlight() {
  return (
    <>
      <div className="row w-[90%] mb-5 mx-auto ">
        <div className="">
          <p className="my-5 fs-1 text-center title">
            ~ Spotlight ~
          </p>
        </div>

        <div className="d-flex flex-wrap justify-center gap-2 w-100">
          <div
            className="w-[100%] sm:w-[24%]"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="rounded-3 overflow-hidden">
              <img
                className="zoom-in w-100"
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/top-category/Platinum-chain.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-[100%] sm:w-[24%] d-flex flex-column gap-2 py-1">
            <div className="rounded-3 overflow-hidden" data-aos="zoom-in"  data-aos-duration="1800">
              <img
                className="zoom-in w-100"
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/top-category/gestone-jewellery-Ring.jpg"
                alt=""
              />
            </div>
            <div className="rounded-3 overflow-hidden" data-aos="zoom-in"  data-aos-duration="1800">
              <img
                className="zoom-in w-100"
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/top-category/platinum-ring.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-[100%] sm:w-[24%] d-flex flex-column gap-2 py-1">
            <div className="rounded-3 overflow-hidden" data-aos="zoom-in"  data-aos-duration="1800">
              <img
                className="zoom-in w-100"
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/top-category/gestone-jewellery-Studs.jpg"
                alt=""
              />
            </div>
            <div className="rounded-3 overflow-hidden" data-aos="zoom-in"  data-aos-duration="1800">
              <img
                className="zoom-in w-100"
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/top-category/Platinum-bracelet.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            className="w-[100%] sm:w-[24%]"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="rounded-3 overflow-hidden">
              <img
                className="zoom-in w-100"
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/top-category/gestone-pendant.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
