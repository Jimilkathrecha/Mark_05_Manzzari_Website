import React from 'react'
import Cart from '../../components/cart/cart'
import { Link } from 'react-router-dom'

export default function Cart1() {
    return (
        <>

            <div className='container-xl'>
                <center>
                    <h1> ~ Selected Order ~ </h1>

                    <div className='main-cart d-flex justify-content-center gap-5'>

                        <div className="cart-photos d-flex flex-column gap-3">
                            <div className='bigimg bg-white p-3'>
                                <img src="./images/image 8.png" alt="" />
                            </div>
                            <div className='smallimg d-flex justify-content-center gap-3 overflow-auto'>
                                <img src="./images/image 9.png" alt="" />
                                <img src="./images/image 12.png" alt="" />
                                <img src="./images/image 15.png" alt="" />
                            </div>
                        </div>

                        <div className="cart-details d-flex flex-column align-items-start ">
                            <a className='text-dark bg-white border-brown rounded px-3 py-1 text-decoration-none' href="">Gold</a>
                            <div className="tittle">
                                <h2 className='my-2'>Earrings</h2>
                            </div>
                            <div className="product_details_review d-flex">
                                <div className="review_star_icon">
                                    <div className="review_star_icon fs-6 mx-2">
                                        <i className="far fa-star non_rated "></i>
                                        <i className="far fa-star non_rated "></i>
                                        <i className="far fa-star non_rated "></i>
                                        <i className="far fa-star non_rated "></i>
                                        <i className="fas fa-star non_rated "></i>
                                    </div>
                                </div>
                                <p className='blur-text'>4.00/5 (124 Review)</p>
                            </div>
                            <div className="details_product_price d-flex align-items-center gap-3 mb-4">
                                <h4 id="main_price fs-4"> ₹ 3,824.15 - ₹ 3,909.15</h4>
                                <span className='fw-light text-decoration-line-through mb-2'>₹ 4,599.00</span>
                            </div>
                            <div className="product_details_content">
                                <ul className='no-bullets p-0 text-start'>
                                    <li className=''>Availability : <span className='blur-text' id="availability">30</span></li>
                                </ul>
                                <ul className='no-bullets p-0 d-flex gap-5 mb-5'>
                                    <li>SKU: <span id="sku_id_li" className='blur-text'>Y100A-Black</span></li>
                                    <li>Category :
                                        <span className='blur-text'>Mobile</span>
                                    </li>
                                    <li>Tag : <span className='blur-text'></span></li>
                                </ul>
                            </div>
                            <div className="single_details_content variant_image d-md-flex align-items-center gap-5">
                                <h5>Image:</h5>
                                <div className="img_div_width d-flex gap-3">
                                    <div className="sku_img_div bg-white p-2">
                                        <img src="./images/image 12.png" alt="#" className="img12 p-1" title="" />
                                    </div>
                                    <div className="sku_img_div bg-white p-2">
                                        <img src="./images/image 15.png" alt="#" className="img15 p-1" title="" />
                                    </div>
                                </div>
                            </div>
                            <div className="single_details_content d-md-flex mt-4">
                                <div className="details_text d-flex align-items-center gap-5">
                                    <h5 className="mb-0">Quantity:</h5>
                                    <div className="product_count">
                                        <input type="text" name="qty" className="qty" id="qty" readonly="" value="1" />
                                        <div className="button-container">
                                            <button className="cart-qty-plus" data-value="+" type="button" value="+">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className="cart-qty-minus" data-value="-" type="button" value="-">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="product_type" className="product_type" value="2" />
                            </div>
                            <div className="single_details_content totle-price d-flex mt-4 align-items-center gap-5">
                                <h5 className="mb-0 align-items-center">Total:</h5>
                                <h2 className='mb-0' id="total_price">₹ 38,249.15</h2>
                            </div>
                            <div className="product_details_btn row mt-4">
                                <div className="d-flex product_action_btn_list gap-3" id="add_to_cart_div">
                                    <button type="button" id="add_to_cart_btn" className="btn_1 w-50 border-0 tx-brown bg-white border-brown px-3 py-2">Add to Cart</button>
                                    <button type="button" id="butItNow" className="btn_1 w-50 buy_now_btn border-0 tx-brown bg-white border-brown px-3 py-2" data-id="1" data-type="product">
                                        <Link className='tx-brown text-decoration-none d-block w-100' to="/promo">
                                            Buy now
                                        </Link>
                                    </button>
                                </div>

                                <div className="d-flex product_action_btn_list my-3 gap-3">
                                    <a className="btn_2 w-50 text-decoration-none bg-white tx-brown p-2" id="wishlist_btn" data-product_id="1" data-seller_id="1">Add to wishlist</a>
                                    <a className="btn_2 w-50 text-decoration-none bg-white tx-brown p-2" id="add_to_compare_btn" data-product_sku_id="#product_sku_id" data-product_type="2">Add To Compare</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Link className='' to='/home' >
                            <button className="tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Back</button>
                        </Link>
                    </div>
                </center>
            </div>
        </>
    )
}
