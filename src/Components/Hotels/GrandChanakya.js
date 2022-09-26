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

const GrandChanakya = () => {

    const classes = useStyles();
    let history = useHistory()

    const CarouselData = [

        {
            source: 'https://cf.bstatic.com/images/hotel/max1024x768/989/98941768.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://2et9uf3g88lk1lzd8427x065-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/LIGC_Facade_3.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://thumbnails.trvl-media.com/cXEik1JRmeqAw-GFuciqNzoqEi8=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/7000000/6580000/6577500/6577452/b70ba7cb_z.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1431961962/Domestic%20Hotels/Hotels_Jaipur/Leisure%20Inn%20Grand%20Chanakya/Roof_to_Restaurant.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://blessingsonthenet.com/img/uploads/hotels/gallery/aim_bn_2_1536235734.jpg',
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
                        <h1 style={{ color: 'red' }}>Leisure Inn Grand Chanakya</h1>
                        <h5>4 A-B, Kashi Bhawan, M.I. Road, Panch Batti, Jaipur 302001 India</h5>
                        <br></br>
                        <p>Leisure Inn Grand Chanakya is an excellent choice for travellers visiting Jaipur, offering a family-friendly environment alongside many helpful amenities designed to enhance your stay.
                        Given the close proximity of popular landmarks, such as Moti Dungari Temple (1.1 mi) and Govind Devji Temple (1.2 mi), guests of Leisure Inn Grand Chanakya can easily experience some of Jaipur's most well known attractions.
                        Leisure Inn Grand Chanakya is a family-friendly hotel offering a flat screen TV, a minibar, and air conditioning in the rooms, and it is easy to stay connected during your stay as free wifi is offered to guests.
                        The hotel features a concierge and room service. Plus, guests can enjoy a fitness center and free breakfast, which have made this a popular choice among travellers visiting Jaipur. For guests with a vehicle, free parking is available.
                        Jaipur has plenty of Italian restaurants. So when you’re here, be sure to check out popular spots like Peacock Rooftop Restaurant at Hotel Pearl Palace, Kalyan Rooftop and Indoor Restaurant, and The Yellow Door : Global Veg. Bistro, which are serving up some great dishes.
                        Should time allow, City Palace of Jaipur is a popular attraction that is within walking distance.
                        Enjoy your stay in Jaipur!
                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <div className={classes.main}>
                            <div className={classes.left}>
                                <h2>Room features</h2>

                                <p>
                                    Air conditioning <br />
                            Housekeeping <br />
                            Room service <br />
                            Safe <br />
                            Coffee / tea maker <br />
                            Cable / satellite TV <br />
                            Flatscreen TV <br />
                            Bath / shower <br />

                                </p>
                            </div>

                            <div className={classes.right}>
                                <h2>Room types</h2>

                                <p>
                                    Mountain view  <br />
                            City view  <br />
                            Non-smoking rooms  <br />
                            Suites  <br />
                            Family rooms  <br />

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

export default GrandChanakya;