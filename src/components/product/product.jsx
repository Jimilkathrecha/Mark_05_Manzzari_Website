import { useState } from 'react';
import React from 'react'
import '../../assets/css/product.css'
import { Link } from 'react-router-dom'

export default function Product() {
    const [activeId, setActiveId] = useState([]);

    const handleClick = (id) => {
        const UpdateArr = [...activeId]
        const ProductIndex = UpdateArr?.findIndex((product) => {
            return product === id
        })

        if (ProductIndex === -1) {
            UpdateArr.push(id)
        } else {
            UpdateArr.splice(ProductIndex, 1)
        }

        setActiveId(UpdateArr)

    };
    console.log('activeId', activeId)
    return (

        <>
            <div className="product container-xl">
                <div className="main-product d-flex flex-column gap-3">
                    <div className="product_ d-flex flex-wrap gap-4 mt-3">
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 15.png" alt="" />
                                <div className="dis-ribbon"><span>25 % Off</span></div>
                            </div>
                            <div className="pro-text d-block">
                                <h5 className="">
                                    <span className='text-decoration-line-through '>₹ 760</span> ₹ 570
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>

                                    <span id="0">
                                        {activeId?.includes("0") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("0") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("0")}></i>
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 16.png" alt="" />
                                <div className="dis-ribbon"><span>33 % Off</span></div>
                            </div>
                            <div className="pro-text d-block">
                                <h5 position-relative>
                                    <span className='text-decoration-line-through '>₹ 980</span> ₹ 656.6
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>
                                    <span id="1">
                                        {activeId?.includes("1") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("1") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("1")}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 17.png" alt="" />
                                <div className="dis-ribbon"><span>23 % Off</span></div>
                            </div>
                            <div className="pro-text d-block">
                                <h5 position-relative>
                                    <span className='text-decoration-line-through '>₹ 640</span> ₹ 492.8
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>
                                    <span id="2">
                                        {activeId?.includes("2") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("2") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("2")}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 18.png" alt="" />
                            </div>
                            <div className="pro-text d-block">
                                <h5 position-relative>
                                    ₹ 560
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>
                                    <span id="3">
                                        {activeId?.includes("3") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("3") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("3")}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 19.png" alt="" />
                                <div className="dis-ribbon"><span>28 % Off</span></div>
                            </div>
                            <div className="pro-text d-block">
                                <h5 position-relative>
                                    <span className='text-decoration-line-through '>₹ 875</span> ₹ 630
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>
                                    <span id="4">
                                        {activeId?.includes("4") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("4") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("4")}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 21.png" alt="" />
                            </div>
                            <div className="pro-text d-block">
                                <h5 position-relative>
                                    ₹ 364
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>
                                    <span id="5">
                                        {activeId?.includes("5") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("5") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("5")}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 16.png" alt="" />
                                <div className="dis-ribbon"><span>30 % Off</span></div>
                            </div>
                            <div className="pro-text d-block">
                                <h5 position-relative>
                                    <span className='text-decoration-line-through '>₹ 980</span> ₹ 686
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>
                                    <span id="6">
                                        {activeId?.includes("6") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("6") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("6")}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card bodybg rounded-3 p-3 border_radius_lr">
                            <div className="position-relative">
                                <img className='border_radius_lr' src="./images/image 17.png" alt="" />
                                <div className="dis-ribbon"><span>5 % Off</span></div>
                            </div>
                            <div className="pro-text d-block">
                                <h5 position-relative>
                                    <span className='text-decoration-line-through '>₹ 640</span> ₹ 608
                                </h5>
                                <h6 className="">22kt Purity Gold Earring For Women</h6>
                                <div className='d-flex justify-content-between position-relative'>
                                    <Link to="/cart">
                                        <button className="text-decoration-none  border border-brown rounded-3">
                                            <i className="fa fa-cart-shopping tx-brown fs-4"></i><span className=" tx-brown" >Buy Now</span>
                                        </button>
                                    </Link>
                                    <span id="7">
                                        {activeId?.includes("7") ? <span>Added to Wishlist +</span> : ""}
                                        <i className={`${activeId?.includes("7") ? "fas text-danger" : "far"} fa-heart fs-3 position-relative z-1`} onClick={() => handleClick("7")}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Link to="/allproducts" className='m-auto'>
                        <button className="m-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Explore More</button>
                    </Link> */}
                </div>

            </div>
        </>

    )
}
