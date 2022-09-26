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

const VintageCar = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1840413d1548317796-jaipurs-21st-vintage-classic-car-rally-16th-17th-february-2019-dsc_5093.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.rajasthantourplanner.com/blog/wp-content/uploads/2016/04/jaipur-vintage-car-rental-1024x740.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://content3.jdmagicbox.com/comp/jaipur/k1/0141px141.x141.131107181641.a2k1/catalogue/shama-motors-m-i-road-jaipur-vintage-car-on-hire-49sc8vo.jpg?clr=660000',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZQkiEPdjdGd9U-H6P3_KzQHaE6%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cVh_wAAVOveobyeYRGp7jAHaFj%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>VINTAGE CARS</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>When the motor car first made its appearance in India, the Maharajas and the affluent
                             of Rajasthan were the first to get their hands on them. In doing so, they managed to 
                             procure some of the finest automobiles from the golden era of automotive design. Today,
                              a lot of these automobiles are still around, and their proud owners display them at the
                               prestigious Vintage Car Rally held in Jaipur during the month of January. However, during 
                               the rest of the year, these vintage beauties can be rented out for special occasions or
                                simply for a ride. If you're a car buff and want to experience a bygone era of automotive
                                 history, there is no better place to do so than in Rajasthan, especially Jaipur and Udaipur.</p>

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

export default VintageCar;