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

    main: {
        display: 'flex'
    },

    left: {
        marginLeft: 200,
        textAlign: 'left'
    },

    right: {
        marginLeft: 200,
        textAlign: 'left'
    }
}));

const PearlPalaceHeritage = () => {

    const classes = useStyles();
    let history = useHistory()

    const CarouselData = [

        {
            source: 'https://myeventplanner.in/uploads/hotel.webp',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://pix10.agoda.net/hotelImages/983/983002/983002_16091414380046443534.jpg?s=1024x768',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://r1imghtlak.mmtcdn.com/bb5fed82cf7e11e88cab0242ac110005.jpg?&amp;output-quality=75&amp;downsize=520:350&amp;crop=520:350;7,0&amp;output-format=jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-s/07/01/04/d1/hotel-pearl-palace.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://i2.wp.com/wanderwiles.com/wp-content/uploads/2019/08/20190302_092612.jpg?resize=840%2C630',
            alter: "Slide 5",
            caption: "Fifth Demo"

        },
    ]

    const nav = () => {
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
                        <h1 style={{ color: 'red' }}>Pearl Palace Heritage</h1>
                        <h5>54,Gopal Bari, Lane 2 Near Shiv Mandir, Jaipur 302001 India</h5>
                        <br></br>
                        <p>Pearl Palace Heritage Boutique Hotel is a unique way to experience "Jaipur" the gateway to Rajasthan ,
                             one of India's most vibrant and exotic destinations. Our luxury heritage boutique hotel has rooms 
                             having their own distinctive character, it revives the gracious lifestyles of India's legendary
                              Rajput princes along with various art forms of India . This Heritage boutique hotel combines classic
                               heritage with contemporary elegance . The hotel lays emphasis on quality and understated elegance.
                                From leisure trips to business stays, our personalized services offer you unmatched charisma and 
                                world-class hospitality. For your next trip to the pink city, book your stay at the top boutique 
                                hotel in Jaipur.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                                <h2>Room features</h2>

                                <p>
                                    Bathrobes <br/>
                                    Air conditioning   <br />
                                    Desk  <br />
                                    Housekeeping  <br />
                                    Private balcony  <br />
                                    Coffee / tea maker  <br />
                                    Flatscreen TV  <br />
                                    Bath / shower  <br />


                                </p>
                            </div>

                            <div className={classes.right}>
                                <h2>Room types</h2>

                                <p>
                                    Non-smoking rooms <br/>
                                    Suites <br />
                                    Family rooms <br />


                                </p>
                            </div>
                        </div>
                            <Button className={classes.button} onClick={nav} style={{ backgroundColor: 'blue', marginLeft: 100, marginBottom: 20, color: 'white', marginLeft: 400, marginTop: 50 }} >Book Now</Button>

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

export default PearlPalaceHeritage;