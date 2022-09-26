import React from 'react';
import SearchAppBar from '../MyPages/SearchAppBar';
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

// import backImageMuseums from '../Assets/backImage.jpg';
import Footer from '../MyPages/Footer';
// import back from '../Assets/Untitled_design.gif';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import backImage from '../Assets/backImage.jpg';
import SendMessage from '../MyPages/Contact2'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(40),
            height: theme.spacing(40),
            marginLeft: 35,
            textAlign: 'center',
        },

    },

    img: {
        width: 320,
        height: 280,
        '&:hover': {
            // borderRadius: 100,
            zoom: '102%'
        }
        
    },

  
}));



const Hotels = () => {

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
                <div style={{margin:20}}>
                <div style={{ border: '2px solid white', background: '#f7b76f', opacity: 0.8 }}>
                    <h1 style={{ textAlign: 'center', color: '#f43c1f', padding:50 }}>HOTELS AND RESTAURANTS IN JAIPUR</h1>
                    <p style={{ marginLeft: 50, marginRight: 50, marginBottom: 50,textAlign:'justify' ,color:'black'}}>
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
                <div style={{ border: '2px solid white'}}>
                    <br></br>
                <h2 style={{ textAlign: 'center', color: 'white' }}>SOME FAMOUS HOTELS OF JAIPUR</h2>
                <div className={classes.root}>
                    <Paper elevation={3} className={classes.paper}><a href="/FernResidency"><img className={classes.img} src='https://ak-d.tripcdn.com/images/220u1800000146xpc18FA_R_550_412_R5_Q70_D.jpg' alt="dfdf" /><span style={{ fontSize: 20 }}>Fern Residency</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/GrandChanakya"><img className={classes.img} src='https://2et9uf3g88lk1lzd8427x065-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/LIGC_Facade_3.jpg' alt="dfdf" /><span style={{ fontSize: 20 }}>Leisure Inn Grand Chanakya</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/HiltonJaipur"><img className={classes.img} src='https://gos3.ibcdn.com/ec772a1c237a11e888530a4cef95d023.jpg' alt="dfdf" /><span style={{ fontSize: 20 }}>Hilton Jaipur</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/JaiMahal"><img className={classes.img} src='https://www.weddingsutra.com/images/taj-jai-mahal-palace-jaipur-2.jpg' alt="dfdf" /><span style={{ fontSize: 20 }}>Jai Mahal</span></a></Paper>
                </div>
                <div className={classes.root}>
                    <Paper elevation={3} className={classes.paper}><a href="/RambaghPalace"><img className={classes.img} src='https://www.micato.com/wp-content/uploads/2018/09/rambagh-palace.jpg' alt="dfdf" /><span style={{ fontSize: 20 }}>Rambagh Palace</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/PearlPalaceHeritage"><img className={classes.img} src='https://pix10.agoda.net/hotelImages/983/983002/983002_16091414380046443534.jpg?s=1024x768' alt="dfdf" /><span style={{ fontSize: 20 }}>Pearl Palace Heritage</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/RadisonBlue"><img className={classes.img} src='https://radissonhotels.iceportal.com/image/radisson-blu-jaipur/exteriorview/16256-116522-f64874139_3xl.jpg' alt="dfdf" /><span style={{ fontSize: 20 }}>Radisson Blu Jaipur</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/TridentJaipur"><img className={classes.img} src='https://gtcholiday.files.wordpress.com/2020/08/jaipur-trident-09.jpg?w=835' alt="dfdf" /><span style={{ fontSize: 20 }}>Trident Jaipur</span></a></Paper>
                </div>
                <br></br>
                </div>
                <br></br>
                <SendMessage />
                <br></br>
                <Footer  />

            </div>
            
            </div>
        </>
    );
}

export default Hotels;