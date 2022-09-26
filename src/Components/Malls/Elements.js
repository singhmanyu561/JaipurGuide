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

const Elements = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://images.jdmagicbox.com/comp/jaipur/97/0141p141std67097/catalogue/apex-mall-tonk-road-jaipur-malls-3t3swfm.jpg?clr',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://im.whatshot.in/img/2020/May/image-4-1590505938.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://dhoom.filmipop.com/media//theatre/2017/May/1493890756-element.posttt.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://dhoom.filmipop.com/media//theatre/2017/May/1493890756-element.postttt.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://content.jdmagicbox.com/comp/jaipur/s6/0141px141.x141.180217004319.u6s6/catalogue/elements-mall-ajmer-road-jaipur-malls-94w4zxyl3a.jpg',
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
                        <h1 style={{ color: 'red' }}>Elements Mall  </h1>
                        <h5>Address: 192, Bhrigu Nagar Near D.C.M Market, Ajmer Rd, Jaipur</h5>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>

                        <p>One of the most down-to-earth malls, which features a 4-screen INOX for your last-minute 
                            movie plans, this mall on Ajmer Road will surely grab your attention as it stands tall, 
                            and solitary amidst the other stores aligned. The mall has a decent food court, CCD and
                             McDonald’s for the hungry souls!

                        The shopaholics can head to their Reliance store, Dollar store and other outlets of well-known brands.



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

export default Elements;