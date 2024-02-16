import { Component } from "react";

export default class Category extends Component{
    render(){
        return <>
              <section className="category_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Category
          </h2>
        </div>
        <div className="category_container">
          <div className="box">
            <div className="img-box">
              <img src="images/c1.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Design & Arts
              </h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/c2.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Web Development
              </h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/c3.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                SEO Markting
              </h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/c4.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Video Edting
              </h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/c5.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Logo Design
              </h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/c6.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Game Design
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>


        </>
    }
}