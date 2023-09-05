import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="h-fit sans-regular font-thin text-white relative overflow-hidden bs-sky-blue rounded-t-3xl">
                {/* <footer className="h-fit sans-regular font-thin text-white relative overflow-hidden"> */}
                <div className="absolute -z-10 w-100 h-100 top-0">
                    <img className='w-100 blur-[7px]' src="https://img.freepik.com/free-vector/elegant-shubh-deepavali-festival-banner-with-text-space-vector_1017-40299.jpg?w=1380&t=st=1693807725~exp=1693808325~hmac=d512d4e36223d47693b133f80e8b4af65715aae11ffc7dd0dade61cde00f53cb" alt="" />
                </div>
                <div className="mx-2 md:mx-5">
                    <div className="d-flex py-4 px-[7%] flex-wrap justify-content-between ">
                        <div className="">
                            <h4 className="tx-yellow mt-1 mb-4 ps-2 fs-3">Manzzri Jewels</h4>
                            <ul className="ps-0 fs-13">
                                <li className="py-2 flex mb-2">
                                    <div className="">
                                        <i className="fas fa-home me-3"></i>
                                    </div>
                                    <div>
                                        <p>204 - Raj Plaza, Palace Road,
                                            <br />
                                            Nr Kunvarjibhai Tower, Rajkot, Pin 360001</p>
                                    </div>
                                </li>
                                <li className="py-2 flex mb-2">
                                    <div className="">
                                        <i className="fas fa-envelope me-3"></i>
                                    </div>
                                    <div>
                                        <p>thadeswardevik@gmail.com</p>
                                    </div>
                                </li>
                                <li className="py-2 flex">
                                    <div className="">
                                        <i className="fas fa-phone me-3"></i>
                                    </div>
                                    <div>
                                        +91 95747 18838
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="h-fit">
                            <div className="mb-4">
                                {/* <p className='fs-3'>Manzzri Jewels</p> */}
                                <p className='tx-yellow fs-5'>Get your special offers, coupons & more...</p>
                            </div>
                            <form novalidate="novalidate" className="mx-auto">
                                <input required="required" id="input-36" placeholder="Your email address" type="email" className="px-3 rounded w-100 p-2" />

                                <div className="w-100 text-start">
                                    <button type="submit" className="mx-auto my-3 px-3 border border-brown rounded tx-yellow">
                                        <span className=" fs-5">Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* <div className="mb-5">
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
                        </div> */}

                        {/* <div className="mb-5 md:text-start">
                            <h4 className="tx-brown mb-4 fs-5">Mobile Apps</h4>
                            <div className='flex md:flex-col gap-3 w-100'>
                                <div className="pt-2 w-50 text-decoration-none">
                                    <img src="./images/play_store.png" className="col" />
                                </div>
                                <div className="pt-2 w-50 text-decoration-none">
                                    <img src="./images/app_store.png" className="col" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className=" border-t-[1px] mx-auto">
                            <div className="text-center py-3">
                                <p className='text-gray-400 mt-'>© Design and develop with ❤️ by Grafizen LLC for Manzzri</p>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-12">
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
                        </div> */}
                    </div>
                </div>
            </footer>
        </>
    )
}