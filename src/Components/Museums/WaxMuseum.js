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

const WaxMuseum = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2017/01/jaipur-wax-museum.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/neao0fpsa5posjmqb7t6/Jaipur%20Wax%20Museum%20Ticket.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/03/royal-darbar-kb6592.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://images.thrillophilia.com/image/upload/s--fqj7Vmqd--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/194/550/original/1582973303_3.jpg.jpg?1582973303',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/FotoJetwaxmusuemjaipurcover.jpg',
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
                        <h1 style={{ color: 'red' }}>Jaipur Wax Museum</h1>
                        <h5>Address: Nahargarh Fort Amer Road Near Jal Mahal, Jaipur, Rajasthan 302001</h5>
                        <br></br>
                        <p>Situated inside the premises of Nahargarh Fort, Jaipur Wax Museum has been created with an idea of giving people of Jaipur and travelers from all around the world something unique to see. This museum is home to brilliant statues of people who hold an important place in the history of cinema, art, literature, sports, and royals.
                        The beautifully sculpted statues by Susanta Ray are displayed in the ‘Hall of Icons’ and ‘Royal Darbar’ sections of the fort. Each wax statue in Jaipur Wax Museum has been given a background that compliments the history of that legend.
                        Hall of Icons’ is the most important and interesting part of the wax museum, Jaipur. This segment of the Nahargarh wax museum exhibits wax and silicon statues of famous personalities, including A PJ Abdul Kalam, Kalpana Chawla, Mother Teresa, Dalai Lama, Mahatma Gandhi, Amitabh Bachhan, Sanchin Tendulkar. There are many other statues of personalities from the world of art, literature, cinema, sports etc.
                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Jaipur Wax Museum</h2>
                        <br></br>
                        <p>Depicting the rich and incredible heritage of Rajasthan, ‘The Royal Darbar’ is graced with magnificent paintings and other decorative pieces. This segment of the Jaipur Wax Museum exhibits paintings that are created with pure gold motifs and wax statues of influential rulers of the Rajput dynasty, including Maharaja Sawai Jai Singh and Rajmata Gayatri Devi. The lifelike statues of the royal people make ‘The Royal Darbar’ a must-visit.

                        Jaipur Wax Museum is the only wax museum situated in a heritage palace of Nahargarh Fort in Jaipur with the exhibit of 30 wax statues of world renowned celebrities all over the world with the none attraction of palace of mirrors made of 2.5 million pieces glass work, 5 star rated and must see place in Jaipur.
                        </p>
                        <br></br>
                        <h2>Prime Attraction</h2>
                        <p>
                            <p>	Real life statues of Maharajas and Maharanis of Rajasthan.</p>
                           <p> 	10 feet long bullet Gati Gamini, placed at the entrance of the Museum.</p>
                            <p> 	Statues of celebrities like Mahatma Gandhi, Rabindranath Tagore, Amitabh Bachchan.</p>

                        </p>
                        <h2>Opening Time</h2>
                        <p>Monday to Friday, 10 AM to 6.30 PM.</p>

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

export default WaxMuseum;