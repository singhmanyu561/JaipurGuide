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

const AksharDhamTemple = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://myholidayhappiness.com/uploads/836a46e8aafae98390ef20757ef56918.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.trawell.in/admin/images/upload/151648138Jaipur_Akshardham_Temple_Main.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://1.bp.blogspot.com/-Vf4eqO-mrQM/X1DPTi3AEBI/AAAAAAAADLo/461ccMTfprgh1tAeDzk3zi0dYRQ7AOlnQCLcBGAsYHQ/w640-h320/akshardham%2Bjaipur.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aHFpJtgGXRVHVMIhczkpDAHaEj%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fY149caqSM1XnkNfkzL7vQHaEq%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>Akshardham Temple</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>Located in Vaishali Nagar, Akshardham Temple has showcased the fusion of architecture and culture. 
                            This temple is the abode of the Vedic Supreme god- Narayana. This temple has been a tourist 
                            attraction for its architectural beauty that consists of majestic carvings and sculptures.
                             Being surrounded with nature, this place calm one’s mind. Along with tranquility, this place 
                             also offers a visual relief. The tourists feel attracted to this magnificent structure and
                              never miss the chance to explore it. The main idol of Lord Narayana calms the pilgrim’s mind 
                              and blesses with a soothing feeling. With the walls being covered with mantras that are recited 
                              by the visitors, this temple never fails to amaze.</p>

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

export default AksharDhamTemple;