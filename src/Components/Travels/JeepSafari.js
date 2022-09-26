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

const JeepSafari = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.enIWcN2c9Iv1k3ooOkU2BQHaEK%26pid%3DApi&f=1',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EXprs37mwwP1dwrRSuvGfwHaEj%26pid%3DApi&f=1',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XZHXcTsn9x2kBRQYkDuvggHaE9%26pid%3DApi&f=1',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.BEZrntcWie96zJP0DNpX0gAAAA%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-nmBYB-A5zjYEOwIuM4SbAAAAA%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>JEEP SAFARI</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>Ranthambore National Park is a treasure-trove of flora and fauna native to Rajasthan.
                             From flocks of migratory birds and crocodiles, to elegant deer and fearsome tigers,
                              a varied species of wildlife can be observed at Ranthambore. Getting around the park
                               is an experience in itself and the most preferred way to do this is to join a jeep safari. 
                               You can choose between an open top or canter jeep, or opt for a hard top Gypsy; either way
                                there's plenty of fun to be had and photographs to be clicked of the splendid array of 
                                creatures you'll encounter. The jeep safaris are operational both in summer as well as winter,
                                 making it an experience that should not be missed.</p>

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

export default JeepSafari;