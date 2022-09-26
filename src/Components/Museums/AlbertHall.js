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
        opacity:0.82,
        margin:20,
        marginLeft:50
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

    table:{
        // textAlign:'left'
    }
}));

const AlbertHall = () =>{

    const classes = useStyles();


    const CarouselData = [

        {
            source: 'https://fwt.asia/wp-content/uploads/2020/04/Albert-hall-museum-jaipur-rajasthan-outsidel-view-fwt-asia-11.webp',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.travelogyindia.com/storage/app/upload/albert-museum-jaipur.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/5c/4d.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hoS1KoBtYEGSHgT3hZ7JcwHaFj%26pid%3DApi&f=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://www.localguidesconnect.com/t5/image/serverpage/image-id/658439iD87B8CD5645E785C/image-size/large?v=1.0&amp;px=999',
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
                        <h1 style={{ color: 'red' }}>Albert Hall Museum</h1>
                        <h5>Address: Museum Rd, Ram Niwas Garden, Kailash Puri, Adarsh Nagar, Jaipur, Rajasthan 302004</h5>
                        <br></br>
                        <p>Jaipur’s cultural beauty is well expressed in architecture and art forms. One of the best ways to enjoy the
                        culture is museum. The best of all museums is Albert Hall Museum. This museum provides exclusive
                        collection of artifacts, objects and other art forms.</p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Albert Hall Museum</h2>
                        <br></br>
                        <p>The building of Albert Hall Museum was built in 1876 as a concert hall. The museum gets its name from the
                        Victoria and Albert Museum of London, because of the similarity of architecture. The foundation for the building
                        started in 1876, when Prince of Wales visited Jaipur. When the building was constructed, the royals and
                        government did not have any idea about usage of the building. It was initially used as Town Hall in 1880. Later,
                        the King of Jaipur, Maharaja Sawai Madho Singh II suggested to use it as a museum for Industrial Arts. Later,
                        the hall was used for displaying masterpieces of local artisans.
                        In 1881, the museum was at its prime beauty and people from across the country visited this museum to buy or
                        enjoy handicrafts, artwork and other masterpieces. However, the building was under construction until 1887.
                        Later, the museum started to showcase artifacts and ancient artworks along with budding artist’s masterpieces.</p>
                        <br></br>
                        <h2>Architecture of Albert Hall Museum</h2>
                        <br></br>
                        <p>The building holds Indo-Saracenic architecture and exclusive stone ornamentation. The museum was famous
                        for its architectural beauty since its inauguration. The corridors of the museum hold numerous mural paintings,
                        Persian painting and others. The murals on display expresses ancient civilization and reigns like Green,
                        Babylonian, Chinese and others.</p>
                        <br></br>
                        <h2>Prime Attraction</h2>
                        <p>
                            	Rajasthan peasant jewellery which includes rings, bracelets, waistbands and earrings made with brass, silver and gilat.<br /><br />
                            	Glazed pottery, amulets and figurines in bright copper blue and green colours.<br /><br />
                            	Fine makrana marble deities made in the 19th century.<br /><br />
                            	Lady with a mirror, lady with a bird, man with a lotus and gun powder horns made with ivory.<br /><br />
                            	The earliest and the best carpet, the Persian Garden Carpet.<br /><br />
                            	Punch marked and Indo-Greek coins of the 6th Century BC and 2nd Cent BC.<br /><br />

                        </p>
                        <h2>Opening Time</h2>
                        <p>On all weekdays, from 9 AM to 5 PMand 7 PM to 10 PM, except the National Holidays.</p>


                </Paper>

            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>
                    <OtherMuseums/>
                    
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

export default AlbertHall;