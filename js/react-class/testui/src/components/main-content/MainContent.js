import { Component } from "react";

export default class MainContent extends Component{
    render(){
        return <>
          <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="" />
              <span>
                Spering
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="work.html">Work </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="category.html"> Category </a>
                </li>
              </ul>
              <div className="user_option">
                <a href="">
                  <span>
                    Login
                  </span>
                </a>
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>
            </div>
            <div>
              <div className="custom_menu-btn ">
                <button>
                  <span className=" s-1">

                  </span>
                  <span className="s-2">

                  </span>
                  <span className="s-3">

                  </span>
                </button>
              </div>
            </div>

          </nav>
        </div>
      </header>
      <section className="slider_section ">
        <div className="carousel_btn-container">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <h1>
                        You Can <br />
                        Hire Freelancer <br />
                        Here
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          About Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="offset-md-1 col-md-4 img-container">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <h1>
                        You Can <br />
                        Hire Freelancer <br />
                        Here
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          About Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="offset-md-1 col-md-4 img-container">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <h1>
                        You Can <br />
                        Hire Freelancer <br />
                        Here
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          About Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="offset-md-1 col-md-4 img-container">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>

        </>
    }
}