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



const Travels = () => {

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
                        <h1 style={{ textAlign: 'center', color: '#f43c1f', padding: 50 }}>TRAVELS IN JAIPUR</h1>
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
                <h2 style={{ textAlign: 'center', color: 'white' }}>SOME FAMOUS TRAVELS IN JAIPUR</h2>
                <div className={classes.root}>
                    {/* <Paper elevation={3}><a href="/AirTaxi"><img className={classes.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iuGnYNlqibEl0w7dbr--8AHaEd%26pid%3DApi&f=1' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Air Taxi</span></a></Paper> */}
                    <Paper elevation={3}><a href="/Bicycle"><img className={classes.img} src='https://th.bing.com/th/id/OIP.wN_v8KIO43ZAW7FYerZSEgHaE8?w=243&h=180&c=7&o=5&dpr=1.5&pid=1.7' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Bicycle</span></a></Paper>
                    <Paper elevation={3}><a href="/CamelSafari"><img className={classes.img} src='https://images.thrillophilia.com/image/upload/s--Xkozeb1y--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/012/053/original/1510231162_honeymoon_camel.jpg.jpg?1510231162' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Camel Safari</span></a></Paper>
                    <Paper elevation={3}><a href="/HorseBackRiding"><img className={classes.img} src='https://jaipurbeat.files.wordpress.com/2017/07/img_2647.jpg?w=663' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Horse Back Riding</span></a></Paper>
                    <Paper elevation={3}><a href="/JeepSafari"><img className={classes.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-hVnmQ5KwLnTgRBNB-TovAHaEj%26pid%3DApi&f=1' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Jeep Safari</span></a></Paper>
                </div>
                <div className={classes.root}>
                    
                    <Paper elevation={3}><a href="/Tongas"><img className={classes.img} src='https://static.toiimg.com/thumb/msid-61721004,width-1200,height-900,resizemode-4/.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Tongas</span></a></Paper>
                    <Paper elevation={3}><a href="/VintageCar"><img className={classes.img} src='https://www.rajasthantourplanner.com/blog/wp-content/uploads/2016/04/jaipur-vintage-car-rental-1024x740.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Vintage Car</span></a></Paper>
                    {/* <Paper elevation={3}><a href="/"><img className={classes.img} src={backImage} alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}></span></a></Paper> */}
                </div>
                <br></br>
                </div>
                <SendMessage />
                <br></br>
                <Footer style={{ position: 'fixed', marginBottom: 0 }} />

            </div>
            
           </div>
        </>
    );
}

export default Travels;