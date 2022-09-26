import React,{useEffect} from 'react';
import SearchAppBar from '../MyPages/SearchAppBar';
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'
// import back from '../Assets/Untitled_design.gif';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import backImage from '../Assets/backImage.jpg';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import SendMessage from '../MyPages/Contact2'
import Footer from '../MyPages/Footer'

const useStyles = makeStyles((theme) => ({
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(40),
            height: theme.spacing(40),
            marginLeft: 35
        },
       
    },

    img:{
        width:320,
        height:280,
        '&:hover': {
            // borderRadius: 100,
            zoom: '102%'
        }
    }
}));



const Museums = () =>{

    const classes = useStyles();
    let state = {loading:true};

    console.log(state.loading)

    const Loading=()=>{< Loader
    type = "Puff"
    color = "#00BFFF"
    height = { 100}
    width = { 100}
    timeout = { 3000}
        />}


    useEffect(() => {
        Loading()
    })
    
   
   
    return (
        <>
           {
               localStorage.getItem('login')==='true'
               ?
                    <SearchAppBarLogout />
                    : 
                    <SearchAppBar />
           }
          

            <div style={{ margin: 0, backgroundImage: `url('https://store-images.s-microsoft.com/image/apps.49068.14458991885146991.028b24d1-0638-459d-bdfd-a6955fe1edf1.4b558854-e8dc-439e-84e1-7506fa8358a5?mode=scale&q=90&h=1080&w=1920')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1 }}>
                <br></br>
                <div style={{ margin: 20 }}>
                    <div style={{ border: '2px solid white', background: '#f7b76f', opacity: 0.8 }}>
                        <h1 style={{ textAlign: 'center', color: '#f43c1f', padding: 50 }}>MUSEUMS IN JAIPUR</h1>
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
                
                <h2 style={{ textAlign: 'center', color: 'white' }}>SOME FAMOUS MUSEUMS OF JAIPUR</h2>
                
                <div className={classes.root1}>
                    <Paper elevation={3}><a href="/AlbertHall"><img className={classes.img} src={backImage} alt="dfdf" /><span style={{fontSize:19,margin:50}}>Albert Hall Museum</span></a></Paper>
                    <Paper elevation={3}><a href="/AnokhiMuseum"><img className={classes.img} src='https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/06/25205345/250617_anokhimuseum1.jpg' alt="dfdf" /><span style={{ fontSize: 19, margin: 70 }}>Anokhi Museum</span></a></Paper>
                    <Paper elevation={3}><a href="/HawaMahal"><img className={classes.img} src='https://wallpapercave.com/wp/wp4555011.jpg' alt="dfdf" /><span style={{ fontSize: 19, margin: 70 }}>Hawa Mahal</span></a></Paper>
                    <Paper elevation={3}><a href="/WaxMuseum"><img className={classes.img} src='https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/01/040117JaipurWaxMuesum01.jpg' alt="dfdf" /><span style={{ fontSize: 19, margin: 50 }}>Wax Museum Jaipur</span></a></Paper>
                </div>
               
                <div className={classes.root1}>
                    <Paper elevation={3}><a href="/GemNJewellery"><img className={classes.img} src='https://www.thefrenchjewelrypost.com/content/uploads/2015/12/WORLD-JEWELLERY-MUSEUM-Necklace-Gallery.jpg' alt="dfdf" /><span style={{ fontSize: 19, margin: 30 }}>Museum of Gem and Jewellery</span></a></Paper>
                    <Paper elevation={3}><a href="/Amrapali"><img className={classes.img} src='https://www.outlookindia.com/outlooktraveller/public/uploads/2018/04/Amrapali-museum.jpg' alt="dfdf" /><span style={{ fontSize: 19, margin: 50 }}>Amrapali Museum</span></a></Paper>
                    <Paper elevation={3}><a href="/LegaciesMuseum"><img className={classes.img} src='https://museum.wales/media/28669/gallery10.jpg' alt="dfdf" /><span style={{ fontSize: 19, margin: 30 }}>The Museum of Legacies</span></a></Paper>
                    <Paper elevation={3}><a href="/SculpturePark"><img className={classes.img} src='https://news.artnet.com/app/news-upload/2017/12/C4A8468-1024x683.jpg' alt="dfdf" /><span style={{ fontSize: 19, margin: 50 }}>The Sculpture Park</span></a></Paper>
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

export default Museums;