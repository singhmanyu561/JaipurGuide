import React from 'react';
import SearchAppBar from '../MyPages/SearchAppBar';
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

// import backImageMuseums from '../Assets/backImage.jpg';
import Footer from '../MyPages/Footer';
// import back from '../Assets/Untitled_design.gif';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import backImage from '../Assets/backImage.jpg'
import SendMessage from '../MyPages/Contact2'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(40),
            height: theme.spacing(40),
            marginLeft: 35
        },

    },

    img: {
        width: 320,
        height: 280,
        '&:hover': {
            // borderRadius: 100,
            zoom: '102%'
        }
    }
}));



const Monuments = () => {

    const classes = useStyles();

    return (
        <>
            {
                localStorage.getItem('login') === 'true'
                    ?
                    <SearchAppBarLogout />
                    :
                    <SearchAppBar />
            }
            
            <div style={{ margin: 0, backgroundImage: `url('https://store-images.s-microsoft.com/image/apps.49068.14458991885146991.028b24d1-0638-459d-bdfd-a6955fe1edf1.4b558854-e8dc-439e-84e1-7506fa8358a5?mode=scale&q=90&h=1080&w=1920')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1 }}>
                <br></br>
                <div style={{ margin: 20 }}>
                    <div style={{ border: '2px solid white', background: '#f7b76f', opacity: 0.8 }}>
                        <h1 style={{ textAlign: 'center', color: '#f43c1f', padding: 50 }}>MONUMENTS IN JAIPUR</h1>
                        <p style={{ marginLeft: 50, marginRight: 50, marginBottom: 50, textAlign: 'justify', color: 'black' }}>
                            Jaipur, the Pink City is a city of passionate architecture and royal grandeur.
                            While the ruins of palatial palaces and mighty forts take you back in time,
                            witness the relics of the golden age at the Hotels of the city.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec vulputate urna. Mauris vel augue feugiat, pulvinar massa ac, iaculis elit.
                            Mauris at pulvinar leo, at hendrerit nunc. Cras fringilla ante quis nisl pellentesque, quis dapibus lorem eleifend. Etiam volutpat tellus nec erat
                            ultricies, non consectetur purus rhoncus. Aenean vel mauris sit amet ex egestas aliquet sit amet eget diam. Quisque ex arcu, convallis in faucibus et,
                            malesuada eget metus. Integer tristique pellentesque mauris ac malesuada.

                            Sed convallis ante feugiat enim commodo congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pellentesque libero in nisl
                            scelerisque, id egestas tortor commodo. Aenean maximus convallis nulla eu tempor. Vestibulum commodo, lorem nec eleifend viverra, tellus
                            erat placerat leo, eget varius mi risus sed libero. Phasellus porttitor sit amet turpis ac porta. Praesent aliquam lectus in velit tincidunt,
                            id luctus augue maximus. Nullam ultricies eu ante a imperdiet. Fusce molestie viverra dignissim. Fusce semper tellus vel justo congue, vitae pretium nulla commodo. Nulla eu enim at ligula scelerisque maximus in a libero.
                        </p>
                        <p style={{ marginLeft: 50, marginRight: 50, marginBottom: 50, textAlign: 'justify', color: 'black' }}>
                            Jaipur, the Pink City is a city of passionate architecture and royal grandeur.
                            While the ruins of palatial palaces and mighty forts take you back in time,
                            witness the relics of the golden age at the Hotels of the city.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec vulputate urna. Mauris vel augue feugiat, pulvinar massa ac, iaculis elit.
                            Mauris at pulvinar leo, at hendrerit nunc. Cras fringilla ante quis nisl pellentesque, quis dapibus lorem eleifend. Etiam volutpat tellus nec erat
                            ultricies, non consectetur purus rhoncus. Aenean vel mauris sit amet ex egestas aliquet sit amet eget diam. Quisque ex arcu, convallis in faucibus et,
                            malesuada eget metus. Integer tristique pellentesque mauris ac malesuada.

                            Sed convallis ante feugiat enim commodo congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pellentesque libero in nisl
                            scelerisque, id egestas tortor commodo. Aenean maximus convallis nulla eu tempor. Vestibulum commodo, lorem nec eleifend viverra, tellus
                            erat placerat leo, eget varius mi risus sed libero. Phasellus porttitor sit amet turpis ac porta. Praesent aliquam lectus in velit tincidunt,
                            id luctus augue maximus. Nullam ultricies eu ante a imperdiet. Fusce molestie viverra dignissim. Fusce semper tellus vel justo congue, vitae pretium nulla commodo. Nulla eu enim at ligula scelerisque maximus in a libero.
                        </p>
                    </div>
                    <br></br><br></br>
                    <div style={{ border: '2px solid white' }}>
                        <br></br>
                <h2 style={{ textAlign: 'center', color: 'white' }}>SOME FAMOUS MONUMENTS OF JAIPUR</h2>
                <div className={classes.root}>
                    <Paper elevation={3}><a href="/AbhaneriStepFall"><img className={classes.img} src='https://media-cdn.tripadvisor.com/media/photo-s/1b/4b/9c/c6/chand-baori-abhaneri.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Abhaneri Step Fall</span></a></Paper>
                    <Paper elevation={3}><a href="/AmerFort"><img className={classes.img} src='https://www.oyorooms.com/blog/wp-content/uploads/2017/10/Famous-Forts-in-India-1.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Amer Fort</span></a></Paper>
                    <Paper elevation={3}><a href="/BirlaTemple"><img className={classes.img} src='https://www.transindiatravels.com/wp-content/uploads/birla-mandir-3.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Birla Temple</span></a></Paper>
                    <Paper elevation={3}><a href="/CityPalace"><img className={classes.img} src='https://live.staticflickr.com/7156/6687120625_7cafa5a529_b.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>City Palace</span></a></Paper>
                </div>
                <div className={classes.root}>
                    <Paper elevation={3}><a href="/JaigarhFort"><img className={classes.img} src='https://toursfromdelhi.com/wp-content/uploads/2019/07/Jaigarh-Fort-Jaipur.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Jaigarh Fort</span></a></Paper>
                    <Paper elevation={3}><a href="/JalMahal"><img className={classes.img} src='https://image.freepik.com/free-photo/jal-mahal-palace-night-jal-mahal-middle-lake-water-palace-was-built-during-18th-century-middle-man-sager-lake-jaipur-rajasthan-india-asia_35024-948.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Jai Mahal</span></a></Paper>
                    <Paper elevation={3}><a href="/JantarMantar"><img className={classes.img} src='https://jaipurtourism.co.in/images/places-to-visit/header/jantar-mantar-jaipur-entry-fee-timings-holidays-reviews-header.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Jantar Mantar</span></a></Paper>
                    <Paper elevation={3}><a href="/NahargarhFort"><img className={classes.img} src='https://www.fabhotels.com/blog/wp-content/uploads/2019/06/Nahargarh-fort_600-1280x720.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Nahargarh Fort</span></a></Paper>
                </div>
                <br></br>
                </div>
                <br></br>
                <SendMessage />
                <br></br>
                <Footer style={{ position: 'fixed', marginBottom: 0 }} />
            </div>
           
            </div>
           
        </>
    );
}

export default Monuments;