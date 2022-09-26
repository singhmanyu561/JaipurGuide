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

const TritonMall = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://i.ytimg.com/vi/E1rqxyPGhe4/maxresdefault.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.rajasthandirect.com/wp-content/uploads/2017/07/Triton-Mall-Jaipur.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://image3.mouthshut.com/images/Top_pages/Product_Images/Triton-Mega-Mall-Jhotwara-Jaipur-355.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://i.ytimg.com/vi/4K0iP_ZwpVg/maxresdefault.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://img.magicpin.com/m_2c4802d7837d-2020-01-03-19-08-08-000804.jpg',
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
                        <h1 style={{ color: 'red' }}>Triton Mall  </h1>
                        <h5>Address: Plot No 1/1, Near Chomu Pulia Circle, Jhotwara Rd, Jhotwara, Jaipur</h5>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>

                        <p>A paradise for luxury lovers, this mall is spread across 4.5 lakh square feet area with 
                            offerings from more than 150 brands. Oh, and kids don't worry about getting bored because
                             this place is also famous for its scary house! Burger King and Dominos lead as the favourite
                              destination for grabbing quick bites, while the food court showcases many other restaurants 
                              and stores. Other brands include Manyavar, Pantaloons, Fashion Big Bazaar, ColourPlus, Raymond, 
                              Mufti and much more! Don't forget to visit D mart for some cheap groceries.


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

export default TritonMall;