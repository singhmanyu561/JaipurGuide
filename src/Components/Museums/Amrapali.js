import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherMuseums from './OtherMuseums'
import SendMessage from '../MyPages/Contact2'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex', margin: 0
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

const Amrapali = () => {

    const classes = useStyles();


    const CarouselData = [

        {
            source: 'https://jaipurbeat.files.wordpress.com/2019/05/city-palace-museum.jpg?w=663',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.outlookindia.com/outlooktraveller/public/uploads/2018/04/Amrapali-museum.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/10/600x400-14-1280x720.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://cdn.goppion.com/images/News/_twoThirds/waddesdon-bequest-new.jpg?mtime=20191022145224',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://media.vogue.in/wp-content/uploads/2018/01/feature-amrapali-museum-of-jewellery-866x487.jpg',
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
                        <h1 style={{ color: 'red' }}>Amrapali Museum</h1>
                        <h5>Address: Ground Floor, K, 14/B, Ashok Marg, Panch Batti, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001</h5>
                        <br></br>
                        <p>Amrapali Museum, located in the city of Jaipur, is dedicated to Indian jewellery and jewelled objects. An initiative by the founders of Amrapali Jewels Pvt. Ltd.—Rajiv Arora and Rajesh Ajmera—the collection is a labour of love that began nearly forty years ago when they became friends at college, and one that continues to this day.
                        The museum is spread over two floors. The ground floor houses silver and gold jewellery from virtually every region of India; with a special focus on pieces that are connected with rites of passage, from birth to death. The basement houses a collection of artefacts that have inspired Indian craftsmen throughout history, including a range of silver objects and jewellery. The museum's collection is made up of over 4000 pieces, of which around 800 are on display; the rest can be accessed in the Visual Storage section.
                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                       
                        <br></br>
                        <h2>Prime Attraction</h2>
                        <p>Some stunning pieces on display at the museum include a gem-studded back scratcher that conceals two sharp daggers, a chariot entirely covered in silver, a cascade of gold that adorns a woman’s braid, a king’s sceptre with a majestic elephant’s head, gold-plated shoes studded with precious stones, and many more.
                        For guests visiting India from foreign shores, the museum offers a fascinating testimony to India's craftsmanship. Jewellery for every part of the human form, jewelled artefacts from every corner of India, heirloom textiles embellished with gold and silver, and much more, can be found on display.
                        Visitors can also shop for handcrafted fine and silver jewellery—and objects similar to those on display at the museum—from an extensive range of pieces available at the Museum Shop.
                        </p>
                        <h2>Opening Time</h2>
                        <p>11 AM to 6 PM
                        Open all days except Sunday
                        </p>
                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherMuseums />
                        
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

export default Amrapali;