import React, { Component } from "react";
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            sent: false
        };
        this.sendEmail = this.sendEmail.bind(this)
    }
    componentDidMount(){
        this.scrollTop();
    }
    sendEmail = (e, data) => {
        e.preventDefault();
    console.log(this.form)
        emailjs.sendForm('service_mvzun0t', 'template_mx08mb9', this.form.current, 'Qu2OlbN20RhUB5zHG')
          .then((result) => {
              console.log(result.text);
              this.setState({sent: true});
          }, (error) => {
            this.setState({sent: false});
              console.log(error.text);
          });
      };

    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  render() {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Contact US</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            <div className="contact-wrapper pt-90">
                <div className="contact-cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-arrival" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Address</h5>
                                        <p>Office 3021
182-184 High Street
North,
East Ham,
London
E6 2JA.
UK</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-customer-service" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Email &amp; Phone</h5>
                                        <p>0208 090 2417
                                        info@fasttravels.co.uk</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-thumbs-up" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Social Media</h5>
                                        <ul className="contact-icons">
                                        <li>
                                                <a href="#" ><i className="bx bxl-facebook" /></a>
                                                {/* <a href="https://www.facebook.com/fastflightofficial" target="_blank"><i className="bx bxl-facebook" /></a> */}
                                            </li>
                                            <li>
                                                <a href="#" ><i className="bx bxl-facebook" /></a>
                                                {/* <a href="https://www.instagram.com/fastflightofficial/" target="_blank"><i className="bx bxl-instagram" /></a> */}
                                            </li>
                                            <li>
                                                <a href="#" ><i className="bx bxl-twitter" /></a>
                                                {/* <a href="https://twitter.com/fastflight10" target="_blank"><i className="bx bxl-twitter" /></a> */}
                                            </li>
                                            <li>
                                                <a href="#" ><i className="bx bxl-youtube" /></a>
                                                {/* <a href="https://www.youtube.com/channel/UCSZpGqHBtA5pqwQpZK7hNIQ" target="_blank"><i className="bx bxl-youtube" /></a> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-inputs pt-100">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-details">
                                    <ul className="office-clock">
                                        <li>
                                            <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Open Hour</h5>
                                                <p>24/7</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form">
                                    <form ref={this.form} onSubmit={e => this.sendEmail(e)} >
                                        <h5 className="contact-d-head">Contact Us</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input className="inputContainer" name="name" type="text" placeholder="Full Name" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="inputContainer" type="text" placeholder="Subject" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="inputContainer"  name="email" type="email" placeholder="Your Email" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="inputContainer" name="phone" type="text" placeholder="Phone" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea cols={30} rows={7} name="message" placeholder="Write Message" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </div>
                                    </form>
                                    {this.state.sent ? <p className="mt-5">Your message has been sent. We will contact you soon.</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
}

export default AboutUs;
