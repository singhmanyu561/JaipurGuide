import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherTravels from './OtherTravels'


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

const AirTaxi = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: '',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: '',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: '',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: '',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: '',
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
            
            <div className={classes.root} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Grid item xs={9}>
                    <Paper className={classes.paper1}>
                        <h1 style={{ color: 'red' }}>AIR TAXIS</h1>
                        
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>Ever wanted to fly in your very own private jet? Well here's one way to live that dream.
                             The Government of Rajasthan runs an air taxi service, providing you with the luxury to 
                             fly to any airport/airstrip within the state and the country. The fares are charged on 
                             an hourly basis and the price of admission is high, but there couldn't possibly be a better 
                             way to get a taste of the jet set lifestyle.</p>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherTravels />

                    </Paper>
                </Grid>
            </div>
            <Footer />

        </>
    );
}

export default AirTaxi;