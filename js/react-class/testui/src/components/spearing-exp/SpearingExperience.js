import { Component } from "react";

export default class SpearingExperience extends Component{
    render(){
        return <>
         
    <section className="experience_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="img-box">
              <img src="images/experience-img.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  Best Experinced Freelancer Here
                </h2>
              </div>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              </p>
              <div className="btn-box">
                <a href="" className="btn-1">
                  Read More
                </a>
                <a href="" className="btn-2">
                  Hire
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

        </>
    }
}