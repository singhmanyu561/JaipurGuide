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

const AbhaneriStepFall = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'http://www.aryavrittravels.com/tour/wp-content/uploads/2017/09/THE-CHAND-BAORI-STEP-WELL-OF-ABHANERI.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/4b/9c/c6/chand-baori-abhaneri.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://www.jaipurcityblog.com/wp-content/uploads/2016/03/10029.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.tripsavvy.com/thmb/mE6VM4NqIIMUfTKdHsGVKrJ1Wi8=/2122x1412/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-855153046-5c6b810ec9e77c000119fbff.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://www.inditales.com/wp-content/uploads/2017/10/harshat-mata-temple-walls-abhaneri.jpg',
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
                        <h1 style={{color:'red'}}>Abhaneri Step Well</h1>
                        <h5>A 2-min walk from the Jaigarh Fort <br />
                        Address: Devisinghpura, Amer, Jaipur, Rajasthan 302001
                        </h5>
                        <br></br>
                        <h2>About Abhaneri Step Well</h2>
                        <br></br>
                        <p>
                            Chand Baori or Abhaneri Step Well is a stepwell located in the Abhaneri village near Jaipur which is a favoured tourist destination. With many national as well as international tourists visiting it,  Abhaneri Step Well is considered to be an architectural wonder.
                            <br /><br />
                            The stepwell is around 30m or 100ft. deep and is one of the deepest and largest step-wells in India. Stepwells are very common in Rajasthan because of its arid and dry climate. Located in the eastern dryer parts of Rajasthan, the stepwell was primarily built to store water.
                             <br /><br />
                            Not only the stepwell stores water, but it is also useful in groundwater harvesting. This marvellous and distinctive quality of Abhaneri Step Well makes it one of a kind in India.  Abhaneri Step Well is regarded amongst the most picturesque step wells in the world. The unique structural formation of the stepwell with its peculiar design has attracted a lot of attention.
                             <br /><br />
                            The stepwell can be seen in movies like Bhool Bhulaiyaa and the internationally acclaimed ‘The Dark Knight Rises’. The beauty of Abhaneri Step Well lies in its history as the stepwell has been in existence since the 8th Century. Till date, the step is functional but not up to its total limits.
                            Located around 100km from the capital city of Jaipur, Chand Baori is older than some major monuments like the Taj Mahal and ancient temples like Khajurao Temples and Chola Temples.

                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Abhaneri Step Well</h2>
                        <br></br>
                        <p>
                            With its history dating back to the 8th Century, Abhaneri Step Well was built by Raja Chanda.  Raja Chanda belonged to the Nikhumba Dynasty which ruled the region for almost 400 years.
                            Raja Chanda had his faith in Harshat Mata, the goddess of joy and happiness. To please Harshat Mata and help the people in his kingdom, Raja Chanda built this step well. Also, there was a temple attached to the stepwell dedicated to Harshat Mata.
                             <br /><br />
                            It was partially razed in the 10th century but with time, the temple was repaired. Due to its geographical setting and climatic resolutions, the region often faced water scarcity.
                            To cope up with this problem, Raja Chanda started the construction of the stepwell. In its original setting,
                            Abhaneri Step Well was only a step well with steps leading to the bottom. In the 18th century when the Mughals invaded the region, they rebuilt the stepwell and constructed walls and built some galleries around the well.
                            Abhaneri Step Well houses the annual Abhaneri festival which occurs before the Sharad Navratri. The  festival is celebrated to embrace and thank Goddess Harshat Mata in a period of 3-days.
                             <br /><br />
                            During the festival, a diving competition is conducted where the young men of the village participate. Also, the step well is very popular globally that it attracts more international visitors than national.
                            The Harshat Temple near the stepwell is older than the stepwell and was built around the 7th century. The name of the village, Abhaneri is said to be originated from the blessings of Harshat Mata who endowed to spread brightness (abha) in the lives of the people.

                        </p>
                        <br></br>
                        <h2>The Architecture of Abhaneri Step Well :</h2>
                        <br></br>
                        <p>
                            The geometrical setting of the step well is so unique that this setting cannot be seen in modern times. Abhaneri Step Well is 100 ft deep and takes around 3,500 steps to go the bottom. The stepwell has steep steps on its three sides and the fourth side consists of galleries on two floors.
                             <br /><br />
                            The total 3,500 steps are built sideways and not straight on all three sides. The fourth side, which faces the stepwell houses some idols of Lord Ganesh and Mahisasurmardini and acts like a pavilion comprising of some wonderfully carved jharokhas.
                            The 3,500 steps of the stepwell make it look like a magical structure and if viewed from a particular distance, they look like an optical illusion. With shadow falling on the steps and sunlight playing its game, the steps of Abhaneri Step Well give a very mystic look.
                            In ancient times, the step well was more than a step well. At a period in history, the stepwell housed an upper palace and the small palace thing had a few rooms. Though with the years gone by, the palace of the stepwell began to deteriorate and now only a section of it can be seen.
                            The step well had the ancient water system and the water was used for several purposes.  This ancient form of the water storage system was disregarded by the Britishers and citing the reason that the water in Abhaneri Step Well is used for drinking as well as other reasons like bathing and washing, they installed the system of pipes and tanks. This led to the fall of the old-fashion water system in the Abhaneri village.


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

export default AbhaneriStepFall;