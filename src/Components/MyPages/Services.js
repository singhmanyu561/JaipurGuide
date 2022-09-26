import React from "react";
import { Container, Row, Col } from "reactstrap";


import { ReactComponent as Trending } from "../Assets/svg/trending-up.svg";
import { ReactComponent as Flag } from "../Assets/svg/flag.svg";
import { ReactComponent as Monitor } from "../Assets/svg/monitor.svg";
import { ReactComponent as MapPin } from "../Assets/svg/map-pin.svg";

const Services = () =>  {
        return (
            <div className="wrapped-services" style={{ border: '2px solid white', color: 'white', background:'#aa8caa',opacity:0.9}}>
                <div className="subComponent" id="servicesBody" style={{}}>
                    <Container>
                        <header className="headerTitle text-center" style={{ marginTop: 0, padding: 20, color: 'white'}}>
                            <h1 >Our Services</h1>
                           
                        </header>
                        <section className="svg-group text-center" style={{ padding: 30 }}>
                            <Row>
                                <Col lg="3" md="6" sm="6">
                                    <div className="svg-card-2" style={{ opacity: 1 }}>
                                        <Trending width="50" height="55" strokeWidth="1" />
                                        <p >Promote Best Tours</p>
                                    </div>
                                </Col>
                                <Col lg="3" md="6" sm="6">
                                    <div className="svg-card-2">
                                        <Monitor width="55" height="55" strokeWidth="1" />
                                        <p>Showcase Tourist Spot</p>
                                    </div>
                                </Col>
                                <Col lg="3" md="6" sm="6">
                                    <div className="svg-card-2">
                                        <Flag width="55" height="55" strokeWidth="1" />
                                        <p>Best Travel Routes</p>
                                    </div>
                                </Col>
                                <Col lg="3" md="6" sm="6">
                                    <div className="svg-card-2">
                                        <MapPin width="55" height="55" strokeWidth="1" />
                                        <p>Tour Guides</p>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </Container>
                </div>
            </div>
        );
    }


export default Services;
