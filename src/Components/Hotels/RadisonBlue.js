 import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherHotels from './OtherHotels';
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
    },

    main: {
        display: 'flex'
    },

    left: {
        marginLeft: 200,
        textAlign: 'left'
    },

    right: {
        marginLeft: 200,
        textAlign: 'left'
    }

}));

const RadisonBlue = () => {

    const classes = useStyles();
    let history = useHistory()

    const CarouselData = [

        {
            source: 'https://radissonhotels.iceportal.com/image/radisson-blu-jaipur/exteriorview/16256-116522-f64874139_3xl.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://pix10.agoda.net/hotelImages/4889914/0/3d9b50fcec5c0ca99fb980f7ff834bbe.jpg?s=1024x768',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://b.zmtcdn.com/data/pictures/2/18937362/fc90d12bbe03f5762dfeec53916a2157.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.jaipurcityblog.com/wp-content/uploads/2018/02/Atsui.3-1024x683.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://img4.nbstatic.in/tr:w-500/58ef25375908010010408c8d.jpg',
            alter: "Slide 5",
            caption: "Fifth Demo"

        },
    ]

    const nav = () => {
        history.push('/HotelBooking')
    }

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
                        <h1 style={{ color: 'red' }}>Radisson Blu Jaipur</h1>
                        <h5>Plot Number 5-6, Tonk Road Airport Plaza, Jaipur 302018 India</h5>
                        <br></br>
                        <p>Radisson Blu Jaipur, a five-star hotel, offers 182 stylish hotel rooms and suites that are ideal 
                            for both business and leisure travellers. Experience world-class service as you escape the city's
                             bustle with amenities like free high-speed, wireless Internet, a state-of-the-art wellness center 
                             with Gym, Spa and a stunning rooftop swimming pool. Situated near Jaipur International Airport and 
                             iconic World Trade Park, Radisson Blu Jaipur is also a wonderful choice for social events, corporate 
                             conferences and weddings.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                                <h2>Room features</h2>

                                <p>
                                    Housekeeping <br/>
                                    Room service <br />
                                    Safe <br />
                                    Telephone <br />
                                    VIP room facilities <br />
                                    Iron <br />
                                    Flatscreen TV



                                </p>
                            </div>

                            <div className={classes.right}>
                                <h2>Room types</h2>

                                <p>
                                    Bridal suite <br/>
                                    Non-smoking rooms <br />
                                    Suites <br />
                                    Family rooms <br />


                                </p>
                            </div>
                        </div>
                            <Button className={classes.button} onClick={nav} style={{ backgroundColor: 'blue', marginLeft: 100, marginBottom: 20, color: 'white', marginLeft: 400, marginTop: 50 }} >Book Now</Button>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}><OtherHotels />

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

export default RadisonBlue;