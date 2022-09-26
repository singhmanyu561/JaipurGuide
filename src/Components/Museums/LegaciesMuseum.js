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

const LegacyMuseum = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://content3.jdmagicbox.com/comp/jaipur/q9/0141px141.x141.181113210407.y8q9/catalogue/museum-of-legacies-modikhana-jaipur-museums-rp4adxaudc.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://timesofindia.indiatimes.com/thumb/msid-64298559,imgsize-292358,width-400,resizemode-4/64298559.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://museum.wales/media/28669/gallery10.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://hindi.holidayrider.com/wp-content/uploads/2019/11/compressed-egyt.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://jaipurthrumylens.files.wordpress.com/2018/08/jaipur-haveli-pandit-shivedeen-kishanpol-bazaar.jpg?w=720',
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
                        <h1 style={{ color: 'red' }}>Museum of Legacies</h1>
                        <h5>Located in: Rajasthan School of Arts<br/>
                        Address: Kishanpole Bazar Rd, Modikhana, Jaipur, Rajasthan 302002
                        </h5>
                        <br></br>
                        <p>Housed in a 200-year-old building, the Museum of Legacies is located in the heart of Jaipur, the pink city.
                         This is not merely a traditional museum but also a space for art enthusiasts, workshops and exhibitions. 
                         The displayed collections include paintings, textiles, jewellery, stoneware, inlay works, photographs and more. 
                         </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Museum of Legacies</h2>
                        <br></br>
                        <p>The building itself can be considered the main artefact as it is steeped in history. Constructed in 1823 as the residence of Pandit Shivdeen, a minister in the court of Ram Singh II, it housed the school of art from 1857 onwards, which ran for about 160 years. Later, the state government decided to convert it into a museum and so, on December 9, 2017, it was renovated by Smart City and established as the Museum of Legacies. The building complex has three floors and a number of galleries displaying various artefacts by different art collectors.
                        
                        </p>
                        <br></br>
                        <h2>Prime Attraction</h2>
                        <p>
                           * Marble jali work by master carver Dalchand Jatar - The idea for the design of the marble jali was inspired by a painted ceiling in Jaipur’s City Palace. It is displayed as a part of the Mitch Crites exhibit on the ground floor of the Central Gallery.
                            <br/><br/>
                              * The glittering legacy of Sudhir Kasliwal - Aside from being a collector and historian of jewellery, Kasliwal is also a well-known photographer. His gallery exhibits antique silver jewellery as well as photographs of men and women wearing the ornaments.
                            <br /><br />
                             * Brij Bhasin’s Gallery of Textiles - Bhasin has been collecting textiles for approximately four to five decades. His gallery showcases textiles and traditional attire from every districts of Rajasthan.
                            <br /><br />
                             * Dhurrie designs produced by the Jaipur Central Jail in collaboration with Vayu: Design for Living - This exhibit displays four dhurries that feature abstract, contemporary designs. This practice was begun during the reign of Akbar as a reformative measure in jails.
                            <br /><br />
                             * Giant Rajasthani puppets curated by the museum itself. These puppets are the largest in the state and were, in fact, shortened by two-and-a-half feet to be accommodated in the museum.

                        </p>
                        <h2>Opening Time</h2>
                        <p>Opens All Days</p>
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

export default LegacyMuseum;