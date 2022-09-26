import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Award } from "../Assets/svg/award.svg";
import { ReactComponent as Shield } from "../Assets/svg/shield.svg";
import { ReactComponent as Compass } from "../Assets/svg/compass.svg";
import { ReactComponent as Heart } from "../Assets/svg/heart.svg";

const useStyles = makeStyles((theme) => ({
    icon: {
        '&:hover': { color: 'white' }
    },
    svg_card:{
        background: '#afafac',
        color: '#2b2b2b', 
        padding: 30, 
        margin: 10, 
        width: 200, 
        height: 200, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        border:'2px solid white',
        '&:hover': {
             borderRadius: '50%'
        }
    }

}))

const About=()=>{
    let classes = useStyles()
   
        return (
            <div id='about'>
                {/* <MainCarousel /> */}

                <div className="subComponent" id="aboutBody" style={{ border: '2px solid white', color: 'white', background:'#666987',opacity:0.9}}>
                    <Container>
                        <header className="headerTitle text-center" style={{paddingTop:50}}>
                            <h1>About Travel</h1>
                            <p>Tour Guide & Private Guided Tours</p>
                        </header>
                        <section className="svg-group text-center subComponent" style={{ padding: 50 }}>
                            <Row>
                                <Col lg="3" md="6" sm="6">
                                    <div className={classes.svg_card} style={{ }}>
                                        <Award width="48" height="48" strokeWidth="1" />
                                        <p>Best Price Guarantee</p>
                                    </div>
                                </Col>
                                <Col lg="3" md="6" sm="6">
                                    <div className={classes.svg_card} >
                                        <Shield width="48" height="48" strokeWidth="1" />
                                        <p>Trust and Safety</p>
                                    </div>
                                </Col>
                                <Col lg="3" md="6" sm="6">
                                    <div className={classes.svg_card} >
                                        <Heart width="48" height="48" strokeWidth="1" />
                                        <p>Best Travel Agent</p>
                                    </div>
                                </Col>
                                <Col lg="3" md="6" sm="6">
                                    <div className={classes.svg_card} >
                                        <Compass width="48" height="48" strokeWidth="1" />
                                        <p>Travel Insurance</p>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </Container>
                </div>
            </div>
        );
    }


export default About;
