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
            marginLeft: 30
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



const Religious = () => {

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
            
            <div style={{ marginTop: 0, backgroundImage: `url('https://store-images.s-microsoft.com/image/apps.49068.14458991885146991.028b24d1-0638-459d-bdfd-a6955fe1edf1.4b558854-e8dc-439e-84e1-7506fa8358a5?mode=scale&q=90&h=1080&w=1920')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1 }}>
                <br></br>
                <div style={{ margin: 20 }}>
                    <div style={{ border: '2px solid white', background: '#f7b76f', opacity: 0.8 }}>
                        <h1 style={{ textAlign: 'center', color: '#f43c1f', padding: 50 }}>RELIGIOUS PLACES IN JAIPUR</h1>
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
                    <br></br> <br></br>
                    <div style={{ border: '2px solid white' }}>
                    <br></br>
                <h2 style={{ textAlign: 'center', color: 'white' }}>SOME FAMOUS RELIGIOUS PLACES OF JAIPUR</h2>
                <div className={classes.root}>
                    <Paper elevation={3}><a href="/AksharDhamTemple"><img className={classes.img} src='https://myholidayhappiness.com/uploads/836a46e8aafae98390ef20757ef56918.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Akshar Dham Temple</span></a></Paper>
                    <Paper elevation={3}><a href="/BirlaMandir"><img className={classes.img} src='https://www.transindiatravels.com/wp-content/uploads/birla-mandir-3.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Birla Mandir</span></a></Paper>
                    <Paper elevation={3}><a href="/GaltajiTemple"><img className={classes.img} src='https://www.nativeplanet.com/img/2017/09/1coverpic-06-1504669626.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Galtaji Temple</span></a></Paper>
                    <Paper elevation={3}><a href="/GarhGanesh"><img className={classes.img} src='https://new-img.patrika.com/upload/2018/11/14/gadh_ganesh_mandir.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Garh Ganesh</span></a></Paper>
                </div>
                <div className={classes.root}>
                    <Paper elevation={3}><a href="/GovindDevjiTemple"><img className={classes.img} src='https://pictureofrajasthan.com/assests/uploads/destination/9a96f6cd1ca6e362b0849bf28e0f4f7c--jaipur-india-delhi-india.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Govind Devji Temple</span></a></Paper>
                    <Paper elevation={3}><a href="/MotiDongriTemple"><img className={classes.img} src='https://jaipurtourism.co.in/images/places-to-visit/header/moti-doongri-ganesh-temple-jaipur-tourism-entry-fee-timings-holidays-reviews-header.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Moti Dungri Temple</span></a></Paper>
                    <Paper elevation={3}><a href="/ShilaDeviMandir"><img className={classes.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mj3EeVsPlFMngxDOJrH7qwHaFa%26pid%3DApi&f=1' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Shila Devi Mandir</span></a></Paper>
                    <Paper elevation={3}><a href="/SunTemple"><img className={classes.img} src='https://content3.jdmagicbox.com/comp/jaipur/x3/0141px141.x141.171226101315.u7x3/catalogue/sun-temple-of-jaipur-surya-mandir-galta-jaipur-temples-rru1tzvwed.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Sun Temple</span></a></Paper>
                    <Paper elevation={3}><a href="/TarkeshwarMahadev"><img className={classes.img} src='https://new-img.patrika.com/upload/2018/08/06/tarkeshwar_ji-1-m.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Tarkeshwar Mahadev</span></a></Paper>
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

export default Religious;