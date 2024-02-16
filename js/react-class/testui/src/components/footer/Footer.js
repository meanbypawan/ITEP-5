import { Component } from "react";

export default class Footer extends Component {
    render() {
        return <>
            <section className="info_section ">
                <div className="info_container layout_padding-top">
                    <div className="container">
                        <div className="info_top">
                            <div className="info_logo">
                                <img src="images/logo.png" alt="" />
                                <span>
                                    Spering
                                </span>
                            </div>
                            <div className="social_box">
                                <a href="#">
                                    <img src="images/fb.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/linkedin.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/instagram.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/youtube.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="info_main">
                            <div className="row">
                                <div className="col-md-3 col-lg-2">
                                    <div className="info_link-box">
                                        <h5>
                                            Useful Link
                                        </h5>
                                        <ul>
                                            <li className=" active">
                                                <a className="" href="index.html">Home <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="">
                                                <a className="" href="about.html">About </a>
                                            </li>
                                            <li className="">
                                                <a className="" href="work.html">Work </a>
                                            </li>
                                            <li className="">
                                                <a className="" href="category.html">Category </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <h5>
                                        Offices
                                    </h5>
                                    <p>
                                        Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 offset-lg-1">
                                    <h5>
                                        Information
                                    </h5>
                                    <p>
                                        Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
                                    </p>
                                </div>

                                <div className="col-md-3  offset-lg-1">
                                    <div className="info_form ">
                                        <h5>
                                            Newsletter
                                        </h5>
                                        <form action="">
                                            <input type="email" placeholder="Email" />
                                            <button>
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-md-10 mx-auto">
                                <div className="info_contact layout_padding2">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/location.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        Location
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/mail.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        demo@gmail.com
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-5">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/call.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        Call +01 1234567890
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <footer className="container-fluid footer_section ">
                <div className="container">
                    <p>
                        &copy; <span id="displayDate"></span> All Rights Reserved By
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </div>
            </footer>

        </>
    }
}