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

const AmerFort = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.oyorooms.com/blog/wp-content/uploads/2017/10/Famous-Forts-in-India-1.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/118270_Amber_Fort-iStock_000011498548Small.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://www.travelogyindia.com/storage/app/itinerary/75/amer-fort-in-jaipur.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.tripsavvy.com/thmb/vPLqfCxiWIlZjfRKtb_L9m47Cp0=/2121x1193/smart/filters:no_upscale()/GettyImages-154908686-5b9e3f52c9e77c0057fb536f.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://edge.ixigo.com/ixi-api/img/56fa2574bad3eb6e72141533_600x315.jpg',
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
                        <h1 style={{color:'red'}}>Amer Fort</h1>
                        <h5>A 2-min walk from the Jaigarh Fort <br/>
                        Address: Devisinghpura, Amer, Jaipur, Rajasthan 302001
                        </h5>
                        <br></br>
                        <h2>About Amer Fort</h2>
                        <br></br>
                        <p> The complex of the Amer fort made of pink and yellow sandstone, you will witness the regal finesse of Rajputanas. The majestic beauty resides in the pink city of Jaipur, bathing in charm atop the Cheel ka Teela(Hill of Eagles).
                        <br/>
                        The fort is a pearl on the crown of Jaipur. Over five thousand tourists visit the fort every day to bask in its royal splendour. The Amer fort has also been inducted into the UNESCO world heritage list along with five other forts of Rajasthan.
                        <br />
                        The fort is famous for the exquisite Hindu elements peaking through its architecture. The palace features large parapets and several intricately designed gateways that give it a stately vibe. Rajput ruler Raja Man Singh built the fort in 1592.
                        <br />
                        The fort is a famous historical monument and a reflection of Rajputana style architecture. It is most famous for its elephant rides and the sound and light show that draws the tourists in thousands every day. The fort is a fine example of the creativity and craftsmanship of the Rajput artists and architects. Amer Fort is one of the oldest forts of Rajasthan and says a lot about the state’s glorious past.

                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Amer Fort</h2>
                        <br></br>
                        <p>
                            The Meenas founded the small town of Amer in 967 CE. The settlement was built by Raja Alan Singh of the Chanda clan. The famous Amer fort was later built on the ruins of this settlement by Raja Man Singh, the Kachwaha King of Amer.
                            <br />
                            The city of Amer has become even more popular as the home town of princess Jodha- the Consort of Akbar. Raja Man Singh was an ally in the court of Akbar. Due to this, many structures in the fort are influenced by Mughal style architecture.
                            <br />
                            The reflections of it are present in the Diwan-i-Khas of the Amer Palace. However, the fort was completed and fully expanded by Jai Singh I. He built a beautifully painted Ganesh poll in the palace that still captivates the eyes of may visitors.
                            <br />
                            Many ancient structures built by the Meenas have seen the wrath of time and lost their identity. But the edifice of the Amer fort still stands in all its glory. The fort saw many improvements in design and structure by the successive Rajputana rulers over 150 years. It is what shaped it into an excellent example of artistic architectural style.

                        </p>
                        <br></br>
                        <h2>Things to do in Amer Fort:</h2>
                        <br></br>
                        <p>
                            <b> 1. Elephant ride: </b>The elephant ride to the central courtyard of the palace is an exciting journey. You will feel your spirits hiking up as you experience the literal highs and lows on the back of the elephant. It is a must-do activity for tourists in Amer fort. The elephant rides are so popular that almost all the elephants get pre booked every day. The journey provides you with beautiful vistas as you travel up the hillside.
                            <br></br><br></br>
                           <b> 2. Museum and garden visit: </b>You can relive the history of the palace and the Rajputs by visiting the museum inside the palace. In the Turban museum, you can find The beautiful Char garden which is another breathtaking site in the fort, which provides picturesque views of the town below.
                            <br></br><br></br>
                           <b> 3. Dance programs:</b> Entertaining dance programs are held in the evening in Sukh Mahal. You can book your tickets at the ticket counter and enjoy classical Rajasthani dance performances.
                            <br></br><br></br>
                           <b> 4. Dining experience: </b>The Fort also features a multi-cuisine restaurant that serves delicious meals. Surabhi restaurant caters to the tastes of tourists from different places. The cuisines range from continental flavours to local Rajasthani delicacies like daal bati, Gatte ki sabzi etc.
                            <br></br><br></br>
                           <b> 5. Puppet shows: </b>The dinner is made more entertaining with amusing puppet shows and dances. They make the ambience of the place fun filled and engaging for the visitors. The foreign tourists especially enjoy the tiny traditionally clad puppets showing entertaining tricks.
                            <br></br><br></br>
                           <b> 6. Visiting temples:</b> The Hindu beliefs and culture are deeply entwined in every nook and cranny of the temple. You can find a lot of ancient temples inside the fort that are beautifully built and radiate overwhelming spiritual vibes. Siladevi is one of the most popular places of worship in the fort.


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

export default AmerFort;