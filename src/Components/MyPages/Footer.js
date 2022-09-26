// import React from 'react';
// import FooterDiscover from '../MyPages/FooterDiscover';
// import logo from '../Assets/jG.gif';
// import { makeStyles } from '@material-ui/core/styles';
// // import backImage from '../Assets/Untitled_design.gif';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//        display:'flex',
//         width: '100%'

//     },

// }))

// const Footer = () =>{

//     const classes = useStyles();
//     return (
//         <>
//             <div className={classes.root} style={{ color: 'white', backgroundImage: `url('https://wallpaperaccess.com/full/1080419.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', opacity: 0.8}}>
//             <FooterDiscover/>
//         <img src={logo} alt="dfdf" style={{ 'height': "150px", marginLeft: 450, borderRadius: 50, marginTop:100}} />
               
//         </div>

//         </>
//     );
// }

// export default Footer;


import React from "react";
import { Container, Row, Col} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Facebook } from "../Assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../Assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../Assets/svg/linkedin.svg";
import { ReactComponent as Instagram } from "../Assets/svg/instagram.svg";
import logo from '../Assets/jG.gif';
// import ScrollToTop from './ScrollToTop'

const useStyles = makeStyles((theme) => ({
    icon:{
        '&:hover': { color: 'white' }
    }

}))

const Footer =()=> {
    const classes = useStyles();
   
        return (
            <div className="subComponent-lg" id="footerBody" style={{ border: '2px solid white',color: 'white', backgroundImage: `url('https://wallpaperaccess.com/full/1080419.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity:0.9}}>
                <Container>
                    <header className="headerTitle text-center" style={{padding:30}}>
                        <p>
                            <b>CAN'T WAIT TO GET INVOLVED</b>
                        </p>
                        <p>
                            <b>CONNECT WITH US NOW</b>
                        </p>
                    </header>
                    <footer className="svg-group text-center" style={{marginTop:100}}>
                        <Row>
                            <Col md="3" xs="6">
                                <div className="svg-card-3">
                                    <a href="#">
                                        <Facebook width="50" height="55" strokeWidth="1" className={classes.icon}/>
                                    </a>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="svg-card-3">
                                    <a href="#">
                                        <Twitter width="55" height="55" strokeWidth="1" className={classes.icon}/>
                                    </a>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="svg-card-3">
                                    <a href="#">
                                        <Linkedin width="55" height="55" strokeWidth="1" className={classes.icon}/>
                                    </a>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="svg-card-3">
                                    <a href="#">
                                        <Instagram width="55" height="55" strokeWidth="1" className={classes.icon}/>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <img src={logo} alt="dfdf" style={{ height:100, borderRadius:'50%'}} />
                        
                        <br/>
                        <p style={{padding:30}}>@copyright | Jaipur Guide</p>
                    </footer>
                </Container>
            </div>
        );
    }


export default Footer;
