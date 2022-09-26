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
import OtherHotels from './OtherHotels'
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

const JaiMahal = () => {

    const classes = useStyles();
    let history = useHistory()

    const CarouselData = [

        {
            source: 'https://cf.bstatic.com/images/hotel/max1024x768/195/195300629.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.weddingsutra.com/images/taj-jai-mahal-palace-jaipur-2.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://r1imghtlak.mmtcdn.com/a7129122237111e8bdbc025f77df004f.jpg?&amp;output-quality=75&amp;downsize=520:350&amp;crop=520:350;2,0&amp;output-format=jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://r1imghtlak.mmtcdn.com/a8cf66a2237111e8a8d6025f77df004f.jpg?&amp;output-quality=75&amp;downsize=520:350&amp;crop=520:350;2,0&amp;output-format=jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-s/13/02/c9/13/taj-jai-mahal-palace.jpg',
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
                        <h1 style={{ color: 'red' }}>Jai Mahal Palace</h1>
                        <h5>Jacob Rd Civil Lines, Jaipur 302006 India</h5>
                        <br></br>
                        <p>Located close to the main shopping centre and historical monuments, Jai Mahal Palace is 
                            ideal for exploring the fascinating city of Jaipur. The majestic palace, a vast complex of 
                            regal rooms, pretty pavilions and charming colonnades set amidst 18 acres of landscaped gardens,
                             traces its origins to 1745. The heritage palace has been painstakingly restored and recently 
                             refurbished to offer guests the exclusive experience of a royal lifestyle complemented by legendary 
                             Taj hospitality.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                                <h2>Room features</h2>

                                <p>
                                    Air conditioning <br/>
                                    Housekeeping  <br />
                                    Interconnected rooms available <br />
                                    Private balcony <br />
                                    Room service <br />
                                    Minibar  <br />
                                    Flatscreen TV  <br />
                                    On-demand films  <br />


                                </p>
                            </div>

                            <div className={classes.right}>
                                <h2>Room types</h2>

                                <p>
                                    Bridal suite <br/>
                                    Non-smoking rooms <br />
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

export default JaiMahal;