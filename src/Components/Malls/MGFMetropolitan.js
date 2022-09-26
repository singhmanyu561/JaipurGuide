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

const MGFMetropolitian = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.jaipurcityblog.com/wp-content/uploads/2017/04/17587276_198454677310830_7203624272470736896_n-1-1024x729.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.seoengineers.in/jaipur/wp-content/uploads/2018/09/mgf....jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://static.toiimg.com/thumb/msid-47826403,width-550,height-433/47826403.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Feature-Image600X400-13.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://pix10.agoda.net/hotelImages/6796299/0/b47a5446160dfe2756340293c4f98299.jpg?s=1024x768',
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
                        <h1 style={{ color: 'red' }}>MGF Metropolitan Mall  </h1>
                        <h5>Address: 22 Godam Cir, Durgadas Colony, C Scheme, Lalkothi, Jaipur</h5>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>

                        <p>Lovers of big brands, we are looking at you. MGF Metropolitan Mall 
                            needs no introduction. Having branches at Gurgaon and Saket, MGF has made
                             a name as being the first name that pops up when we think of Jaipur mall. If 
                             you are someone who loves to spend their free day shopping, then this where you go.
                              This mall in Jaipur has tons of brands to choose from especially when some of the biggest
                               lifestyle stores! You will find brands like Pepe Jeans, BIBA, Lee, Jockey, Tantra and so much more.

                        Have an important business meeting and want to impress your clients well then bring them here as
                         they have a conference room as well.

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

export default MGFMetropolitian;