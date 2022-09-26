import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherReligious from './OtherReligious'
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

const GaltajiTemple = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.nativeplanet.com/img/2017/09/1coverpic-06-1504669626.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-s/14/44/3f/6a/galtaji-temple.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kDMOhcV12WPQUq470JPEXAHaE8%26pid%3DApi&f=1',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.P7LIVaYZzK-wBnPiMnjQQgHaEk%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.78Q91jIMXGfRfDPT7Arn_wHaFj%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>Galta Ji Temple</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>Pilgrimage tourism in Jaipur includes visiting Galta Ji Temple where the shrine of 
                            Saint Rishi Galav is present. Located just 10kms away from the city and situated 
                            between two hills, the temple has been a tourist attraction for years. There are 
                            seven natural water tanks or kunds in this temple. Galta Kund is contemplated as the
                             holiest kund because this is the only water tank of this temple which never goes dry.
                              Makar Sankranti (Indian festival) attracts thousands of pilgrims to visit and douse 
                              in this kund as it is considered fortunate to do so. The upper and lower kunds are
                               used by pilgrims to wash away their sins. Monkeys of the rhesus macaque species were 
                               featured in a National Geographic documentary after they invaded this place. They are often
                                friendly and you can even feed them.</p>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherReligious />

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

export default GaltajiTemple;