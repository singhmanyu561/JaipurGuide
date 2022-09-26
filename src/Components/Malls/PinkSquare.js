import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherMalls from './OtherMalls'
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

const PinkSquare = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.shopkhoj.com/wp-content/uploads/2018/07/pink_square_mall.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://dhoom.filmipop.com/media//theatre/2017/May/1493885433-amar.postt.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://sonodyneimage.s3.ap-south-1.amazonaws.com/casestudy/_873185_Pink%20Square3.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://3.imimg.com/data3/FH/ED/MY-8142232/pink-square-500x500.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://content.jdmagicbox.com/comp/jaipur/e6/0141px141.x141.111220125533.e7e6/catalogue/pink-square-mall-adarsh-nagar-jaipur-malls-obw50k.jpg',
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
                        <h1 style={{ color: 'red' }}>Pink Square Mall  </h1>
                        <h5>Address: Plot No. 1/2, Govind Marg, Saket Colony, Adarsh Nagar, Jaipur</h5>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>

                        <p>There has to be a mall named after the city, right? This mall in Jaipur is undoubtedly 
                            one of the star-studded malls. Not only for the fact that it houses the apparel brands 
                            but also because of the many stars that have visited this mall! When it comes to new movie
                             releases and promotions, head here to see your favourite actors and actresses. Who knows, 
                             maybe you can even get a selfie! Fulfil your desire to meet your favourite stars and your 
                             love for branded products. After spending some fun times with family and friends, you can 
                             always chill in INOX cinema and watch a good movie or enjoy a few scoops at Swirls Ice Cream parlour!

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

export default PinkSquare;