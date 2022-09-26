import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherMonuments from './OtherMonuments'
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

const CityPalace = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://live.staticflickr.com/7156/6687120625_7cafa5a529_b.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2018/04/Get-The-Royal-Feel-Visiting-The-City-Palace-Museum-in-Jaipur.png',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=6&amp;m=487804438&amp;s=612x612&amp;w=0&amp;h=mNrreHwUSnO5INOo8QKNBg_DwzoYb61tVstP_FPL2dY',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=6&amp;m=487804438&amp;s=612x612&amp;w=0&amp;h=mNrreHwUSnO5INOo8QKNBg_DwzoYb61tVstP_FPL2dY',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://customercarecontacts.com/wp-content/uploads/2017/11/city-palace.jpg',
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
                        <h1 style={{ color: 'red' }}>City Palace</h1>
                        <h5>A 2-min walk from Jantar Mantar, Jaipur<br/>
                        Address: Tulsi Marg, Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002

                        </h5>
                        <br></br>
                        <h2>About City Palace</h2>
                        <br></br>
                        <p>
                            City Palace is situated right in the middle of Old Jaipur which covers one-seventh of that area. The construction of the palace dates back to 1732, but it still looks fresh and crisp as it always would have been.
                            <br/>
                            The entire palace is divided into distinct parts which includes courtyards, gardens, palaces and more.
                            A portion of the palace has also been turned into a museum where you can witness all the antiques and belongings of the royal family.
                            This beautiful palace represents the rich culture Jaipur still holds on to. You will find a perfect blend of the Rajputana with Mughal and European style of architecture. The vast property represents the grandeur and heritage of the royal families of the bygone era.
                             <br />
                            The walls are beautifully sculpted and decorated with mirrors and hand paintings. You will also witness how detailed the carvings are done on the roofs of the palace
                            The entire palace becomes a window which gives you the privilege to peek into the stories of the past and the true sense of the authentic culture adopted by Jaipur.
                            You can buy some souvenirs from the market just outside the palace to take a part of the richness of the local culture along with you and cherish the journey from present to 1732 and so on.



                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of City Palace</h2>
                        <br></br>
                        <p>
                            Jaipur is considered to be the first-ever city from medieval times, which was planned well. The City Palace is the one-seventh part of the entire old Jaipur.
                            The idea of constructing this beautiful palace erupted in the mind of Maharaja Sawai Jai Singh II. He called the Bengali architect Vidyadhar Bhattacharya and Sir Samuel Swinton Jacob to design the Jaipur city.
                            <br />
                            They infused Mughal and European style of architecture with the traditional Rajputi architecture. The construction began in the year 1729 and lasted till 1732.
                                <br />
                            The entire palace has small palaces, well-maintained gardens, beautifully carved courtyards, open terraces and more.
                            Further Hawa Mahal and Jantar Mantar were added in the premises along with the outer walls of the palace. The complete structure represented the rich culture and heritage of the ancient state.
                            <br />
                            Though this palace was completed, the process of making it more beautiful lasted until the early 20th century. It is still preserved carefully along with all the belongings inside the palace put on display.

                        </p>
                        <br></br>
                        <h2>What Not to Miss at  City Palace:</h2>
                        <br></br>
                        <p>
                            There are several historical monuments near the City Palace.
                            <br /><br />
                            <b>1. Jantar Mantar:</b> It is the closest monument to the City Palace. You will find the ticket counter right in front of the gate you used for exit, and the monument is across the road on your right-hand side.
                            It is a must-see place which houses various examples of traditional techniques of watching the time, measuring objects in the air, etc.
                            <br /><br />
                            <b>2. Hawa Mahal: </b>The palace is settled right in the middle of the road spreading the vibes of Rajputana elegance through its structure.
                            However, initially the Hawa Mahal was a part of the City Palace and hence you will not find any gate going inside the palace from the main road.
                             You must enter the palace from behind, to know how the royal ladies from the bygone era used to witness the everyday life and celebrations of the festivals.
                            <br /><br />
                            <b>3. Albert Hall Museum:</b> The museum is appreciated not only for its variety of antique collection but even for its architecture. You should click a picture from the outside and then enter the museum to witness an array of artefacts kept inside it.
                             
                            Make sure to consume all of your evening and wait till dusk to finish the inside tour, only to be rewarded by the picturesque beauty of the colourfully lit monument.
                            <br /><br />
                            <b>4. Nahargarh Fort:</b> This is the best place to witness the entire city of Jaipur. This ancient ruin of a beautiful fort creates the best aura to spend some time in silence. You must go here early in the morning and wait for the sunrise.
                             <br /><br />
                            <b>5. Jal Mahal:</b> Jal Mahal is an elegant palace constructed half-submerged inside the man-made lake called Man Sagar Lake. It is beautiful in its real sense and the sight of a nicely lit palace in the middle of the lake is delightful and divine.



                        </p>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherMonuments />

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

export default CityPalace;