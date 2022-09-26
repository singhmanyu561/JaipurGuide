import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherMalls from './OtherMalls'
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

const GTCentralMall = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://shreshthaconsultants.com/wp-content/uploads/2019/10/gttt-1.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://media-cdn.tripadvisor.com/media/photo-s/17/c1/e7/66/img-9209-01-largejpg.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://3.bp.blogspot.com/-TSyZZ22cCu0/XHG-jipi9RI/AAAAAAAAaEs/Se9GiqQJfj0ded--RcpeiIWagu19d-neQCLcBGAs/s1600/IMG-6853%2Btravellingphone%2BEdited%2B51.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://i.ytimg.com/vi/rpkFZ3JnKq4/hqdefault.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://1.bp.blogspot.com/-hKqb8un5BF0/XH8LXKdJCCI/AAAAAAAAaJA/53w_vX9RICgfj4pxkmKKBbgUIIjKTLoHgCLcBGAs/s1600/IMG_2530%2BEdited%2Bmore%2Bsharpen%2B25.jpg',
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
                        <h1 style={{ color: 'red' }}>GT Central Mall  </h1>
                        <h5>Address: No. 306, Gaurav Tower, Jawahar Lal Nehru Marg, D-Block, Crystal Court, Malviya Nagar, Jaipur</h5>

                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>

                        <p>Known as one of the most popular malls in the city, it lives up to its name. The mall is a one-stop 
                            destination for all your cravings and needs. Right from McDonald’s, Burger King and CCD to local 
                            brands of Jaipur, this mall will welcome all guests with open arms, even our little buddies! 
                            The mall features a kids' play area outside the building and a gaming area inside. Even INOX knows
                             how to treat the kids fancy with their kiddies section made exclusively for them! The INOX Insignia'
                              here is a place to be when it comes to movie viewing in the most comfortable theatre! It has less
                               than 20 couches for those of you who love a little privacy and lesser crowd.

                            </p>


                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherMalls />

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

export default GTCentralMall;