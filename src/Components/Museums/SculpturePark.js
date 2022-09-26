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

const SculptureMuseum = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.travelescape.in/wp-content/uploads/2019/05/Madhavendra-Palace.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://sculpturemagazine.art/wp-content/uploads/2019/05/Savia-Mahajan-Spine-of-Spine-Lithified-Lives.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://designpatakibucket.s3.ap-south-1.amazonaws.com/wp-content/uploads/2018/07/Jaipur_sculpturepark_Subodhgupta_Bhartikher_Jamesbrown_Haim-Steinbach.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://culture360.asef.org/media/2018/7/Arman_The_Day_After_1984.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://i.pinimg.com/originals/3f/4a/53/3f4a53199f0a535b78ebef598066d503.jpg',
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
                        <h1 style={{ color: 'red' }}>The Sculpture Park</h1>
                        <h5>Right by Nahargarh Fort <br/>
                        Address: Krishna Nagar, Brahampuri, Jaipur, Rajasthan 302007
                        </h5>
                        <br></br>
                        
                        <Carousel obj={CarouselData} />
                        <br></br>
                      
                        <p>The first contemporary public sculpture park in India and also one of the first examples of public 
                            and private partnership in the arts, The Sculpture Park at Madhavendra Palace in Nahargarh fort has turned an 19th-Century palace into a Sculpture Gallery with works displayed throughout the meandering rooms and grand courtyards. Traditional Indian architecture creates a dramatic backdrop for the monumental works occupying central positions and more intimate works featured throughout the many rooms, awaiting discovery. Visitors are invited to meander through the palace, to encounter and experience each work in a range of settings and display.The first contemporary public sculpture park in India and also one of the first examples of public and private partnership in the arts, The Sculpture Park at Madhavendra Palace in Nahargarh fort has turned an 19th-Century palace into a Sculpture Gallery with works displayed throughout the meandering rooms and grand courtyards. Traditional Indian architecture creates a dramatic backdrop for the monumental works occupying central positions and more intimate works featured throughout the many rooms, awaiting discovery. Visitors are invited to meander through the palace, to encounter and experience each work in a range of settings and display.

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

export default SculptureMuseum;