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

const HawaMahal = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://s3.india.com/wp-content/uploads/2018/08/hawa-1-1.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://miro.medium.com/max/603/1*fYA-b-KA9UUqPL2OsDYkQw.png',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://www.revv.co.in/blogs/wp-content/uploads/2020/03/night-out-places-in-jaipur.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://media.istockphoto.com/photos/hawa-mahal-jaipur-india-picture-id482557081',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://www.outlookindia.com/outlooktraveller//public/uploads/articles/explore/Hawa-Mahal-Jaipur.gif',
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
                        <h1 style={{ color: 'red' }}>Hawa Mahal</h1>
                        <h5>Address: Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002</h5>
                        <br></br>
                        <p>Located at a stone throw away from the commercial center of Pink City, Hawa Mahal is considered as the landmark of Jaipur. Known as the 'Palace of winds", this five story building was built in 1799 by Maharaja Sawai Pratap Singh. This palace is decorated with 953 windows or 'Jharokhas' which are adorned with intricate designs. There's a small museum within the complex of Hawa Mahal, which houses famous items like miniature paintings and ceremonial armor.
                        The main reason behind the making of Hawa Mahal was to felicitate Rajput women who were not allowed to appear in public places. Through this fort all the women used to catch the glimpses of royal processions, hustles and bustles of the city. It is for the women's benefit that the Hawa Mahal was built, complete with small windows and screened balconies. This gave the women a sense of freedom, without appearing in public.
                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Hawa Mahal</h2>
                        <br></br>
                        <p>In 1799, the Kachhwaha Rajput ruler, Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh ordered Lal Chand Usta to construct an extension to the Royal City Palace. The Purdah system at the time was strictly followed. Rajput royal ladies should not be seen by strangers or appear in any public area. The construction of Hawa Mahal allows the royal ladies to enjoy from every day street scenes to royal processions on the street without being seen.
                        Architecture
                        The five-stores palace was built in the form of Krishna’s crown because Sarai Pratap Singh was devoted to Krishna, the Hindu god.
                        The mahal has a total of 953 small casements each with small lattice worked pink window, balconies and arched roofs with hanging cornices. This allows cool breeze blow through the mahal and keep it cool and airy in summer. Despite the large number of windows, each of them are size of a peep hole such that the royal ladies were not to be seen by the public.
                        The historical objects, arts and crafts treasured at the museums of Jaipur take you to the ancient land of Rajput monarchy. Explore the museums to witness the grandeur of the Maharajas and Maharanis
                        </p>
                        <br></br>
                        <h2>Prime Attraction</h2>
                        <p>	Sculptures from Ganeshwar, Virat Nagar, Sambhar, Raid and Nagar.
                       <p> 	Terracotta, antiquities, arrow heads, helmets, swords and fish hooks.</p>
                        </p>
                        <h2>Opening Time</h2>
                        <p>10 AM to 5 PM, except on Friday and National Holidays.</p>
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

export default HawaMahal;