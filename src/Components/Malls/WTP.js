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

const WTP = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.jaipurcityblog.com/wp-content/uploads/2016/06/DSC_0051-2-1024x683.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.jaipurcityblog.com/wp-content/uploads/2015/10/JCB.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://jaipurbeat.files.wordpress.com/2014/06/img_4245.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://i0.wp.com/www.jaipurstuff.com/wp-content/uploads/2019/11/World-Trade-Park-Jaipur.jpg?fit=956%2C535&amp;ssl=1',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://pbs.twimg.com/media/DMUMnz1VAAEbn1V.jpg',
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
                        <h1 style={{ color: 'red' }}>World Trade Park</h1>
                        <h5>Address: Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur</h5>
                        
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                    
                        <p>Want to shop a lot but don&#39;t have enough money in your pocket. Well,
                        don&#39;t worry because this mall in Jaipur is here to help you get what you
                        need within your budget. Known for its unique architectural design, this
                        is a huge mall that has two blocks namely north and south along with
                        computerised parking facility. And if you run out of cash, don't worry
                        because this mall in Jaipur has 11 floors with ATM in each one of
                        them. Now, that is big! Those who want to spend their day shopping
                        can head to International brands like Zara, Forever New, Celio, Aldo,
                        Vero Moda and Only.
                        For lovers of gastronomy, KFC, Pizza Hut, Vaango, Yo China are only
                            some of the names leading the list.</p>
                       
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

export default WTP;