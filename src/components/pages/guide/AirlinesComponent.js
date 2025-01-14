import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import AirLinesData from '../../../airlines.json'
import { connect } from "react-redux";
import airlineDetail from './AirlineDetails';
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot} from 'firebase/firestore';

class GuideComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: []
    
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                this.setState({data: JSON.parse(doc.data().Data)});
    
            })
        })
    
    
    }
    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>Flights</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                <div className="guide-wrapper pt-100">
                    <div className="container">
                        <div className="row">
                            {AirLinesData ?
                                AirLinesData.map((item, i) => {
                                    let en = this.state.data?.filter(d =>d.airlineCode === item.AirlineCode)[0]?.airlneName ? this.state.data?.filter(d =>d.airlineCode === item.AirlineCode)[0]?.airlneName.trim() : null;
                                    console.log(en && en.replace(/\s+/g, "-"))
                                    return(<div className="col-4 col-sm-3 col-md-2">
                                    <div className="guide-card">
                                        <div className="guide-thumb p-3" style={{ border: '2px solid lightgrey' }}>
                                            <Link onClick={() => this.props.currentCountry(item.AirlineCode)} to={`${process.env.PUBLIC_URL}/airline/${en && en.replace(/\s+/g, "-")}`}>
                                                <img src={item.airlineLogo} alt={item.AirlineName} className="img-fluid" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}) : null}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const currentCountry = (currentState) => ({
    type: "SET_CURRENT_COUNTRY",
    payload: currentState,
});
const mapDispatchToProps = (dispatch) => {
    return {
        currentCountry: (payload) => {
            dispatch(currentCountry(payload));
        },
    };
};
export default connect(null, mapDispatchToProps)(GuideComponent);

