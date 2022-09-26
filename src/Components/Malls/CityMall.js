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

const CityMall = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://4.imimg.com/data4/OO/OO/GLADMIN-22877870/location_image-500x500.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://images.ixigo.com/image/upload/t_thumb,f_auto/cross-road-mall-images-photos-5177d622e4b0f293655f55ba.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://content.jdmagicbox.com/comp/jaipur/14/0141p141stdk000514/catalogue/inox-cinemas-city-plaza-mall-bani-park-jaipur-multiplex-cinema-halls-1yjbda2.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://maps.mapmyindia.com/place/P0000139331.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://edge.ixigo.com/ixi-api/img/5177d69de4b0f293655f55c7_600x315.jpg',
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
                        <h1 style={{ color: 'red' }}>City Mall  </h1>
                        <h5>Address: Ashok Marg, C-Scheme, C Scheme, Ashok Nagar, Jaipur</h5>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>

                        <p>Lover of technology? Then you got to visit this place to purchase electronic items under one roof. 
                            A paradise for tech-savvy people, the mall has a beautiful fountain at the entrance that would
                             immediately attract you. This mall in Jaipur has a fantastic eatery section where you can have
                              some good food as well.


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

export default CityMall;