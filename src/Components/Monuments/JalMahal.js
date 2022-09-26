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

const JaiMahal = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'http://fairlinkgroup.com/uploads/blog/1597403188.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://image.freepik.com/free-photo/jal-mahal-palace-night-jal-mahal-middle-lake-water-palace-was-built-during-18th-century-middle-man-sager-lake-jaipur-rajasthan-india-asia_35024-948.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://spiderimg.amarujala.com/assets/images/2020/04/16/750x506/jal-mahal-jaipur_1587036834.jpeg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/jal-mahal-palace-jaipur-at-night-srilatha-collections.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://www.elitereaders.com/wp-content/uploads/2016/12/jal-mahal-3.jpg',
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
                        <h1 style={{ color: 'red' }}>Jal Mahal</h1>
                        <h5>Address: Amer Rd, Jal Mahal, Amer, Jaipur, Rajasthan 302002
                        </h5>
                        <br></br>
                        <h2>About Jal Mahal</h2>
                        <br></br>
                        <p>
                            Jal Mahal is one of the most splendid architectural palaces sitting in the centre of Man Singh Lake on the outskirts of Jaipur. This masterful creation was earlier a shooting lodge for the Maharajas, but now it has become the most famous spot for sightseeing in Jaipur. Jal Mahal was built by Maharaja Madho Singh in the 1750s for himself and his companions to rest after their duck hunting endeavours. Jal Mahal is a four storeyed building built with red sandstone.
                            <br /><br />
                            It offers a breathtaking view of the Nahargarh hills and Man Sagar Lake that border it. The most alluring feature of this mahal is that four storeys of this site are submerged underwater, and only one storey lies above the water level. It has a garden at the top that consists of varieties of trees and beautiful flowers.
                             <br /><br />
                            Jal Mahal is extremely popular among the visitors for it’s striking architecture and detailed craftsmanship. This palace has been built by combining Rajput and Mughal style of architecture. Due to it’s alluring beauty and rich architectural magnificence it has also been touted as one of the most photographed sites in India. The entry is prohibited inside the fort but you can have a view of this magnificent fort from a considerable distance.

                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Jal Mahal</h2>
                        <br></br>
                        <p>
                            In 1956 AD severe famine was experienced by the people of the area where Jal Mahal is currently standing. This led to an acute shortage of water, and the ruler of Ajmer, therefore, decided to build a dam to deal with the problem of scarcity of water. The dam was initially built with quartzite and earth in the eastern side of the breathtakingly beautiful Ajmer Hills. Later, it was renovated in the 17th century into a masonry structure.
                             <br /><br />
                            This dam is still standing today, and it’s 28.5-34.5 meters wide and 300 meters long. Three gates have also been built in the dam to release a sufficient amount of water to irrigate the nearby agricultural lands. This dam has undergone renovation and restoration by different rulers, but the final renovation was done by Maharaja Jai Singh 11. Other historical places and religious spots like Jaigarh Fort, Amer Fort, Kanak Vrindavan Valley, and Nahargarh Fort were built in the nearby areas of this lake. These are now connected with a tourist corridor of road networks.
                             <br /><br />
                            It is believed that Jal Mahal was built in 1799 by Maharaja Sawai Pratap Singh as a spot to relax after duck hunting. It is also surmised that this palace was built in 1750 by Maharaja Madho Singh 1. The beauty of this palace was later amplified by Maharaja Jai Singh 11 who completely renovated this palace and added a few more striking structures to it. It is also believed that the Man Sagar Lake was also built by Maharaja Sawai Pratap Singh after constructing a huge dam that served as a source of water for the people in that area.

                        </p>
                        <br></br>
                        <h2>Things to do in Jal Mahal:</h2>
                        <br></br>
                        <p>
                            There are umpteen of things that you can do at Jal Mahal to have the best experiences in your memory lanes. Here are a few things that you must try if you’re visiting Jal Mahal-
                             <br /><br />
                            <b> 1. A romantic boat ride: </b>One of the best things to do at Jal Mahal is having a magnificent view of this palace while boating at Man Singh Lake. These boats are made with wood by the traditional wood makers of Vrindavan, and they give a royal experience as you take an escapade around the lake. You can also have a view of the Aravali hills, which has umpteen number of forts and temples on it while boating across the lake.
                             <br /><br />
                            <b>  2. Shopping in the local market:</b> There are many small shops located near the Jal Mahal that sell beautiful jewellery items and exquisite handicrafts of Jaipur. You can also buy khadi clothes from the shops located over here at a very budget-friendly rate.
                             <br /><br />
                            <b>  3. Camel ride:</b> The thrilling and bumpy camel ride can be yet another exhilarating activity that you must try near Jal Mahal, at the Man Sagar Lake. This will give you the traditional Rajasthani feeling as you enjoy the camel ride besides Jal Mahal.
                             <br /><br />
                            <b>  4. Sightseeing: </b>The Water Palace is the most beautiful spot nestled amidst the Nahargarh Hills submerged in Man Sagar Lake. You can enjoy the scenic view of this palace during sunset and sunrise as its beauty increases in multiple folds during this time.
                             <br /><br />
                            <b> 5. Flaunt your photography skills:</b> This is something that nobody of you can even think of missing when you’re at Jal Mahal as this palace is the most photographed spots all across India. You can have tons of memories to take back with you by clicking beautiful pictures at this site. So wake up the photographer inside you and get ready to capture the immense beauty of this place in your camera.



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

export default JaiMahal;