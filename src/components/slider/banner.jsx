import React, { Component } from "react";
import '../../assets/css/banner.css';

export default function Banner() {
    return (
            <div className="banner-sec w-100 d-flex justify-content-center">

                <div className="container-xl banner-img position-relative mb-5">
                    <img className="pinkimg position-absolute" src="./images/banner-animation/manzzri background.png" alt="" />
                    <p className="position-absolute text-white dancingscript-font fs-2">This one can make you</p>
                    <h3 className="position-absolute text-white cinemasunday-font feel-text">FEEL</h3>
                    <img className="position-absolute img4" src="./images/banner-animation/kadli3.png" alt="" />
                    <h3 className="position-absolute text-white cinemasunday-font unique-text">U NIQUE</h3>
                </div>

            </div>
    );
}