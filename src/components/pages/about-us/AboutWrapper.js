import React, { Component } from "react";
import ModalVideo from "react-modal-video";

import about1Img from "../../../assets/images/about-1.png";
import about2Img from "../../../assets/images/about-2.png";
import { Link } from "react-router-dom";

class AboutWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        {/* ===============  About wrapper area start =============== */}
        <div className="about-wrapper mt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="about-wrapper-left">
                  <div className="about-img">
                    <img src={about1Img} alt="" className="img-fluid" />
                  </div>
                  <div className="about-video">
                    <img src={about2Img} alt="" className="img-fluid" />
                    <i
                      onClick={() => this.setState({ isOpen: true })}
                      class="flaticon-play-button-arrowhead"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-wrapper-right section-head head-left">
                  <h5>About us</h5>
                  <p>
                  Fast Travels is working with the collaboration of Brightsun Travel, based in London
took the initiative as an online travel agency since 2009 with team who is having
next level expertise in their own domain like Sales team, Customer Service Team,
Issuance team, providing flight reservation, Hotel reservation, birthday celebration
packages, Honeymoon packages, Anniversary packages, you are only one step
away from what you deserve.
Fast Travels has collaborated with several best airlines of the planet providing excellent
services regarding low fares as per customer need & also providing luxury holiday
packages for all Islands that are existing on the earth.
Fast Travels is an online travel platform/travel agency that are certified by ATOL XYZ which
is managed by Civil Aviation Authority. We based in United Kingdom & providing
stunning flight only & Holiday deals with the collaboration of Brightsun Travel (24 hours
a day & 07 days a week).
                  </p>
                  <h5>Our Vision</h5>
                  <p>
                  We are a team of highly focused individuals to identify the customer need & suggest the
best possible remedy to meet the requirement.
                  </p>
                  <h5>Our Mission </h5>
                  <p>
                  Our ultimate goal is to take the real pain for every single individual who are seeking the
travel services at their own door step. Being an online travel agency, we are unique
among all other competitors by providing best rates for flights, Holidays packages &
other luxury services as per customer need. 
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="-tJYN-eG1zk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </React.Fragment>

        {/* ===============  About wrapper area end =============== */}
      </>
    );
  }
}

export default AboutWrapper;
