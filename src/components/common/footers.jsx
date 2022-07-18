import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import ReactWhatsapp from 'react-whatsapp';
import whatsapp from "../../assets/images/WhatsApp5.png"
//Import Image
import secondLogo from "../../assets/images/fastflight.png"
import paymentCard1Img from "../../assets/images/payment/payment-card-1.png"
import paymentCard2Img from "../../assets/images/payment/payment-card-2.png"
import paymentCard3Img from "../../assets/images/payment/payment-card-3.png"
import paymentCard4Img from "../../assets/images/payment/payment-card-4.png"
import paymentCard5Img from "../../assets/images/payment/payment-card-5.png"
import db from "../../firebaseConfig";
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import { width } from "@mui/system";
class Footers extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            attr: {
                showChatbox: false,
                showIcon: true,
                messages: [],

            },
            attr1: {
                showChatbox: false,
                showIcon: true,
                messages: [],

            },
            data: [],
            userToken: '',
            hasError: false
        }
    }
    handleClickIcon = () => {
       
        this.setState({
            attr: {
                ...this.state.attr,
                showChatbox: !this.state.attr.showChatbox,
                showIcon: !this.state.attr.showIcon,
            }
        });
    };
    handleOnSendMessage = async (message) => {
        this.setState({
            attr: {
                ...this.state.attr,
                messages: this.state.attr.messages = [],
            }
        });
        addDoc(collection(db, "Chat"), {
            uname: 'you',
            userid: 1,
            message: message,
            timestamp: new Date(),
            currentClient: this.state.userToken
        }).catch(err => console.error(err))
    };
    componentDidMount() {
        if (localStorage.getItem('user') === null) {
            let userId = uuidv4();
            localStorage.setItem('user', userId);
        }
        this.setState({ userToken: localStorage.getItem('user') })
        this.intiScripts();
        const q = query(collection(db, 'Chat'), orderBy('timestamp', 'asc'))
        onSnapshot(q, (querySnapshot) => {
            let res = querySnapshot.docs.map(doc => {
                return doc.data();
            })
            this.setState({ data: res });
        })


    }
    setImage = (data) => {
        const image = new Image();
        image.src = './../assets/images/payment/payment-card-5.png';
        image.onerror = () => {
        }
        return image.src;
    }
    // into render


    intiScripts() {

        $(document).ready(function () {
            var x, i, j, l, ll, selElmnt, a, b, c;
            x = document.getElementsByClassName("custom-select");
            l = x.length;
            for (i = 0; i < l; i++) {
                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function (e) {
                        var y, i, k, s, h, sl, yl;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        sl = s.length;
                        h = this.parentNode.previousSibling;
                        for (i = 0; i < sl; i++) {
                            if (s.options[i].innerHTML === this.innerHTML) {
                                s.selectedIndex = i;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (k = 0; k < yl; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function (e) {
                    e.stopPropagation();
                    closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }
            function closeAllSelect(elmnt) {
                var x, y, i, xl, yl, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                xl = x.length;
                yl = y.length;
                for (i = 0; i < yl; i++) {
                    if (elmnt === y[i]) {
                        arrNo.push(i)
                    } else {
                        y[i].classList.remove("select-arrow-active");
                    }
                }
                for (i = 0; i < xl; i++) {
                    if (arrNo.indexOf(i)) {
                        x[i].classList.add("select-hide");
                    }
                }
            }
            document.addEventListener("click", closeAllSelect);
            $('.hamburger').on('click', function (event) {
                $(this).toggleClass('h-active');
                $('.main-nav').toggleClass('slidenav');
            });

            $('.header-home .main-nav ul li  a').on('click', function (event) {
                $('.hamburger').removeClass('h-active');
                $('.main-nav').removeClass('slidenav');
            });

            $(".main-nav .fl").on('click', function (event) {
                var $fl = $(this);
                $(this).parent().siblings().find('.sub-menu').slideUp();
                $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
                if ($fl.hasClass('flaticon-plus')) {
                    $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
                } else {
                    $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
                }
                $fl.next(".sub-menu").slideToggle();
            });
            var accountCard = document.querySelectorAll('.account-dropdown')
            var userIcon = document.querySelectorAll('.user-dropdown-icon i')

            userIcon.forEach((el) => {
                el.addEventListener('click', () => {
                    accountCard.forEach((element) => {
                        element.classList.toggle("activeCard")
                    })
                })
            });
            var searchOpen = document.querySelectorAll('.searchbar-open i')
            var searchCard = document.querySelectorAll('.main-searchbar')
            var searchClose = document.querySelectorAll('.searchbar-close i')

            searchOpen.forEach((el) => {
                el.addEventListener('click', () => {
                    searchCard.forEach((el) => {
                        el.classList.add('activeSearch')
                    })
                })
            })
            searchClose.forEach((el) => {
                el.addEventListener('click', () => {
                    searchCard.forEach((el) => {
                        el.classList.remove('activeSearch')
                    })
                })
            });

            window.onclick = function (event) {
                searchCard.forEach((el) => {
                    if (event.target === el) {
                        el.classList.remove('activeSearch')
                    }
                });
                if (!event.target.matches('.user-dropdown-icon i')) {
                    accountCard.forEach((element) => {
                        if (element.classList.contains('activeCard')) {
                            element.classList.remove('activeCard')
                        }
                    })
                }
            };
            $(window).on('scroll', function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 10) {
                    $(".header-area").addClass("sticky");
                } else {
                    $(".header-area").removeClass("sticky");
                }
            });

            $(".preloader").delay(1000).fadeOut("slow");

        });

    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        let result = {
            showChatbox: false,
            showIcon: true,
            messages: [],

        }
        if (this.state.data.length !== 0) {

            this.state.data.map(item => {
                if (item.currentClient === this.state.userToken) {
                    result = {
                        ...result,
                        messages: result.messages.concat(
                            {
                                author: {
                                    username: item.uname,
                                    id: item.userid,
                                    avatarUrl: null,
                                },
                                text: item.message,
                                type: 'text',
                                timestamp: +new Date(),
                            }
                        ),
                    }
                }
            })
        }

        return (
            <>
                {/* <ChatFrame

                    chatbox={
                        <ChatBox
                            onSendMessage={this.handleOnSendMessage}
                            userId={1}
                            messages={result.messages}
                            width={'300px'}
                            showTypingIndicator={true}
                            activeAuthor={{ username: "user2", id: 2, avatarUrl: null }}
                        />
                    }
                    clickIcon={this.handleClickIcon}
                    showChatbox={this.state.attr.showChatbox}
                    showIcon={this.state.attr.showIcon}
                    iconStyle={{ background: 'tranaparent', }}
                >
                    <div className="Greeting" style={{ fontSize: '10px', fontWeight: 'bold', color: '#356ad8' }}>
                        Fast Travels
                    </div>
                </ChatFrame> */}
                <ReactWhatsapp style={{
                    position: 'fixed',
                    bottom: '18%', right: '1%', background: 'transparent', border: 'none', zIndex: '1'
                }} number="+447915634791" message="Hello World!!!" >
                    <img style={{ height: '50px' }} src={whatsapp} alt="" className="img-fluid" />
                </ReactWhatsapp>

                {/* ==============  Footer area start================= */}
                <div className="footer-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="footer-info">
                                    <div className="footer-logo pb-5">
                                        <img style={{ height: '70px' }} src={secondLogo} alt="" className="img-fluid" />
                                    </div>
                                    <div className="footer-social-icons">
                                        <h5>Follow Us:</h5>
                                        <ul>
                                            <li>
                                                {/* <a href="https://www.facebook.com/fastflightofficial" target="_blank"><i className="bx bxl-facebook" /></a> */}
                                                <a  href="#"><i className="bx bxl-facebook" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bx bxl-instagram" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bx bxl-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bx bxl-youtube" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-7">
                                        <div className="footer-links">
                                            <h5 className="widget-title">Contact us</h5>
                                            <div className="contact-box">
                                                <span><i className="bx bx-phone" /></span>
                                                <div>
                                                    <a href="tel:02080902417">0208 090 2417</a>
                                                </div>
                                            </div>
                                            <div className="contact-box">
                                                <span><i className="bx bx-mail-send" /></span>
                                                <div>
                                                    <a href="mailto:info@fasttravels.co.uk">info@fasttravels.co.uk</a>
                                                </div>
                                            </div>
                                            <div className="contact-box">
                                                <span><i className="bx bx-location-plus" /></span>
                                                <div>
                                                    <Link to={"#"}>Office 3021
182-184 High Street
North,
East Ham,
London
E6 2JA.
UK</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-3 col-md-3 col-sm-5">
                                        <div className="footer-links">
                                            <h5 className="widget-title">support</h5>
                                            <div className="category-list">
                                                <ul>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/`} onClick={this.scrollTop} >Flights</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/business-class-flights`} onClick={this.scrollTop}>Business Class Flights</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/destination`} onClick={this.scrollTop} >Destinations</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/airlines`} onClick={this.scrollTop}>Airlines</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/beat-my-quote`} className="sub-item" onClick={this.scrollTop}>Beat My Quote</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/privacy-policy`} onClick={this.scrollTop} >Privacy Policy</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/booking-conditons`} onClick={this.scrollTop}>Booking conditions</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/faqs`} className="sub-item" onClick={this.scrollTop}>FAQs</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer-links payment-links">
                                            <h5 className="widget-title">We Accepts:</h5>
                                            <div className="payment-cards">
                                                <img src={paymentCard2Img} alt="" className="img-fluid" />
                                                <img src={paymentCard1Img} alt="" className="img-fluid" />
                                                {/* <img src={paymentCard3Img} alt="" className="img-fluid" /> */}
                                                <img src={paymentCard4Img} alt="" className="img-fluid" />
                                                {/* <img src={paymentCard5Img} alt="" className="img-fluid" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-5">
                                               
                                                    
                                                        <Link to={`${process.env.PUBLIC_URL}/privacy-policy`} onClick={this.scrollTop} >Privacy Policy</Link> |
                                                   
                                                    
                                                        <Link to={`${process.env.PUBLIC_URL}/booking-conditons`} onClick={this.scrollTop}>Booking conditions</Link> |
                                                   
                                                    
                                                        <Link to={`${process.env.PUBLIC_URL}/faqs`} className="sub-item" onClick={this.scrollTop}>FAQs</Link>
                                                   
                                            </div>
                        <div className="row">
                            <div className="col-lg-12">
                            
                                <div className="copyrigth-area">
                                    
                                {/* <Link to={`#`}>Terms of services</Link>
                                <Link to={`#`}>Privacy Policy</Link> */}
                                    <p><Link style={{marginRight: '10px'}} to={`${process.env.PUBLIC_URL}/terms-conditons`} >Terms of services</Link> | <Link to={`${process.env.PUBLIC_URL}/privacy-policy`} style={{margin: '0px 10px'}} >Privacy Policy</Link> | <Link style={{marginLeft: '10px', marginRight: '30px'}}  to={`#`}>Fast Travels</Link> All rights reserved © 2019 - 2020  <br /><br /><br />

                                        All the flight-inclusive holidays on this website are financially protected by the ATOL scheme. When you pay you will be supplied with an ATOL Certificate. Please ask for it and check to ensure that everything you booked (flights, hotels and other services) is listed on it. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Some of the flights on this website are also financially protected by the ATOL scheme, but ATOL protection does not apply to all flights. This website will provide you with information on the protection that applies in the case of each flight before you make your booking. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. Please see our booking conditions for information, or for more information about financial protection and the ATOL Certificate go to: www.caa.co.uk. ATOL protection does not apply to the other holiday and travel services listed on this website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ==============  Footer area end================= */}
            </>
        );
    }
}

export default Footers;
