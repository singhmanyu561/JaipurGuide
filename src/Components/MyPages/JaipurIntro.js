import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from './IntroCarousel';
import Category from './Category';
import pinkCity from '../Assets/e (1).gif';
// import backImage from 'http://wallpaperheart.com/wp-content/uploads/2018/04/view-website-background-images-hd.jpg';
import Footer from './Footer';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import back from '../Assets/download.jpg';
import Contact  from './Contact'
import About from './About'
import Services from './Services'
// import ScrollToTop from './ScrollToTop'



const useStyles = makeStyles((theme) => ({

    root:{
        
        // background:'#f4b7b5',
        marginTop:10,
        width:'100%',
        padding:10

    },

    title: {
        color:'#fc494c',
       justifyContent:'center',
       textAlign:'center',
       fontSize:60,


    },

    title_description:{
        color:"brown",
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 30
    },

    description:{
        // paddingLeft:40,
        // paddingRight:40,
        // paddingTop:40,
        color: 'black',
        fontSize: 20,
        width:'100%',
        // marginLeft:90
    }
}))

const JaipurIntro = () =>{
    const classes = useStyles();
    // const handle = useFullScreenHandle();

    const CarouselData = [

            {
            source: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.theculturetrip.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fhawamahal-jaipur.jpg&f=1&nofb=1',
                alter: "Slide 1",
                caption: "First Demo"

            },

            {
                source: 'https://www.jaipur.org.uk/images/amer-palace-jaipur.jpg',
                alter: "Slide 2",
                caption: "Second Demo"

            },

            {
                source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mZc_etqSA2LxpD0uuxc6gAHaDt%26pid%3DApi&f=1',
                alter: "Slide 3",
                caption: "Jaipur Culture"

            },

            {
                source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LkvmZfuMQdP3Y2O6T3LbhgHaEi%26pid%3DApi&f=1',
                alter: "Slide 4",
                caption: "Fourth Demo"

            },

            {
                source: 'https://wallpapercave.com/wp/wp2185391.jpg',
                alter: "Slide 5",
                caption: "Fifth Demo"

            },
        ]

    return (
        <>
            {/* https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80 */}
           
            <div className={classes.root} style={{ marginTop: 0, backgroundImage: `url('https://store-images.s-microsoft.com/image/apps.49068.14458991885146991.028b24d1-0638-459d-bdfd-a6955fe1edf1.4b558854-e8dc-439e-84e1-7506fa8358a5?mode=scale&q=90&h=1080&w=1920')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' ,backgroundAttachment: 'fixed',opacity:1}}>
               
                <h1 className={classes.title}  style={{ marginTop:30, fontFamily: 'Akaya Telivigala' }}>Welcome To <span><img src={pinkCity} alt="dfdf" style={{ 'height': "100px", borderRadius: 30 ,border:'2px solid white'}} /></span> Jaipur</h1>
                <h3 className={classes.title_description} style={{ color:'white' }}>The City Of Maharaja's And Historical Monuments</h3>
               
                <br></br>
                <Carousel obj={CarouselData} />
                <br></br><br></br>
                
                <div style={{ background: ' #f7b76f', textAlign:'justify',border:'2px solid white',padding:50,opacity:0.8}}>
                <p className={classes.description} style={{opacity:1}}>

                        <b style={{ color:'#f74d47',fontSize:30,fontStyle:'italic'}}>Jaipur</b> the pink city not only encompasses alluring monuments, legacies and royal culture,
                    but it has also shown a rapid and terrific growth, in regards of development. Jaipur is one of
                    the leading manufacturers and exporter of handicraft, textile, Camel leather items, Rugs and 
                    carpets, quilts, brass enamel and many more products.
                    Jaipur the pink city not only encompasses alluring monuments, legacies and royal culture,
                    but it has also shown a rapid and terrific growth, in regards of development. Jaipur is one of
                    the leading manufacturers and exporter of handicraft, textile, Camel leather items, Rugs and
                    carpets, quilts, brass enamel and many more products.
                    Jaipur the pink city not only encompasses alluring monuments, legacies and royal culture,
                    but it has also shown a rapid and terrific growth, in regards of development. Jaipur is one of
                    the leading manufacturers and exporter of handicraft, textile, Camel leather items, Rugs and
                    carpets, quilts, brass enamel and many more products.</p>

                < p className={classes.description} style={{ opacity: 1 }}>
                    Jaipur the pink city not only encompasses alluring monuments, legacies and royal culture,
                    but it has also shown a rapid and terrific growth, in regards of development. Jaipur is one of
                    the leading manufacturers and exporter of handicraft, textile, Camel leather items, Rugs and
                    carpets, quilts, brass enamel and many more products.
                    Jaipur the pink city not only encompasses alluring monuments, legacies and royal culture,
                    but it has also shown a rapid and terrific growth, in regards of development. Jaipur is one of
                    the leading manufacturers and exporter of handicraft, textile, Camel leather items, Rugs and
                    carpets, quilts, brass enamel and many more products.
                    Jaipur the pink city not only encompasses alluring monuments, legacies and royal culture,
                    but it has also shown a rapid and terrific growth, in regards of development. Jaipur is one of
                    the leading manufacturers and exporter of handicraft, textile, Camel leather items, Rugs and
                    carpets, quilts, brass enamel and many more products.</p>
                
                </div>

                <br></br><br></br>
                <About />
                <br></br><br></br>
                <Category />
                <br></br><br></br>
                <Services/>
                <br></br><br></br>
                <Contact />
                <br></br><br></br>
                <Footer style={{ position: 'fixed', marginBottom: 0 }}/>
                
                
            </div>
            
            
           


        </>


    );
}

export default JaipurIntro;