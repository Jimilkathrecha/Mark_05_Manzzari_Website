import React from 'react'
// import Header from '../../header/Header'
// import Footer from '../../footer/footer'
import { Link } from 'react-router-dom'

export default function Bloggrid() {
    return (

        <>
            {/* <Header /> */}
            <section id="homeBlog" className="pt-0">
                <div className="container blog_j">
                    <p className="my-5 fs-1 text-center gallient-font fw-bold">~ Blog Update ~</p>
                    <div className="row m0">
                        <div className="col-sm-12">
                            <div className="blog_inner single d-flex">
                                <div className="blog_j_img">
                                    <img alt="" className="img-responsive" src="./images/blog6.png" />
                                </div>
                                <div className="blog_j_text bodybg">
                                    <div className="blog_j_text_inner">
                                        <h3><span>December 2021</span> Lovely Necklaces</h3>
                                        <h4>The diamond shop Lovely Necklaces collection is a varied and vibrant selection of exceptionally
                                            designed pieces adorned with the brand’s renowned precision cut clear and color crystals. Our
                                            necklaces can be perfectly matched with a singular selection of earrings and bracelets.</h4>
                                        <button className="m-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-6 py-1">Read Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="blog_inner d-flex">
                                        <div className="blog_j_img">
                                            <img alt="" className="img-responsive" src="./images/blog1.png" />
                                        </div>
                                        <div className="blog_j_text">
                                            <div className="blog_j_text_inner">
                                                <h3>Lovely Necklaces <span>December 2021</span></h3>
                                                <h4>The diamond shop Lovely Necklaces collection is a varied and .</h4>
                                                <button className="m-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-6 py-1">Read Me</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog_inner d-flex">
                                        <div className="blog_j_img">
                                            <img alt="" className="img-responsive" src="./images/blog5.png" />
                                        </div>
                                        <div className="blog_j_text">
                                            <div className="blog_j_text_inner">
                                                <h3>Lovely Necklaces<span>December 2021</span></h3>
                                                <h4>The diamond shop Lovely Necklaces collection is a varied and .</h4>
                                                <button className="m-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-6 py-1">Read Me</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog_inner d-flex">
                                        <div className="blog_j_img">
                                            <img alt="" className="img-responsive" src="./images/blog7.png" />

                                        </div>
                                        <div className="blog_j_text">
                                            <div className="blog_j_text_inner">
                                                <h3>Lovely Necklaces <span>December 2021</span></h3>
                                                <h4>The diamond shop Lovely Necklaces collection is a varied and .</h4>
                                                <button className="m-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-6 py-1">Read Me</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog_inner d-flex">
                                        <div className="blog_j_img">
                                            <img alt="" className="img-responsive" src="./images/blog3.png" />

                                        </div>
                                        <div className="blog_j_text">
                                            <div className="blog_j_text_inner">
                                                <h3>Lovely Necklaces<span>December 2021</span></h3>
                                                <h4>The diamond shop Lovely Necklaces collection is a varied and .</h4>
                                                <button className="m-auto tx-brown radius-bottom px-5 bg-transparent border border-brown fs-6 py-1">Read Me</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Link className='m-auto mb-3' to='/home' >
                <button className="mx-auto my-4 tx-brown radius-bottom px-5 bg-transparent border border-brown fs-5 py-1">Back</button>
            </Link> */}

            {/* <Footer /> */}
        </>

    )
}
