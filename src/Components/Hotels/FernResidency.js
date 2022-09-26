import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherHotels from './OtherHotels';
import SendMessage from '../MyPages/Contact2'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex', margin: 0,
       
    },
    paper1: {
        padding: theme.spacing(10),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        // width:1100,
        background: '#fcd0ae',
        color: 'black',
        opacity: 0.82,
        margin: 20,
        marginLeft: 50
    },

    paper2: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginLeft: 20,
        // width: 200,
        background: 'pink',
        opacity: 0.9,
        margin: 20
    },

    table: {
        // textAlign:'left'
    },

    main:{
        display: 'flex'
    },

    left:{
        marginLeft: 200,
        textAlign: 'left'
    },

    right: {
        marginLeft:200,
        textAlign: 'left'
    }




}));

const FernResidency = () => {

    const classes = useStyles();
    let history = useHistory()
    const CarouselData = [

        {
            source: 'https://ak-d.tripcdn.com/images/220u1800000146xpc18FA_R_550_412_R5_Q70_D.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/4c/1c/09/the-fern-residency.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://lh3.googleusercontent.com/wdUWmQC_Zj1uxoi5xFwjnhfU11XBldnZGxOTJJmBoFzLCbOZNIxEirGUbI58bPOdUPDaJxlHdjruk7m_aE_pzPeyx74=w1000',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://cf.bstatic.com/images/hotel/max1280x900/797/7971803.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://pix10.agoda.net/hotelImages/5248931/-1/f6149d315a445ca8a7f3ecca0de41b21.jpg',
            alter: "Slide 5",
            caption: "Fifth Demo"

        },
    ]


    const nav = () =>{
        history.push('/HotelBooking')
    }
    
    return (
        <>
            {
                localStorage.getItem('login') === 'true'
                    ?
                    <SearchAppBarLogout />
                    :
                    <SearchAppBar />
            }
            <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <div className={classes.root} >
                <Grid item xs={9}>
                    <Paper className={classes.paper1}>
                        <h1 style={{ color: 'red' }}>THE FERN RESIDENCY</h1>
                        <h5>A-13, Govind Marg near Pink Square Mall Raja Park, Jaipur 302004 India</h5>
                        <br></br>
                        <p>The Fern Residency Jaipur is a midscale hotel located in the city center of Jaipur, 
                            best suited for both business and leisure travelers. The hotel offers 85 well-appointed
                             rooms with contemporary design, offering the highest level of comfort. With one multicuisine
                              restaurant (Aura), RestoBar (100 ft Above), large banquet hall (Emerald) with the latest business 
                              services.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                        <h2>Room features</h2>
                        
                        <p>
                                    Air conditioning  <br/>
                                    Dining area  <br />
                                    Housekeeping  <br />
                                    Room service  <br />
                                    Coffee / tea maker <br />
                                    Minibar <br />
                                    Cable / satellite TV <br />
                                    Bath / shower  <br />


                        </p>
                            </div>
                        
                            <div className={classes.right}>
                        <h2>Room types</h2>
                        
                        <p>
                                    Non-smoking rooms   <br/>
                                    Suites  <br />
                                    Family rooms  <br />


                        </p>
                            </div>
                        </div>

                    <Button className={classes.button} onClick={nav} style={{ backgroundColor: 'blue', marginLeft: 100, marginBottom: 20, color: 'white' ,marginLeft:400,marginTop:50}} >Book Now</Button>
                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherHotels />

                    </Paper>
                </Grid>


               
            </div>
                <SendMessage />
                <br></br>
                <Footer />
            </div>
        </>
    );
}

export default FernResidency;