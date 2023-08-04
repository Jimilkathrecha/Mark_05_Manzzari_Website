import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function signUp() {

        var item = { firstname, lastname, email, password }
        console.warn(item)
    }

    return (
        <>
            <section className="text-center text-lg-start">
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card login-card bg_white cascading-right">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Sign up now</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" for="form1">First name</label>
                                                    <input type="text" id="form1" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder='Enter First Name' />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" for="form2">Last name</label>
                                                    <input type="text" id="form2" value={lastname} onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder='Enter Last Name' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3">Email address</label>
                                            <input type="email" id="form3" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Email Address' />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form4">Password</label>
                                            <input type="password" id="form4" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder='Set Password' />
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                            <label className="form-check-label" for="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>
                                        <Link to="/home">
                                            <button onClick={signUp} type="submit" className="btn btn-primary btn-block mb-4">
                                                Sign up
                                            </button>
                                        </Link>
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src="https://source.unsplash.com/400x500/?bangels-jewellery" className="w-100 rounded-3 shadow-4" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}