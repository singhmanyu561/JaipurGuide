import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherMalls from './OtherMalls';
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

const CrystalCourt = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://image3.mouthshut.com/images/imagesp/925078098s.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/96/2b/ca/vista-desde-el-ultimo.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://mapio.net/images-p/40467381.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://i.ytimg.com/vi/j1i9yH0ES8E/maxresdefault.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://mapio.net/images-p/40467106.jpg',
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
                        <h1 style={{ color: 'red' }}>Crystal Court Mall </h1>
                        <h5>Address: Gaurav Tower Parking Lot 1, D-Block, Malviya Nagar, Jaipur</h5>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>

                        <p>Crystal Court Mall is one of the most popular spots to hang out for students. 
                            You can find some fantastic food outlets here like OTB - on the bar B-Q and paparazzi. 
                            In the first floor, you can find stores like Levi’s, Spykar, Cantabil etc. This mall in
                             Jaipur also has Vishal mega mart to meet your other needs.

                            </p>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherMalls />

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

export default CrystalCourt;