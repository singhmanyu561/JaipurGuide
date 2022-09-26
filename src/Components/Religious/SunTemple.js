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
        display: 'flex', margin: 20,

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

const SunTemple = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://content3.jdmagicbox.com/comp/jaipur/x3/0141px141.x141.171226101315.u7x3/catalogue/sun-temple-of-jaipur-surya-mandir-galta-jaipur-temples-rru1tzvwed.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://previews.123rf.com/images/elenatur/elenatur1606/elenatur160600012/60149142-sun-temple-or-monkey-temple-jaipur-rajasthan-india-a-small-but-very-interesting-temple-on-the-hill-b.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0Ix8w8eweDL-0Bu6BzGunwHaD4%26pid%3DApi&f=1',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9dSbcGvJ3yXR2UUvA-FbeQHaEL%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OZAMVgdCn-PqM4vyMrWLkgHaFb%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>Sun Temple</h1>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <p>One of the lesser known temples in Jaipur is the Sun Temple. This Hindu shrine is dedicated 
                            to the God Sun or Surya. The place is often used for praying or meditation and to have a good 
                            and soothing look of the city getting soaked in the sunlight. Going after sunset there, one
                             can see the city bathed in the sun rays that brings a day to an amazing end. Situated on a hill,
                              this temple is a part of Galta Ji Temple complex and the way to it is through traffic free and 
                              narrow lanes. Dating back to the 18th century, this temple was built above the flat valley on 
                              which Jaipur is established. Since the whole city is visible from the temple, you have the 
                              chance to see every famous monument from there.</p>
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

export default SunTemple;