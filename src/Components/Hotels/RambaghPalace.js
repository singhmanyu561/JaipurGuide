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

const RambaghPalace = () => {

    const classes = useStyles();
    let history = useHistory()

    const CarouselData = [

        {
            source: 'https://www.micato.com/wp-content/uploads/2018/09/rambagh-palace.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://i0.wp.com/www.travelure.in/wp-content/uploads/2015/08/Rambagh-Palace-6.jpg?fit=2048%2C1366&amp;ssl=1',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://content3.jdmagicbox.com/comp/jaipur/27/0141p141std22427/catalogue/rambagh-palace-secreteriat-jaipur-5-star-hotels-14glvko.jpg?clr=006600',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://image.wedmegood.com/resized/800X/uploads/member/23627/1446278857_002931_02_hotel_courtyard_fountain.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://i2.wp.com/thedailybrunch.com/wp-content/uploads/2020/10/113709102020.jpg?fit=720%2C480&amp;ssl=1',
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
                        <h1 style={{ color: 'red' }}>Rambagh Palace</h1>
                        <h5>Bhawani Singh Road, Jaipur 302005 India</h5>
                        <br></br>
                        <p>About Taj Hotels Resorts and Palaces: Established in 1901, Taj Hotels Resorts and Palaces is 
                            one of Asia's largest and finest group of hotels, comprising over 119 hotels in 61 locations 
                            across India with an additional 17 international hotels in the Maldives, Malaysia, UK, USA, Bhutan,
                             Sri Lanka, Africa and the Middle East. From world-renowned landmarks to modern business hotels, idyllic 
                             beach resorts to authentic Grand Palaces, each Taj hotel offers an unrivalled fusion of warm Indian hospitality,
                              world-class service and modern luxury. For over a century, The Taj Mahal Palace, Mumbai, the iconic 
                              flagship has set a benchmark for fine living with exquisite refinement, inventiveness and warmth. 
                              Taj Hotels Resorts and Palaces is part of the Tata Group, India's premier business house.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                                <h2>Room features</h2>

                                <p>
                                    Allergy-free room <br />
                                    Bathrobes <br />
                                    Air conditioning <br />
                                    Additional bathroom <br />
                                    Housekeeping <br />
                                    Minibar <br />
                                    Flatscreen TV <br />
                                    Extra long beds



                                </p>
                            </div>

                            <div className={classes.right}>
                                <h2>Room types</h2>

                                <p>
                                    Bridal suite <br/>
                                    Non-smoking rooms <br />
                                    Suites <br />
                                    Family rooms <br />
                                    Smoking rooms available <br />



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

export default RambaghPalace;