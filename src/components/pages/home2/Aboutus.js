import React, { Component } from 'react'
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot} from 'firebase/firestore';

export default class Aboutus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            data: []
        };
    }
    componentDidMount() {
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                this.setState({data: JSON.parse(doc.data().Data)});
    
            })
        })
    }
    
    render() {
        const destinationsOptions = {
            stagePadding: 1,
            items: 3,
            loop: true,
            margin:20,
            smartSpeed: 1500,
            autoplay: true,
            dots: false,
            nav: true,
            navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots : false
                },
                600:{
                    items:2,
                    nav:false,
                    dost : false,
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true
                }
            }
        };
        let countryList = this.state.data.filter((v,i,a)=>a.findIndex(v2=>(v2.country === v.country))===i);
        console.log(countryList);
        return (
            <>
                <div className="about-wrapper mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-40">
                                    <h5>About Us</h5>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-wrapper-right">
                                    <h5>INTRODUCTION</h5>
                                    <p>Fast Travel (UK) Ltd. provides travel-related services in the UK through its office in West London through a range of products. Fast Travel offers 3 distinct platforms to its customers:
Traveasy.com - a flight engine operating in the meta search arena
fasttravels.co.uk - a leisure product made for creating worldwide holidays, cruises and tours and for providing the best air fares for visiting family and relatives.
Premier - a concierge service for High Net Worth companies and SME's.
Through these services the company offers range of travel products including flights, hotels, car hire, transfers, insurance etc. Fast Travels has been ranked within the top 30 independent UK travel companies.
                                    </p>
                                    <h5>COMPANY'S ACHIEVEMENTS</h5>
                                    <p>The company was formed in 1986. From then on the company has grown to handling around 380,000 passengers per year to all destinations around the globe. These passengers encompass both leisure and corporate travel. By identifying key markets the business has grown, however Fast Travel still strives every day to improve the service to clients.
                                    
                                    The company was formed in 1986. From then on the company has grown to handling around 380,000 passengers per year to all destinations around the globe. These passengers encompass both leisure and corporate travel. By identifying key markets the business has grown, however Fast Travel still strives every day to improve the service to clients.</p>
                                    <h5>THE TEAM </h5>
                                    <p>Between the offices the company employs almost 250 staff members. The back office processing is accompanied by ticketing and sales via a call centre. The combined years of expertise & knowledge enables easy assistance to our customers in all travel fields. The IT team is in-house, which ensures that the latest innovations in technology are adopted on both desktop and mobile applications. Fast Travels provides 24 /7 services for clients and suppliers alike.
</p>
<h5>THE PRODUCTS </h5>
                                    <p>Fast Travels chooses markets after studying the needs of clients. There are products made for the online traveller and the corporate traveller for almost every destination. From our database, destinations of our passengers are reviewed and new products are added such as cruises to ensure that we are offering a full solution. The strategy is to continue growth with the use of technology and travel experience of the travel teams.
</p>
<h5>GUARANTEES AND WARRANTIES  </h5>
                                    <p>The company has been licensed under Air Travellers Organisers' License granted by Civil Aviation under 3853 authority since 1994, and also operates by the code of conduct operated by ABTA under its license K1888. This means that any travel booked with Fast Travels is financially protected.
 </p>


 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <React.Fragment>
                <div className="destinations-area">
               <div className="container">
                            <div className="row">

                                 <div className="col-lg-3 col-md-3">
                                    <div className="package-slider-wrap">
                                        <img src={about2Img} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                    {this.state.data.length !== 0 ? <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                        {countryList.map(item => {
                                            // console.log(item.arivalCity)
                                                    return (
                                                        <div className="package-card">
                                                            <div className="package-thumb">
                                                                <Link to={`${process.env.PUBLIC_URL}/destination-detail/${item.country}/${item.arivalCity}/${item.fares}`}>
                                                                    <img src={`/assets/images/${item.arivalCity}.png`} alt="" className="img-fluid" />
                                                                </Link>
                                                            </div>
                                                            <div className="package-details">
                                                                <div className="package-info">
                                                                    <Link to={`${process.env.PUBLIC_URL}/destination-detail/${item.country}/${item.arivalCity}/${item.fares}`}>
                                                                    <h5><span style={{fotSize: '12px'}}>From</span><span style={{fotSize: '30px', color: '#356ad8' }}> £{item.fares}</span>/Per Person
                                            <img style={{ height: '50px' }} src={AirlinesData.filter(d => d.AirlineCode === item.airlineCode)[0].airlineLogo} alt="" />
                                            </h5>
                                             </Link>
                                          
                                        </div>
                                                                <h3><i className="flaticon-arrival" />
                                                                    <Link onClick={() => this.props.currentCountry(item.country)} to={`${process.env.PUBLIC_URL}/destination-detail/${item.country}/${item.arivalCity}/${item.fares}`} style={{fontSize: '15px'}}>{item.arivalCity}</Link>
                                                                </h3>
                                                                <div className="col-lg-6" style={{color: '#356ad8', fontWeight: '700'}}>
                                                <a href="tel:02080902417"><input  style={{borderRadius: '5px', border: 'none'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>
                                                </div> </div>
                                                        </div>
                                                    )
                                        })}
                                    </OwlCarousel> : null}
                                </div>
                            </div>
                            </div>
                            </div>
                </React.Fragment> */}
            </>
        )
    }
}
