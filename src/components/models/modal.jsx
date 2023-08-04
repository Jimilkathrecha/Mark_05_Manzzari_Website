import React from 'react'

export default function Modal() {

    return (
        <>
            
            <div className='signup'>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ModalForm">
                    Login Or Signup
                </button>
                <div className="modal fade" id="ModalForm" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body d-flex">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="myform bg-dark">
                                    <p className="text-center fs-5 mb-2">Login Or Signup</p>
                                    <img className='w-100 align-items-center' src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw68b03088/login-pop-up.jpg" alt="" />
                                    <form>
                                        <div id="floating-label-group" className="phoneno-field my-3">
                                            <div class="label-float label-float-select">
                                                <label className='position-absolute top-0 start-0 tx-brown bg-dark z-1 p-0 px-1 pt-1 ms-1'>Code</label>
                                                <select className='border-brown rounded bg-dark text-white position-relative h-100 px-1' name="Code" id="">
                                                    <option id="+91" value="+91" selected="selected"> +91</option>
                                                    <option id="+91" value="+91" > +92</option>
                                                    <option id="+91" value="+91" > +93</option>
                                                    <option id="+91" value="+91" > +94</option>
                                                </select>
                                            </div>
                                            <div class="label-float">
                                                <input className='border-brown rounded bg-dark text-white px-2' type="text" placeholder=" " />
                                                <label className='tx-brown bg-dark pb-0'>Enter your Number</label>
                                            </div>
                                        </div>
                                        <div className="mb-3 form-check form-checkbox">
                                            <input type="checkbox" className="form-check-input rounded-0" id="exampleCheck1" name="dwfrm_profile_rememberMe" value="true" />
                                            <label className="form-check-label remember-me" for="exampleCheck1">Remember Me</label>
                                        </div>
                                        <p>By continuing, I agree to
                                            <a href="">Terms of Use</a> & <a href="#">Privacy Policy</a>
                                        </p>
                                        <div className='d-flex justify-content-center'>
                                            <button type="submit" className="btn btn-light  rounded px-2 py-1 bg-white">Request OTP</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='side-img'>
                                    <img src="./images/loginimg.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='otp-modal'>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ModalForm2">
                    Verify Mobile OTP
                </button>
                <div className="modal fade" id="ModalForm2" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body d-flex">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="myform bg-dark">
                                    <p className="text-center fs-5 mb-0">Verify Mobile OTP</p>
                                    <form>
                                        <p className='mb-0 text-center'>OTP Sent to mobile number ******7890</p>
                                        <p className='blur-text text-center pt-0'>Enter OTP</p>

                                        <div className='otp-enter d-flex justify-content-between my-5'>
                                            <input className='rounded text-center' maxlength="1" type="text" placeholder='_' />
                                            <input className='rounded text-center' maxlength="1" type="text" placeholder='_' />
                                            <input className='rounded text-center' maxlength="1" type="text" placeholder='_' />
                                            <input className='rounded text-center' maxlength="1" type="text" placeholder='_' />
                                            <input className='rounded text-center' maxlength="1" type="text" placeholder='_' />
                                            <input className='rounded text-center' maxlength="1" type="text" placeholder='_' />
                                        </div>

                                        <p className='blur-text text-center pt-0'>Haven't received the OTP ? Resend in 02:49s</p>
                                        <p>By continuing, I agree to
                                            <a href="">Terms of Use</a> & <a href="#">Privacy Policy</a>
                                        </p>
                                        <div className='d-flex justify-content-center'>
                                            <button type="submit" className="btn btn-light  rounded px-4 py-1 bg-white">Verify OTP</button>
                                        </div>

                                    </form>
                                </div>
                                <div className='side-img'>
                                    <img src="./images/loginimg.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='almost'>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ModalForm3">
                    Almost There!
                </button>
                <div className="modal fade" id="ModalForm3" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body d-flex">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="myform bg-dark">
                                    <p className="text-center fs-3 mb-0">Almost There!</p>
                                    <h6 className="text-center mb-2 p-0">Welcome back. Darshit! Please fill the missing fields.</h6>
                                    <form>
                                        <div className='select-gender'>
                                            <select className='label-float p-2 border-brown rounded w-100 text-white bg-dark' name="mr-mrs" id="">
                                                <option id="mr" value="mr" selected="selected"> MR.</option>
                                                <option id="mrs" value="mrs" > MRS.</option>
                                            </select>
                                        </div>
                                        <div class="label-float">
                                            <input className='border-brown rounded bg-dark text-white px-2 w-100' type="text" placeholder=" " />
                                            <label className='tx-brown bg-dark pb-0'>Enter Full Name</label>
                                        </div>
                                        <div id="floating-label-group" className="phoneno-field my-2">
                                            <div class="label-float label-float-select">
                                                <label className='position-absolute top-0 start-0 tx-brown bg-dark z-1 p-0 px-1 pt-1 ms-1'>Code</label>
                                                <select className='border-brown rounded bg-dark text-white position-relative h-100 px-1' name="Code" id="">
                                                    <option id="+91" value="+91" selected="selected"> +91</option>
                                                    <option id="+91" value="+91" > +92</option>
                                                    <option id="+91" value="+91" > +93</option>
                                                    <option id="+91" value="+91" > +94</option>
                                                </select>
                                            </div>
                                            <div class="label-float">
                                                <input className='border-brown rounded bg-dark text-white px-2' type="text" placeholder=" " />
                                                <label className='tx-brown bg-dark pb-0'>Enter your Number</label>
                                            </div>
                                        </div>
                                        <div class="label-float">
                                                <input className='border-brown rounded bg-dark text-white px-2 w-100' type="text" placeholder=" " />
                                                <label className='tx-brown bg-dark pb-0'>Enter Email ID</label>
                                            </div>
                                        <p className='my-3'>By continuing, I agree to
                                            <a href="">Terms of Use</a> & <a href="#">Privacy Policy</a>
                                        </p>
                                        <div className='d-flex justify-content-center'>
                                            <button type="submit" className="btn btn-light  rounded px-4 py-1 bg-white">Continue</button>
                                        </div>

                                    </form>
                                </div>
                                <div className='side-img'>
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe9639bfc/login_signup/Group-14443.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}