import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  addWishListAction,
  deleteWishListAction,
  getAllWishListAction,
} from "../../redux/actions/wishList";

import { getAllCollectionAction } from "../../redux/actions/collection";
import { getAllItemAction } from "../../redux/actions/item";
import { addCartAction, getAllCartAction } from "../../redux/actions/cart";
import { addCompareDataAction } from "../../redux/actions/compare";
import { confirmAlert } from "react-confirm-alert";
import CryptoJS from "crypto-js";

export const Collection = ({
  setIsOpenLoginModal,
  Collections,
  Direction,
  Title,
}) => {
  const [Collection, setCollection] = useState();
  const [isSlider, setIsSlider] = useState(false);
 
  const conditionIsMet = true; // Change this condition as needed

  useEffect(() => {
    const collection = Collections?.find((collection) => {
      return collection?.name?.toLowerCase() === Title?.toLowerCase();
    });
    setCollection(collection);
    if (collection?.itemsIds?.length > 3) {
      setIsSlider(true);
    } else {
      setIsSlider(false);
    }
  }, [Collections, Title]);
  const banner = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: false,
    autoPlaySpeed: 4000,
  };
  const products = {
    infinite: true,
    arrows: false,
    slidesToShow: typeof Collection?.image === "undefined" ? 4 : 3,
    slidesToScroll: 1,
    autoPlay: false,
    autoPlaySpeed: 4000,
  };
  return (
    <>
      <div className="px-3">
        <div className="flex flex-col mt-[100px] lg:flex-row px-2 justify-center gap-5 w-100">
          <div className="text-center h-25 lg:hidden">
            <p className="fs-1 text-center gallient-font fw-bold">
              ~ {Collection?.name} ~
            </p>
          </div>
          {typeof Collection?.image !== "undefined" && (
            <div className="3xs:h-[250px] xs:h-[300px] lg:h-[410px] 3xs:w-100 lg:w-[30%] rounded-3xl overflow-hidden lg:order-2">
              <div className="w-100 rounded-3xl pointer-events-none overflow-hidden border-0 px-2">
                <img
                  className=" 3xs:h-[250px] xs:h-[300px] lg:h-[410px] w-100 rounded-3xl pointer-events-none border-0 object-fit object-right"
                  src="https://www.tanishq.co.in/on/demandware.static/-/Sites/default/dw2e4d2b6b/586x430-copy-8.jpg"
                  alt=""
                />
              </div>
            </div>
          )}
          <div
            className={`w-100 lg:w-[${
              typeof Collection?.image === "undefined" ? "60%" : "60%"
            }] my-auto lg:order-1`}
          >
            <div className="hidden text-center h-25 mb-3 lg:block">
              <p className="my-1 fs-1 text-center title">
                ~ {Collection?.name} ~
              </p>
            </div>
            <div className={isSlider ? "d-block" : "d-none"}>
              <Slider className="w-100 h-100" {...products}>
                {Array?.isArray(Collection?.itemsIds) &&
                Collection?.itemsIds?.length > 0
                  ? Collection?.itemsIds?.map((item) => {
                      return (
                        <>
                          <div
                            key={item?._id}
                            className="max-w-[250px] mx-auto my-3 zoom-in shadow-2 rounded-3 p-[10px] "
                          >
                            <div className="w-fit relative">
                              <Link
                                onClick={() => {
                                  setIsOpenLoginModal(true);
                                  
                                }}
                                // to={
                                //   conditionIsMet
                                //     ? `http://localhost:3001/product?${CryptoJS?.AES?.encrypt(
                                //         item?._id,
                                //         process.env.REACT_APP_ENCRYPT_URL_SECRET
                                //       ).toString()}`
                                //     : "http://localhost:3002"
                                // }
                              >
                                <img
                                  className="w-[250px] !h-[150px] object-cover shadow-1 rounded-3 "
                                  alt=""
                                  src="https://wallpapercave.com/wp/wp7559578.jpg"
                                />
                              </Link>
                            </div>
                            <div className="w-100 pt-3 px-2 overflow-hidden">
                              <div className="">
                                <div class="scroll-container">
                                  <p className="col scroll-content scroll-con m-0 p-0 text-sm font-bold leading-6 text-gray-900 whitespace-nowrap">
                                    {item?.name?.length && item?.name}
                                  </p>
                                </div>
                              </div>
                              <p className="block m-0 p-0 fs-6 font-bold leading-6 text-gray-900">
                                {item?.category_id?.name}
                                <span className="tx-marun"> | </span>
                                {item?.subcategory_id?.name}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })
                  : null}
              </Slider>
            </div>
            <div className={isSlider ? "d-none" : "w-100 d-flex"}>
              {Array?.isArray(Collection?.itemsIds) &&
              Collection?.itemsIds?.length > 0
                ? Collection?.itemsIds?.map((item) => (
                    <>
                      <div
                        key={item?._id}
                        className="max-w-[250px] mx-auto my-3 zoom-in shadow-2 rounded-3 p-[10px] "
                      >
                        <div className="w-fit relative">
                          <Link
                            onClick={() => {
                              setIsOpenLoginModal(true);
                            }}
                            // to={
                            //   conditionIsMet
                            //     ? `http://localhost:3001/product?${CryptoJS?.AES?.encrypt(
                            //         item?._id,
                            //         process.env.REACT_APP_ENCRYPT_URL_SECRET
                            //       ).toString()}`
                            //     : "http://localhost:3002"
                            // }
                          >
                            <img
                              className="w-[250px] !h-[150px] object-cover shadow-1 rounded-3 "
                              alt=""
                              src="https://wallpapercave.com/wp/wp7559578.jpg"
                            />
                          </Link>
                        </div>
                        <div className="w-100 pt-3 px-2 overflow-hidden">
                          <div className="">
                            <div class="scroll-container">
                              <p className="col scroll-content scroll-con m-0 p-0 text-sm font-bold leading-6 text-gray-900 whitespace-nowrap">
                                {item?.name?.length && item?.name}
                              </p>
                            </div>
                          </div>
                          <p className="block m-0 p-0 fs-6 font-bold leading-6 text-gray-900">
                            {item?.category_id?.name}
                            <span className="tx-marun"> | </span>
                            {item?.subcategory_id?.name}
                          </p>
                        </div>
                      </div>
                    </>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
