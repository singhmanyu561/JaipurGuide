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

const GovindDevjiTemple = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://pictureofrajasthan.com/assests/uploads/destination/9a96f6cd1ca6e362b0849bf28e0f4f7c--jaipur-india-delhi-india.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://optimatravels.com/images/rajasthan-images/govind-ji-templej-jaipur-head.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.rVR2qFOJouQa1dvYSUFEmgHaFj%26pid%3DApi&f=1',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.z6rgjGaAdC2y3tob_h7w4AHaE0%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e0A31gkm-L15EtizA7S5ZwHaE7%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>Govind Devji Temple</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>Being located in the complex of city palace, it’s a must visit to Govind Devji Temple.
                             Locally known as Govind Devji, Lord Krishna is visited every year by his devotees from near 
                             and far. This temple is considered among the seven temples of Lord Krishna of Vrindavan.
                              The idol was brought from Vrindavan to Jaipur by Raja Sawai Jai Singh II. The legend behind 
                              the idol of Lord Krishna goes like, when Shri Bajranabh- the great grandson of Lord Krishna
                               was 13 years old, he inquired about the God’s appearance who was worshipped by everyone, 
                               from his grandmother- Lakshmana. While she was answering, Bajranabh started making the statue
                                according to the descriptions his grandmother was giving. After the completion of the statue,
                                 only the feet resembled Lord Krishna, and this is how, this idol came to be known as “Madan Mohanji”. 
                                 With the aim of making a better idol, another image was created by Shri Bajranabh in which the chest
                                  part looked similar to that of Lord Krishna, and this idol was called as “Gopinathji”. 
                                  The third was called “Govind Devji” as the face was exactly like Lord Krishna. 
                                  This was the idol that was carried to Jaipur by Sawai Jai Singh II.</p>
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

export default GovindDevjiTemple;