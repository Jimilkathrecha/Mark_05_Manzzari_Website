import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'


const Productcom = ({ onToggle }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        onToggle(!isToggled);
    };

    return (
        <>
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
                        <span id="1" onClick={handleToggle}>
                            <span>{isToggled ? 'Added to Wishlist +' : ''}</span>

                            <i className={`"far fa-heart fs-3  ${isToggled ? 'fas fa-heart text-danger tx-red' : 'far fa-heart'}"`}></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Productcom;