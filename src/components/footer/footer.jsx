import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className=" pb-md-10 pb-lg-0 text-white bg-dark">
                <div className="mx-2 md:mx-5 px-2 md:p-5">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="text-center">
                            <div className="tx-brown fs-5 mb-4">
                                get your special offers coupons more
                            </div>
                            <form novalidate="novalidate" className="">
                                <div className="v-input white mb-2 ">
                                    <div className="v-input__control">
                                        <div className="v-input__slot">
                                            <div className="v-text-">
                                                <input required="required" id="input-36" placeholder="Your email address" type="email" className="px-3 rounded w-100 p-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="v-btn my-3 px-3 border border-brown rounded tx-brown">
                                    <span className="v-btn__content fs-5">Subscribe</span>
                                </button>
                            </form>
                        </div>
                        <div className="mb-5">
                            <h4 className="tx-brown mb-4 fs-5"> Useful Links </h4>
                            <ul className="ps-0 fs-13">
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none" aria-current="page">Home</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">All Categories</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">All Brands</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">All Products</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">Offers</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="tx-brown mb-4 fs-5">
                                My Account
                            </h4>
                            <ul className="ps-0 fs-13">
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">Login</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">Purchase History</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">My Wishlist</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">Track Order</a>
                                    </span>
                                </li>
                                <li className="py-2">
                                    <span>
                                        <a href="#" className="tx-white text-decoration-none">My Account</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="tx-brown mb-4 fs-5">Contact Us</h4>
                            <ul className="ps-0 fs-13">
                                <li className="py-2 mb-2">
                                    <div className="icon-color text-gray-400 opacity-50">
                                        <i className="fas fa-home me-3"></i>
                                        Address
                                    </div>
                                    <div>
                                        1329 40th St Apt A Orlando, FL
                                    </div>
                                </li>
                                <li className="py-2 mb-2">
                                    <div className="icon-color text-gray-400 opacity-50">
                                        <i className="fas fa-envelope me-3"></i>
                                        Email
                                    </div>
                                    <div>
                                        support@activesupershop.com
                                    </div>
                                </li>
                                <li className="py-2 mb-2">
                                    <div className="icon-color text-gray-400 opacity-50">
                                        <i className="fas fa-phone me-3"></i>
                                        Phone
                                    </div>
                                    <div>
                                        +91-321-654-0987
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5 text-center ">
                            <h4 className="tx-brown mb-4 fs-5">Mobile Apps</h4>
                            <div className='flex md:flex-col gap-3 w-100'>
                                <div className="pt-2 w-50 text-decoration-none">
                                    <img src="./images/play_store.png" className="col" />
                                </div>
                                <div className="pt-2 w-50 text-decoration-none">
                                    <img src="./images/app_store.png" className="col" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 border-top border-bottom ">
                        <ul className="d-flex flex-wrap ps-0 mb-0">
                            <li className="py-2 pe-4 pe-md-7 col">
                                <span><a href="#" className="tx-white text-decoration-none">Terms &amp; Conditions</a></span>
                            </li>
                            <li className="py-2 pe-4 pe-md-7 col ps-md-3 ps-md-7">
                                <span><a href="#" className="tx-white text-decoration-none">Return Policy</a></span>
                            </li>
                            <li className="py-2 pe-4 pe-md-7 col ps-md-3 ps-md-7">
                                <span><a href="#" className="tx-white text-decoration-none">Warranty Policy</a></span>
                            </li>
                            <li className="py-2 pe-4 pe-md-7 col ps-md-3 ps-md-7">
                                <span><a href="#" className="tx-white text-decoration-none">Privacy Policy</a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="row py-3">
                        <div className="col-md-6 col-12">
                            <div className="lh-1 fs-13">
                                <p><b>THE MZR</b></p>
                                <p className='text-gray-400 mt-3'>© Grafizen International 2023 | Trademarks and brands are the property of their respective owners.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <ul className="d-flex justify-content-end mt-2 ps-0">
                                <li className="social-icon fs-6">
                                    <a href="#" target="_blank" className="hover:bg-blue-900 p-2 rounded-circle text-decoration-none border-1 border-brown transition-colors">
                                        <i className="fab fa-facebook-f">
                                        </i>
                                    </a>
                                </li>
                                <li className="social-icon ms-2 fs-6">
                                    <a href="#" target="_blank" className="hover:bg-blue-500 p-2 rounded-circle text-decoration-none border-1 border-brown transition-colors">
                                        <i className="fab fa-twitter">
                                        </i>
                                    </a>
                                </li>
                                <li className="social-icon ms-2 fs-6">
                                    <a href="#" target="_blank" className="hover:bg-gradient-to-tr from-purple-500 to-pink-500 p-2 rounded-circle text-decoration-none border-1 border-brown transition-colors">
                                        <i className="fab fa-instagram">
                                        </i>
                                    </a>
                                </li>
                                <li className="social-icon ms-2 fs-6">
                                    <a href="#" target="_blank" className="hover:bg-red-600 p-2 rounded-circle text-decoration-none border-1 border-brown transition-colors">
                                        <i className="fab fa-youtube">
                                        </i>
                                    </a>
                                </li>
                                <li className="social-icon ms-2 fs-6">
                                    <a href="#" target="_blank" className="hover:bg-cyan-800 p-2 rounded-circle text-decoration-none border-1 border-brown transition-colors">
                                        <i className="fab fa-linkedin-in">
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}