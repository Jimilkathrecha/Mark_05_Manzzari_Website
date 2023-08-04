import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40);
        });
    }, []);


    return (
        <>
            <header className="nav justify-content-center position-sticky px-0 top-0 z-10">
                <nav className={scroll ? " nav-bg_white onScrollNavbar mt-3 navbar d-flex justify-content-between py-2 " : "bg-black navbar d-flex justify-content-between mt-3 "}>
                    <div className="mx-3 logo1">
                        <Link to="/home" >
                            <img className="logo" src="./images/Png1.png" alt="" />
                        </Link>
                    </div>
                    <div className="nav-contains d-flex justify-content-between gap-2">
                        <div className="container-nav justify-content-between">
                            <div className="menus d-flex gap-5 ">
                                <Link to="/brands" >
                                    <a className='sans-regular fs-6' href="">STORE</a>
                                </Link>
                                <Link to="/bloggrid">
                                    <a className='sans-regular fs-6' href="">CATALOGUE</a>
                                </Link>
                                <Link to="/allproducts">
                                    <a className='sans-regular fs-6' href="">COLLECTIONS</a>
                                </Link>
                                <Link to="/multioffers">
                                    <a className='sans-regular fs-6' href="">OFFERS</a>
                                </Link>
                                <Link >
                                    <a className='sans-regular fs-6' href="">CONTACT</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-icons d-flex gap-3">
                        {/* <div class="search-box position-relative">
                            <button class="btn-search "><i class="fas fa-search tx-brown"></i></button>
                            <input type="text" class="input-search fs-6 rounded-0 " placeholder="Type to Search..." />
                        </div> */}
                        <a className='d-flex align-items-center' href=""><span class="material-symbols-outlined fs-3">search</span></a>
                        <Link to="/favorite">
                            <a className='d-flex align-items-center' href=""><span class="material-symbols-outlined fs-3">favorite</span></a>
                        </Link>
                        <Link to="/maincart">
                            <a className='d-flex align-items-center' href=""><span class="material-symbols-outlined fs-3">shopping_bag</span></a>
                        </Link>

                    </div>
                </nav>
            </header >
            <nav className="container-xl tab-navbar">
                <div className="tab-nav d-flex mt-2 justify-content-between">
                    <div className="bs_ d-flex justify-content-evenly">
                        <div className="menu m-auto">
                            <button>
                                <img onclick="myFunction()" src="./images/menu1.png" alt="" />
                            </button>
                        </div>
                        <div className="search-icon">
                            <a href=""><i className='fa fa-search'></i></a>
                        </div>
                    </div>
                    <div className="tab-logo">
                        <img className="logo" src="./images/Png1.png" alt="" />
                    </div>
                    <div className="hb_icons d-flex justify-content-evenly">
                        <a href=""><i className="far fa-heart"></i></a>
                        <a href=""><i className="fa fa-shopping-bag"></i></a>
                    </div>
                </div>
            </nav>
            <div className="tab-menus" id="sidebar">
                <i className="fa fa-times" onclick="closeFunction()" id="icon"></i>
                <ul className="menu-items-nav">
                    <li><a href="#">STORE</a></li>
                    <li><a href="#">CATALOGUE</a></li>
                    <li><a href="#">COLLECTIONS</a></li>
                    <li><a href="#">OFFERS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </>

    )
}
