import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherTravels from './OtherTravels'
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
    }
}));

const Bicycle = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JVTPIen0nkw4ndO1itYu2wHaD7%26pid%3DApi&f=1',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4Xx9p0zrj09Z90w6ktzsaQHaE8%26pid%3DApi&f=1',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EXB9hs10QCwK7iB0MbHgcgHaEK%26pid%3DApi&f=1',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aRUG8vzC3T9W2-9JHZQ11AHaEj%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.o-euv4jFbRZNxoiiHYOROAHaCp%26pid%3DApi&f=1',
            alter: "Slide 5",
            caption: "Fifth Demo"

        },
    ]
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
                        <h1 style={{ color: 'red' }}>BICYCLES</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>The cities of Rajasthan are quite exquisite, and with numerous attractions to see
                             you could explore them on foot. But if walking isn't exactly your idea of a fun way 
                             to get around Rajasthan, then all you have to do is hire a bicycle and embark on your own
                              little adventure. Bicycles are available on hire in almost all cities in Rajasthan, and can
                               be hired for a few hours to a few days depending on your itinerary. Sturdy, convenient
                                and most importantly economical, this one is apt for the traveler on a budget.</p>
                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherTravels />

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

export default Bicycle;