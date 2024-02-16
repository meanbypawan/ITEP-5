import { Component } from "react";

export default class Testimonial extends Component{
    render(){
        return <>
              <section className="client_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-10 mx-auto">
            <div className="heading_container">
              <h2>
                Testimonial
              </h2>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="detail-box">
                    <h4>
                      John Hissona
                    </h4>
                    <p>
                      passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box">
                    <h4>
                      John Hissona
                    </h4>
                    <p>
                      passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box">
                    <h4>
                      John Hissona
                    </h4>
                    <p>
                      passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    }
}