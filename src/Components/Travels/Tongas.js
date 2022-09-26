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

const Tongas = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://static.toiimg.com/photo/msid-52932522/52932522.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://jaipurbeat.files.wordpress.com/2017/07/img_2647.jpg?w=663',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://static.toiimg.com/thumb/msid-61721004,width-1200,height-900,resizemode-4/.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.39Th0gXbnOJVp3062oPncwHaE8%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e9ccLfFjDie1xuMS6FxY4QAAAA%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>TONGAS</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>Buses, taxis and rickshaws are passé! When in Rajasthan do as the Rajasthanis do 
                            and opt for a tonga instead. A tonga is a horse-drawn carriage that has been used 
                            as a form of public transport within cities for years. In fact, there was a time when
                             the royals would to travel in horse-drawn carriages called 'baggis' to get around,
                              but the advent of the motor car changed all that. You can ride in tongas in most cities
                               in Rajasthan, but they aren't as common as they once were. For the rarity of the experience 
                               and also for the low fares involved, a tonga ride is something one shouldn't miss out on.</p>

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

export default Tongas;