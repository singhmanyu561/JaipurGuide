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

const TridentJaipur = () => {

    const classes = useStyles();
    let history = useHistory()

    const CarouselData = [

        {
            source: 'https://gtcholiday.files.wordpress.com/2020/08/jaipur-trident-09.jpg?w=835',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://r1imghtlak.mmtcdn.com/a2b7a600236f11e8bdbc025f77df004f.jpg?&amp;output-quality=75&amp;downsize=520:350&amp;crop=520:350;2,0&amp;output-format=jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://www.oberoihotels.com/-/media/oberoi-hotels/in-the-news/rajvilas.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/3e/cf/cf/trident-hotel-jaipur.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://cf.bstatic.com/images/hotel/max1280x900/326/32617547.jpg',
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
                        <h1 style={{ color: 'red' }}>Trident, Jaipur</h1>
                        <h5>Amber Fort Rd opposite Jal Mahal, Jaipur 302002 India</h5>
                        <br></br>
                        <p>Surrender to the charms of this beautiful city when you stay in Trident, Jaipur; ranked amongst
                             the best resorts in Jaipur. Located en route to the famous Amber Fort, this luxury hotel offers
                              stunning views of the Mansagar Lake and Jal Mahal. These vistas are best admired from the hotel.
                               Tastefully appointed, the rooms are well-lit and airy and offer all the modern amenities such 
                               as a spacious wardrobe, an LCD television, a personal bar and complimentary high speed Internet.
                                Enjoy the panoramic views of the lake or the landscaped gardens, with the Aravalli range forming 
                                a dramatic backdrop. The soothing views are perfectly complemented by a selection of wellness and 
                                recreation facilities. The highlight though is our signature Trident Kids' Club, a private, 
                                supervised play area for your little stars, where they can have fun playing games and making 
                                friends on their own fun filled holiday! Situated a short drive from Jaipur airport and Jaipur
                                 railway station, Trident, Jaipur is perfectly positioned to enjoy the city's landmark monuments 
                                 and bustling bazaars. For leisure or business travellers to Jaipur, sightseeing and shopping 
                                 are musts. Our concierge can help arrange with city tours or suggest the best places to shop.
                                  Whether you are looking for a leisure hotel in Jaipur, booking a holiday with your family or your
                                   friends, or even looking for a business hotel, Trident, Jaipur hotel deals and hotel offers are
                                    curated to give you the best value, meet your every need and create memories that will last a 
                                    lifetime.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                                <h2>Room features</h2>

                                <p>
                                    Allergy-free room <br/>
                                    Blackout curtains <br />
                                    Housekeeping  <br />
                                    Interconnected rooms available  <br />
                                    Electric kettle  <br />
                                    Cable / satellite TV  <br />
                                    Extra long beds  <br />
                                    Bath / shower  <br />


                                </p>
                            </div>

                            <div className={classes.right}>
                                <h2>Room types</h2>

                                <p>
                                    Mountain view <br/>
                                    Landmark view <br />
                                    Non-smoking rooms <br />
                                    Suites


                                </p>
                            </div>
                        </div>
                            <Button className={classes.button} onClick={nav} style={{ backgroundColor: 'blue', marginLeft: 100, marginBottom: 20, color: 'white', marginLeft: 400, marginTop: 50 }} >Book Now</Button>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherHotels />

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

export default TridentJaipur;