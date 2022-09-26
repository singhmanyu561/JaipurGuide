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

const JaigarhFort = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://toursfromdelhi.com/wp-content/uploads/2019/07/Jaigarh-Fort-Jaipur.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Rajasthan-Jaipur-Jaigarh-Fort-compound-Apr-2004-00.JPG',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://static.toiimg.com/photo/62080112/.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://static.toiimg.com/photo/65755679.cms',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://www.tripsavvy.com/thmb/CNEgGGkUrA8wMOY1fVKtweHEOYQ=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-615625258-723b86363a654db482191db78b31294e.jpg',
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
                        <h1 style={{ color: 'red' }}>Jaigarh Fort</h1>
                        <h5>Address: Devisinghpura, Amer, Jaipur, Rajasthan 302028
                        </h5>
                        <br></br>
                        <h2>About Jaigarh Fort</h2>
                        <br></br>
                        <p>
                            Jaigarh Fort is a monumental fort located on the Aravalli Ranges of Rajasthan, towering at an impressive height of 500m above sea level. The fort was constructed in 1726 by the famous Raja Jai Singh II as a means to fortify the Amer Fort.
                            <br/><br/>
                            In fact, you can see an unobstructed view of Amer Fort and its complex from the Jaigarh Fort and also witness a breath-taking view of the green hills and lakes that surround the fort. It is one of the most distinctive historical monuments in the Jaipur area and has many unique features that make it unique.
                              <br /><br />
                            The largest canon in the world, which is called the Jaivana Cannon, can be found inside the premises. The canon was built inside the Jaigarh Fort itself and is said to have participated in many famous Rajput battles and wars. Other attractions inside the fort include the Vilas Mandir, the Aram Mandir, Laxmi Vilas and the Lalit Mandir.
                              <br /><br />
                            A unique feature of the fort is the lattice-work windows from where you can observe the expanse of the surrounding landscape and the large Persian garden which has four distinct parts. The original purpose of the Jaigarh Fort was to store arms, ammunition, armours and supplies for the Amer Fort in case of war.
                              <br /><br />
                            It is now a significant historical monument itself, with visitors travelling from far and wide to get an insight into the rich culture and history of the Rajputs of Amer. The monument is approximately 3 kilometres long and stands at a width of 1 kilometre.

                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Jaigarh Fort</h2>
                        <br></br>
                        <p>
                            The area that is home to the Jaigarh Fort and the Amer Fort was initially ruled by the Meenas, and it is believed that the Jaigarh Fort was built by them along with the Amer Fort. The Meenas originally built the fort as the home of the King and the royal family, who resided there, apart from their residency in the Amer Fort.
                              <br /><br />
                            After the Meenas were overthrown by the Kachwahas, they made certain changes in the structure of the fort. During the rule of the Mughal ruler Aurangzeb, the fort came under the charge of Raja Jai Singh II who made significant changes to the structure and utility of the fort, and because of his contributions, the fort came to be named Jaigarh- after Jai Singh.
                              <br /><br />
                            Throughout the reign of the Mughals, including that of the great emperor Akbar, Jaigarh Fort was used as a place to keep the treasure, loot, arms, ammunition and other supplies for the Rajputs. An interesting feature about the fort is that despite seeing several rules and coming under siege many times, no one truly ever managed to capture the fort, which is why it earned the name- Victory Fort.

                        </p>
                        <br></br>
                        <h2>What Not to Miss at  Jaigarh Fort:</h2>
                        <br></br>
                        <p>
                            Despite Jaigarh Fort being an exciting tourist attraction in itself, there are several exciting places to visit in the vicinity. Here are interesting attractions around Jaigarh Fort:
                              <br /><br />
                            <b> 1. Amber Fort - </b>Jaigarh Fort was built as a fortification for the famous Amber Fort. Amber Fort has a rich and varied history of its own, with opulent structures, great views and royal architecture that will leave you spellbound. The fort took 148 years to build, and every corner of the structure will remind you of the grandeur of the Rajputs.
                                  <br /><br />
                            <b> 2. The Shila Devi Temple -</b> The Shila Devi Temple is a temple dedicated to Goddess Kali, located inside the Amber Fort. The temple is made of sandstone and is surrounded by a geometric garden. The temple, which is over 400 years old, is said to have been constructed for a Bengali princess who came to live in Amber Fort after her wedding to a Rajput Prince.
                              <br /><br />
                            <b> 3. Anokhi Museum of Hand Printing -</b> The Anokhi Museum is a small, quaint shop that is dedicated to the age-old craft of block printing by hand. It is located a short walk of around 18 minutes from the Jaigarh Fort. You can buy authentic local textiles, handicrafts and much more when you are here. It is also home to a small café that serves some of the best organic coffee in the area.
                            <br /><br />
                           <b> 4. Panna Meena ka Kund - </b>This is an ancient well that is located at a short distance from the fort. This incredible structure, which was built in the 16th century, was used as a well and irrigation centre by the locals of the area, who used to gather and discuss their daily lives. There is also an adjoining temple, another interesting heritage site that is worth visiting.
                            <br /><br />
                           <b> 5. Elephantastic - </b>Jaipur and its surrounding areas are known for their exciting elephant rides. One such place where you can enjoy a short tour on the back of an elephant is Elephantastic, where there are trained elephant caretakers and guides who are guaranteed to give you the best time.
                            <br /><br />
                            <b> 6. The Sound and Light Show in Amber Fort -</b> One of the most unique ways of discovering the vibrant history of Amber Fort is by checking out the Sound and Light show that uses HD sound and laser lights to project the history of all the rulers of Amber Fort on the walls of the palace itself.


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

export default JaigarhFort;