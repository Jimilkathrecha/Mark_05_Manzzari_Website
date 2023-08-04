import React from 'react'
import '../../assets/css/cart.css';
import { useState } from 'react';

export default function Cart() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    };
    return (

        <>
            <div className="product-sell container-xl px-2 py-3">
                <div className="pro-main">
                    <div className="pro-image flex-wrap" id="pro-image">
                        <div className="container_">
                            <img src="./images/image 22.png" alt="Avatar" className="image" />
                            <div className="overlay">
                                <a className="text" href="">VIEW MORE</a>
                            </div>
                        </div>
                        <div className="container_">
                            <img src="./images/image 22.png" alt="Avatar" className="image" />
                            <div className="overlay">
                                <a className="text" href="">VIEW MORE</a>
                            </div>
                        </div>
                        <div className="container_">
                            <img src="./images/image 22.png" alt="Avatar" className="image" />
                            <div className="overlay">
                                <a className="text" href="">VIEW MORE</a>
                            </div>
                        </div>
                        <div className="container_">
                            <img src="./images/image 22.png" alt="Avatar" className="image" />
                            <div className="overlay">
                                <a className="text" href="">VIEW MORE</a>
                            </div>
                        </div>
                        <div className="container_">
                            <img src="./images/image 22.png" alt="Avatar" className="image" />
                            <div className="overlay">
                                <a className="text" href="">VIEW MORE</a>
                            </div>
                        </div>
                        <div className="container_">
                            <img src="./images/image 22.png" alt="Avatar" className="image" />
                            <div className="overlay">
                                <a className="text" href="">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="pro-image-tab justify-content-center " id="pro-image-tab">
                        <div className="big-image">
                            <div className="container_1 product1">
                                <i className="far fa-heart" onClick={handleClick}>
                                </i>
                                {isShown && (
                                    <div>
                                        <i className="fas fa-heart" id="heart1"></i>
                                    </div>
                                )}
                                <img src="./images/image 22.png" id="main" onclick=" change(this.src)" alt="" />
                            </div>
                        </div>
                        <div className="small-images gap-2">
                            <div className="container_2 product2">
                                <img src="./images/image 15.png" onclick="change(this.src)" alt="" />
                            </div>
                            <div className="container_2 product3">
                                <img src="./images/image 16.png" onclick="change(this.src)" alt="" />
                            </div>
                            <div className="container_2 product4">
                                <img src="./images/image 17.png" onclick="change(this.src)" alt="" />
                            </div>
                            <div className="container_2 product5">
                                <img src="./images/image 18.png" onclick="change(this.src)" alt="" />
                            </div>
                            <div className="container_3">
                                <a href=""> VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="product-text">
                        <div className="heading mb-3">
                            <h3 className="mb-0">MAJESTIC GOLD EARRING</h3>
                            <i className="fa-solid fa-star"> 4.7</i>
                        </div>
                        <h6 className="">Its Classy, Its Rendy And Most Of
                            All, Its Budget Friendly. Check Out
                            This Beautiful Gold Ear Studs Its Classy, Its Rendy And Most Of
                            All, Its Budget Friendly. </h6>
                        <div className="price d-flex justify-content-between align-items-center mt-3">
                            <h3>₹ 980</h3>
                            <i className="fa-solid fa-star"> 4.7</i>
                        </div>
                        <h6 className="mt-2">Inclisive Of All Taxes</h6>
                        <h6 className="mt-4">22KT PURITY GOLD EARRINGS FOR WOMEN</h6>
                        <div className="pro-btn d-flex justify-content-between">
                            <a className="px-3 py-1" href="">One Size</a>
                            <i className="far fa-heart" onclick="thisFunction()">
                                <i className="fa-solid fa-heart" id="heart2"></i>
                            </i>
                        </div>
                        <div className="atb-btn my-4">
                            <a href="">Add To Bag</a>
                        </div>
                        <div className="plus-btn justify-content-between align-items-center py-3 mt-2">
                            Delivery And Return Details
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <div className="plus-btn justify-content-between align-items-center py-3">
                            The Finar Details
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <div className="plus-btn justify-content-between align-items-center py-3">
                            Check Store Availability
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}