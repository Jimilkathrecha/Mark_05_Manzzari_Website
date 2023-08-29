import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header({setIsOpenModal}) {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40);
        });
    }, []);


    return (
        <>
            <header className="nav justify-content-center sticky px-0 top-0 z-10">
                <nav className={scroll ? "dot-bl dot-br nav-bg_white onScrollNavbar mt-3 navbar d-flex justify-content-between py-2 " : "dot-bl dot-br navbar d-flex justify-content-between mt-3 "}>
                    <div className={scroll ? "mx-3 dot-tr dot-tl" : "mx-3"}>
                        <Link to="/home" >
                            <img className="lg:w-[150px] md:w-32 sm:w-24 w-20" src="./images/Png1.png" alt="" />
                        </Link>
                    </div>
                    <div className="nav-contains d-flex justify-content-between gap-2">
                        <div className="container-nav justify-content-between">
                            <div className="menus hidden lg:flex lg:gap-8 xl:gap-10">
                                <Link to="/" >
                                    <p className='sans-regular fs-6'>HOME</p>
                                </Link>
                                <Link to="/brands" >
                                    <p className='sans-regular fs-6'>STORE</p>
                                </Link>
                                <Link >
                                    <p className='sans-regular fs-6'>CATALOGUE</p>
                                </Link>
                                <Link>
                                    <p className='sans-regular fs-6'>COLLECTIONS</p>
                                </Link>
                                <Link to="/multioffers">
                                    <p className='sans-regular fs-6'>OFFERS</p>
                                </Link>
                                <Link >
                                    <p className='sans-regular fs-6'>CONTACT</p>
                                </Link>
                                <Link to="/login" onClick={()=>setIsOpenModal(true)}>
                                    <p className='sans-regular fs-6' >LOGIN</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-icons  d-flex gap-3">
                        <a className='d-flex align-items-center' href=""><span className="material-symbols-outlined fs-3">search</span></a>
                        <Link to="/favorite">
                            <a className='d-flex align-items-center' href=""><span className="material-symbols-outlined fs-3">favorite</span></a>
                        </Link>
                        <Link to="/maincart">
                            <a className='d-flex align-items-center' href=""><span className="material-symbols-outlined fs-3">shopping_bag</span></a>
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
