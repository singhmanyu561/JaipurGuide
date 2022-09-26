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

const AnokhiMuseum = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/06/25205345/250617_anokhimuseum1.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://jaipurcitypost.files.wordpress.com/2013/04/anokhi-museum-of-hand-printing-amer-jaipur.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mGgIm_9RpKA5zsVh74v88gHaEK%26pid%3DApi&f=1',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://jaipurtourism.co.in/images//tourist-places/anokhi-museum-of-hand-printing-jaipur/anokhi-museum-of-hand-printing-jaipur-tourism-entry-ticket-price.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2-T5wZkjkrRYl095iNiXWQHaE8%26pid%3DApi&f=1',
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
                        <h1 style={{ color: 'red' }}>Anokhi Museum</h1>
                        <h5>Address: Anokhi Haveli Kheri Gate, Amer, Jaipur, Rajasthan 302028</h5>
                        <br></br>
                        <p>This museum is a must visit for all the craft & block print lovers. Anokhi Museum houses the world's
                             best block painting garments and is a cultural endeavor of Anokhi clothing brand. This museum exhibits
                              the oldest art form of Rajasthani art at its very best. Detailed explanation about every cloth is mentioned
                               along with the quality of fabric and various other details.Anokhi Museum holds a UNESCO certification
                                and houses more than a hundred garments. The main purpose of this museum is to promote the oldest
                                 art form of Rajasthan. Other then the exhibits, the Museum organizes various educational programs 
                                 and workshops to focus on various aspects of this ancient craft. There are various demonstrations
                                  related to block carving, print making, and block carving, etc. for all the visitors on a daily basis.
                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Anokhi Museum of Hand Printing Jaipur</h2>
                        <br></br>
                        <p>Anokhi as a brand, was established way before the foundation of the museum was laid. The brand was founded by Rachel’s in-laws, Faith Singh and J. P ‘John’ Singh during the early 1970s.
                        Anokhi Museum of Hand Printing is the brainchild of Rachel Bracken Singh, along with husband Pritam Singh. They started the museum in 2002 with the vision to conserve the age old craft of hand block printing, which is an intricate part of Rajasthani culture and tradition. Rachel is the Founder and Director of the museum.
                        Although it was Rachel who initiated the founding and setting up the museum, it was her father-in-law, John Singh who purchased the ruined mansion during the late 1970s. The restoration work on the mansion started around 1989 and included renowned architects, Nimish patel and Parul Zaveri.
                        Rachel was very particular in restoring the building to its original grandeur as much as possible. Help came from the local artisans and craftsmen, along with the use of traditional architectural techniques and local materials.
                        It took 3 years to complete the renovation and bring the mansion back to its original form. Due to the preservation work done during the restoration of the mansion, the museum was conferred with the ‘Cultural Heritage Conservation’ award by UNESCO in the year 2000.
                        The building that houses the museum was once an ancient dilapidated mansion in ruins. The original name of the mansion used to be Chanwar Palkiyon ki Haveli before it was renamed Anokhi Museum of Hand Printing. However, the locals still call it by its original name. It is said that the mansion once was used by the palanquin bearers as their rest house during the time when royals ruled the world.
                        The opening exhibition of the museum was named ‘Print Progress – Innovation and Revival 1970-2005. The exhibition was put together by the then Museum Consultant, Pramod Kumar along with Emma Ronald who was the then museum curator.
                        At present, Suki Skidmore is the curator and visiting consultant of the museum and has been working alongside Rachel since 2007.
                        </p>
                        <br></br>
                        
                        <h2>Opening Time</h2>
                        <p>The museum is open between 10:30 AM to 5:00 PM on Tuesdays through Saturdays. On Sundays, the museum timings are between 11:00 AM to 4:30 PM.</p>
                        <br></br>
                        <h2>Places to visit near Anokhi Museum of Hand Printing Jaipur</h2>
                        <p>
                            <b>1. Amber Fort and Palace: </b>
                            <p>Commonly called Amer Fort, this was the old capital and the seat of the rulers of Kachwaha Dynasty before the 
                            capital was shifted to Jaipur. The massive fort speaks of magnificence and opulence of the royals. A visit to 
                            Amer fort will leave any visitor in awe of its architecture, landscaping, history and the mix of traditions 
                            that reflect in the designs of each section of the palace.</p>
                            
                            <b>2. Jal Mahal:  </b>
                            <p>Situated right in the middle of Man Sagar Lake, the Jal Mahal is an excellent example of Rajasthani grandeur.
                            What one can see from distance is only 1 out of 5 floors of the palace because the rest of the four floors
                              remain underwater. Visit the palace to experience royalty.</p>

                            
                            <b>3. Jaigarh Fort:  </b>
                            <p>
                                Famous for its subterranean passages linked to the Amer fort, the Jaigarh fort was built by Maharaja Jai
                                Singh II with the intention to protect the Amer fort complex. This fort boasts to house ‘Jaivana’, a 
                                cannon which was the world’s largest cannon on wheels at the time it was built. Visit the fort and 
                                come back mesmerized with the extent of precision of the architecture and design which particularly
                              focuses towards the defense of both Amer and Jaigarh forts.</p>
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

export default AnokhiMuseum;