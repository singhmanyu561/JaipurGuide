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

const HiltonJaipur = () => {

    const classes = useStyles();
    let history = useHistory()

    const CarouselData = [

        {
            source: 'https://r1imghtlak.mmtcdn.com/c3a5d5c6ece511e98a120242ac110005.jpg?&amp;output-quality=75&amp;downsize=520:350&amp;crop=520:350;2,0&amp;output-format=jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://cf.bstatic.com/images/hotel/max1024x768/275/275377631.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://i.pinimg.com/originals/99/51/de/9951de857323a2d3111f86fa47a3b204.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.seoengineers.in/jaipur/wp-content/uploads/2018/02/1-1.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://images.ixigo.com/image/upload/hotel/t_large/hilton-jaipur-jaipur-image-5c996516cdc1f633c079ecec',
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
                        <h1 style={{ color: 'red' }}>Hilton Jaipur</h1>
                        <h5>42 Geejgarh House Hawa Sadak, Jaipur 302006 India</h5>
                        <br></br>
                        <p>Ideally located in the heart of the city, Hilton Jaipur is just 2 miles from the Jaipur 
                            train station and from major tourist attractions, popular shopping destinations, and prime 
                            business hubs. Featuring 179 spacious rooms with four eclectic dining options including 
                            Aurum- global cuisine restaurant, Chaandi- the Indian kitchen, Krystal- the high energy bar
                             and Signature- the rooftop lounge. The hotel offers 24 hours front desk assistance, Wi-Fi, 
                             currency exchange service, laundry with dry cleaning, luggage storage, free parking and spacious 
                             rooms with bathtub, hairdryer, and free toiletries. Zivaya spa, well-equipped fitness center, 
                             and outdoor swimming create enormous options to break away from a hectic routine. Spread across 10,000 sq. ft,
                              Hilton Jaipur provides excellent venues for all social and business purposes that can accommodate 
                              up to 700 guests. There’s no better place to give your kid an amazing vacation experience while having fun 
                              than here at Hilton Jaipur.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                                <h2>Room features</h2>

                                <p>
                                    Allergy-free room  <br/>
                                    Air purifier   <br />
                                    Air conditioning  <br />
                                    Desk  <br />
                                    Dining area  <br />
                                    Coffee / tea maker  <br />
                                    Cable / satellite TV  <br />
                                    Bath / shower  <br />

                                </p>
                            </div>

                            <div className={classes.right}>
                                <h2>Room types</h2>

                                <p>
                                    Mountain view <br/>
                                    Non-smoking rooms  <br />
                                    Suites  <br />
                                    Family rooms  <br />
                                    Smoking rooms available

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

export default HiltonJaipur;