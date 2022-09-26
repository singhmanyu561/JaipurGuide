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



const Malls = () => {

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
                        <h1 style={{ textAlign: 'center', color: '#f43c1f', padding: 50 }}>SHOPPING MALLS AND COMPLEXES IN JAIPUR</h1>
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
                <h2 style={{ textAlign: 'center', color: 'white' }}>SOME FAMOUS MALLS OF JAIPUR</h2>
                <div className={classes.root}>
                    <Paper elevation={3}><a href="/CityMall"><img className={classes.img} src='https://4.imimg.com/data4/OO/OO/GLADMIN-22877870/location_image-500x500.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>City Mall</span></a></Paper>
                    <Paper elevation={3}><a href="/CrystalCourt"><img className={classes.img} src='https://image3.mouthshut.com/images/imagesp/925078098s.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Crystal Court</span></a></Paper>
                    <Paper elevation={3}><a href="/Elements"><img className={classes.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hz-c0dyg3GtRPyxnf72g6AHaEU%26pid%3DApi&f=1' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Elements Mall</span></a></Paper>
                    <Paper elevation={3}><a href="/GTCentralMall"><img className={classes.img} src='https://shreshthaconsultants.com/wp-content/uploads/2019/10/gttt-1.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>GT Central Mall</span></a></Paper>
                </div>
                <div className={classes.root}>
                    <Paper elevation={3}><a href="MGFMetropolitian"><img className={classes.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qzwlljlnHj7ThwxYk2l4XwHaFj%26pid%3DApi&f=1' alt="dfdf" /><span style={{ fontSize: 20, margin: 40 }}>MGF Metropolitian Mall</span></a></Paper>
                    <Paper elevation={3}><a href="PinkSquare"><img className={classes.img} src='https://blazemep.com/images/portfolio/Plumbing/pink%20square%20mall.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Pink Square</span></a></Paper>
                    <Paper elevation={3}><a href="TritonMall"><img className={classes.img} src='https://i.ytimg.com/vi/E1rqxyPGhe4/maxresdefault.jpg' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>Triton Mall</span></a></Paper>
                    <Paper elevation={3}><a href="WTP"><img className={classes.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tKclHTmBBOmfC6xDdb9khAHaFk%26pid%3DApi&f=1' alt="dfdf" /><span style={{ fontSize: 25, margin: 40 }}>World Trade Park</span></a></Paper>
                </div>
                 <br></br>
                </div>
                <br></br>
                <SendMessage />
                <br></br>
                <Footer style={{}} />

            </div>
            
            </div>
        </>
    );
}

export default Malls;