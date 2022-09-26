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

const JantarMantar = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://jaipurtourism.co.in/images/places-to-visit/header/jantar-mantar-jaipur-entry-fee-timings-holidays-reviews-header.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://jaipurtourism.co.in/images//tourist-places/jantar-mantar-jaipur/jantar-mantar-jaipur-tourism-location-address.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://pickyourtrail.com/blog/wp-content/uploads/2020/05/5604269161_f2aca0a112_b.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.traveloaces.com/wp-content/uploads/2020/04/Jantar-Mantar.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://images.assettype.com/indynetwork%2F2020-04%2F8e60f60b-172f-4874-a4e3-80398c17bf86%2FJantar_Mantar_Delhi_27_05_2005.jpg?w=1170',
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
                        <h1 style={{ color: 'red' }}>Jantar Mantar</h1>
                        <h5>Address: Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002
                        </h5>
                        <br></br>
                        <h2>About Jantar Mantar</h2>
                        <br></br>
                        <p>
                            Jantar Mantar of Jaipur is an astronomical observatory built by Sawai Jai Singh II. Besides this one in Jaipur, India owns 4 more Jantar Mantar across different states.
                            Featuring the world’s largest sundials, the astronomical observatory of Jaipur marks its prominence amongst UNESCO’s world heritage sites.
                            Jaipur’s Jantar Mantar comprises of some astounding stone structures which once were used for locating the exact positions of the celestial bodies in space.
                            There are around 19 instruments carved out from stone and brass. As it aids in calculating the local time, this massive structure attracts geographers, architects, and historians.
                            <br/>
                            Even time has failed before the brilliance of this engineering marvel. The observatory still holds its significance in the same manner as it did a thousand years ago.
                            The main motive behind the existence of this structure was to gather and study information related to the universe, time and space. The instruments present refers here to those used in the Egyptian study of Ptolemaic astronomy.
                            The observatory is known to work on the principles laid down by the classical celestial coordinates. They are a horizon-zenith local system, ecliptic system, and finally the equatorial system. These three systems aid the researchers and geographers to track the position of the heavenly bodies.
                            Here at the Jantar Mantar Jaipur, you get to witness a hybrid mixture of different astronomical and architectural instruments.
                            The 19 geometric devices present here to contribute towards understanding local time, ascertaining the declination of planetary systems, predicting eclipses, and tracking orbital stars.
                            Besides, it also aids in the determination of celestial altitudes. The entire observatory covers a land stretch of 18700 metres.
                            Samrat Yantra, Ram Yantra, Jai Prakash Yantra, Narivalya yantra, Karnti yantra, Raj yantra, Unnsynhsmsa yantra, Chakra yantra, Disha yantra, Dakshina yantra, and Rasayas yantra are some of the instruments found here.


                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Jantar Mantar</h2>
                        <br></br>
                        <p>
                            Sawai Jai Singh II was a renowned scholar of his time. Once a while, Emperor Muhammad Shah assigned him a task to confirm and rectify the currently available data on the position and movement of celestial bodies.
                             <br></br>
                            Sawai Jai Singh was desperate to refine the tables of ancient Islamic zij to determine the exact time. In short, he aimed to create a well-defined calendar. He was keen on making accurate astrological predictions for the benefit of mankind.
                             <br></br>
                            To bring his dream to reality, he decided that he would construct Jantar Mantar in the year 1718. For the same, he set out on a mission to extensively study the cosmological principles as laid down by the philosophical findings of Hindu, Islamic, European, and Persian civilization.
                             <br></br>
                            In this way, five different astronomical observatories were constructed across various states in India.
                             <br></br>
                            The largest amongst all was built in Jaipur in between the period 1727 to 1733. After that, it underwent frequent renovations with the lapse of time.
                             <br></br>
                            The available instruments have a broad range of cosmological applications. In the year 2010, this astronomical observatory got featured in the list of UNESCO’s world heritage sites.

                        </p>
                        <br></br>
                        <h2>What Not to Miss at Jantar Mantar:</h2>
                        <br></br>
                        <p>

                            Now, when you have sufficient knowledge about the attractions within Jantar Mantar, Jaipur, let’s take a look beyond. Here’s where you can head after your visit to the Jantar Mantar –
                           <br /><br />
                            <b> 1. City Palace – </b>Dressed with the brilliance of Mughal and Rajasthani architectural styles, the City Palace of Jaipur is located within the close proximity of Jantar Mantar. City Place is a shelter to the museums, courtyard, well-decorated gardens, and art galleries
                            The complex is lovely to be listed amongst your must-visit places in Jaipur.
                            <br /><br />
                            <b> 2. Hawa Mahal – </b>A brilliant blend of pink and red sandstone here amplifies the aura of the entire Hawa Mahal. It is located at a distance of 700 metres from Jantar Mantar, Jaipur. If you’ve got your own vehicle, you will easily reach there within a flick of 3 minutes.
                            Locals do label it as a Palace of Winds. From its highest floors, you get an excellent view of the city to capture with your DSLR.
                            <br /><br />
                            <b> 3. Tripolia Gate – </b>Tripolia Gate was built in the year 1734 and was considered to be an entrance to the Pink city. Here, you get to see a blend of 3 different architectural styles – Rajput, European, and Mughal. In earlier days, this grand structure was considered to be the entrance to the City Palace. Being a historical landmark, you could find the presence of a busy bazaar here today.
                            <br /><br />
                           <b> 4. Tripolia Bazar – </b>Tripolia Bazar is located just near to the Tripolia Gate in Jaipur. The bazaar is known for selling good quality carpets, ironware and brassware.
                            Besides, there are many shops here in the bazaar selling rugs, utensils, textiles, trinkets, furniture, and a wide array of items. Walking a few miles, you will find the presence of Maniharon ka Rasta where you will get some high-quality lac bangles. Indo-heretic designer carpets sold here are quite popular across the borders.
                            <br /><br />
                            <b>5. Goverdhan Temple – </b>Located within the complex of Hawa Mahal, Goverdhan Temple is an age-old temple dating back to the times of the 1790s. It was constructed by Maharaja Sawai Pratap Singh. The temple is dedicated to the pious couple Lord Krishna and his soulmate Radha.
                            The structure here gives a resemblance to a haveli and is a popular tourist destination of the present times. This temple has got some exquisite wall carvings, engravings on the marble pillars, and similar work on both sides of the main entrance that leads you to the main shrine.
                            You will get to witness the brilliance of Jaipur’s haveli style architecture here.
                            <br /><br />
                            <b> 6. Maharaja Sawai Jai Singh II museum –</b> The museum complex has got both significant courtyards and some outstanding structures such as Sarvabhadra Chowk, Sabha Niwas, Chandra Mahal, Mubarak Mahal, and Pritam Chowk.
                            <br /><br />
                            Within the museum, there are five galleries, namely Sarvatobhadra, Textile, Sileh Khana, Sabha Niwas, and Painting & Photography gallery. Here, you get to see the presence of different furniture, artworks, garments, and medals. The museum is wheelchair friendly. There are no restrictions on photography and videography within.

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

export default JantarMantar;