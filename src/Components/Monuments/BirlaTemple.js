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

const BirlaTemple = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.transindiatravels.com/wp-content/uploads/birla-mandir-3.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://travelideas4u.files.wordpress.com/2012/05/lakshmi_narayan_temple-night.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://jaipurtourism.co.in/images//tourist-places/laxmi-narayan-temple-birla-mandir-jaipur/laxmi-narayan-temple-birla-mandir-jaipur-tourism-location-address.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.pinkcityroyals.com/assets/images/jaipur-places-pics/birla-mandir_pinkcityroyals01.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://i.pinimg.com/736x/ed/b2/e2/edb2e22c53bb0d90098df577863e5d2b.jpg',
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
                        <h1 style={{ color: 'red' }}>Birla Mandir Jaipur</h1>
                        <h5>Address: Birla Mandir, Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302022
                        </h5>
                        <br></br>
                        <h2>About Birla Mandir Jaipur</h2>
                        <br></br>
                        <p>

                            Known originally as Laxmi Narayan Mandir, Birla Mandir is located at the base of Moti Dungri Temple, Jaipur. The temple is a popular pilgrimage site among the Hindu devotees. Made of sparkling white marble, the structure looks incredibly marvelous.
                            Lush green gardens surround the temple on the sides and give the structure a truly dreamy touch.
                            Birla Mandir has a total of three domes, each one representing a different perspective of religion. The temple features stunning carvings and drawings all around its body. The walls of the structure are adorned with mythological quotes and holy charms from the Hindu holy book of Geeta.

                            In addition, various mythological events and happenings are also carved on the shrine’s interior walls. The temple’s architectural beauty is totally admirable and appreciable.
                            The most important part of Birla Mandir is the beautiful monolithic figurine of Lakshmi Narayan. The temple also houses an idol of Shri Ganesha, which is equally stunning and appreciable. You will also find pictures and sculptures of various other Gods and Goddesses, which strike a religious charm in the air inside the temple.

                            The temple even shelters the pictures of legendary personalities, such as Zarathustra, Jesus Christ, Gautam Buddha, Confucius, and Socrates. Birla Mandir is also home to a beautiful museum that stores and exhibits all the ancestral assets of the respected Birla family.
                            All these elements combine to make Birla Mandir a perfect destination for spiritual seekers of every religion. The temple gets a lot of visitors all through the year and the crowd becomes even bigger during important festivals.

                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Birla Mandir Jaipur</h2>
                        <br></br>
                        <p>
                            In accordance with the popular historical belief, Birla Mandir at Jaipur in Rajasthan is built on the land that was handed over to the country’s reputed Birla family by the respected Maharaja of that time in exchange for just INR 1. The construction of the temple began back in the year 1977 by the B.M. Industrial Foundation.
                            <br/>
                            The structure was developed over a total time period of around eight years and the construction work finally ended in the year 1985.
                             <br />
                            In reference to historical facts, Mahatma Gandhi was invited to inaugurate Birla Mandir. However, Gandhi stated that he would only accept the invitation if the temple would be open to devotees of all the castes of society. The temple’s consecration ceremony finally happened on February 22, 1985.

                        </p>
                        <br></br>
                        <h2>What Not to Miss at  Birla Mandir Jaipur:</h2>
                        <br></br>
                        <p>

                            <b>1. Moti Dungri Temple-</b>Located at a distance of just one kilometer from Birla Mandir, Moti Dungri Temple is dedicated to Lord Ganesha.
                            Counted among the largest Ganesh mandirs in the city of Jaipur, this temple is frequently visited by spiritual seekers, God lovers, experience seekers, and newlyweds.
                            Moti Dungri Temple is open for visitors from 4.30 AM to 9.15 PM all through the week.
                           <br /> <br />
                            <b>2. Jantar Mantar-</b> Located at a short distance of about two kilometers from Birla Mandir, Jantar Mantar happens to be one of the major tourist attractions of the Pink City.
                            Jantar Mantar is the largest space observatory in India, which is utilized for identifying the positions of and estimating the distance between the various celestial objects.
                            The observatory has a total of nineteen large astronomical instruments, among which Samrat Yantra, the biggest sundial in India, forms the major attraction. Jantar Mantar is open for visiting from 9 AM to 5 PM, all through the week.
                             <br /> <br />
                             <b>3. Hawa Mahal -</b>Situated at a distance of around 4.7 kilometers from Birla Mandir, the very popular Hawa Mahal forms one of the major tourist destinations in the country. This 5-storeyed beehive-like building is built of pink and red sandstone.

                            The name of this monument is inspired by the unique fact that it receives a soothing breeze all the time.
                            <br /> <br />
                            <b> 4. Jal Mahal - </b>Located at a distance of approx 8.5 kilometers from Birla Mandir, the beautiful and charming Jal Mahal happens to be a truly surreal palace constructed in the center of Man Sagar Lake.

                            It was constructed by Maharaja Madho Singh I for being utilized as a rest house for his favorite duck hunting events. This water palace has a total of 5 floors, out of which four floors stay underwater.

                            One of the major attractions of the palace is the lush green, aromatic terrace garden, known as Chameli Bagh.

                            Although entry to Jal Mahal isn’t allowed, yet history buffs, photo fanatics, and experience seekers never miss out on catching a glimpse of the exterior beauty of the palace.
                            <br /> <br />
                            <b> 5. Dungri Fort- </b>Located at a distance of 1 kilometer from Birla Mandir, Dungri Fort happens to be a very small palace that is designed in a similar fashion as that of the Scottish castles. The fort was occupied by the son of Maharaja Madho Singh in the bygone times.

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

export default BirlaTemple;