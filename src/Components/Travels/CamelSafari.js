import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'
import SearchAppBar from '../MyPages/SearchAppBar'
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

const CamelSafari = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://images.thrillophilia.com/image/upload/s--Xkozeb1y--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/012/053/original/1510231162_honeymoon_camel.jpg.jpg?1510231162',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3yCimqrfy5kHnGBoSvLj1gHaEj%26pid%3DApi&f=1',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Untitled-design1.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s6jlMBxiYNGDTRbFYpF-UQHaEK%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Yr0n07xWg0BIc4qrU8M0jAHaEZ%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>CAMEL SAFARI</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>There was a time not long ago, when travelling by camel, the animal referred to as 
                            'the ship of the desert', was the norm in Rajasthan. In fact, many Rajasthanis remember 
                            a life without roads, rail and electricity, a simpler life when the hardy camel was all
                             you needed to get around. Nevertheless, you can still experience this rustic way of getting 
                             around in the cities of Jaisalmer, Bikaner and Mandwa by embarking on a camel safari. You can
                              choose to go on a multi-day trek out in the desert or instead make it a day long affair. 
                              A word of advice to travelers is to spend some time researching on the best tour operators
                               around so as to have as amazing and authentic an experience as possible.</p>

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

export default CamelSafari;