import React from 'react';
// import Footer from '../MyPages/Footer';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import backImage from '../Assets/backImage.jpg'
// import Loader from 'react-loader-spinner'
// import { useHistory } from 'react-router';
// import { HomeSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(50),
            height: theme.spacing(50),
            marginLeft: 70,
            textAlign:'center'
        },
        width:'auto'
      

    },

    img: {
       
        width: 396,
        height: 350,
        borderRadius: 60,
        zoom:'100%',
        transitionProperty: 'zoom',
        transitionDuration: 2,
        transitionDelay:2,
        '&:hover': {
            // borderRadius: 100,
            zoom:'101%'
        }
       
        
    },

    paper:{
        border:'2px solid black',
        borderRadius:60,
        backgroundColor:'black',
        //  transitionProperty: 'width, height,background',
        // transitionDuration: 2,
        // transitionDelay: 2,
        '&:hover': {
            // zoom: '101%'
           
        }
    }

}));



const Category = () => {

    const classes = useStyles();

   
    return (
        <>
            
            <div style={{ border: '2px solid white'}}>
                <br></br>
                <h1 style={{ textAlign: 'center', color: 'white' }}>ATTRACTIONS IN JAIPUR</h1>
               
                <div className={classes.root}>
                    <Paper elevation={3} className={classes.paper} ><a href="/Museums" ><img className={classes.img} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hoS1KoBtYEGSHgT3hZ7JcwHaFj%26pid%3DApi&f=1" alt="dfdf" /><span style={{ fontSize: 25, color: "white"}}>Museums</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/Hotels"><img className={classes.img} src="https://www.tajhotels.co.uk/wp-content/uploads/2017/09/1-238.jpg" alt="dfdf" /><span style={{ fontSize: 25 ,color:"white"}}>Hotels and Restaurnats</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/Monuments"><img className={classes.img} src="https://toursfromdelhi.com/wp-content/uploads/2019/07/Jaigarh-Fort-Jaipur.jpg" alt="dfdf" /><span style={{ fontSize: 25, color: "white" }}>Historical Monuments</span></a></Paper>
                    {/* <Paper elevation={3}><a href="/WaxMuseum"><img className={classes.img} src={backImage} alt="dfdf" /><span style={{ fontSize: 25, margin: 50 }}>Wax Museum Jaipur</span></a></Paper> */}
                </div>
                <div className={classes.root}>
                    <Paper elevation={3} className={classes.paper}><a href="/Malls"><img className={classes.img} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tKclHTmBBOmfC6xDdb9khAHaFk%26pid%3DApi&f=1" alt="dfdf" /><span style={{ fontSize: 25, color: "white"}}>Shopping mall and Complexes</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/Travels"><img className={classes.img} src="https://images.thrillophilia.com/image/upload/s--Xkozeb1y--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/012/053/original/1510231162_honeymoon_camel.jpg.jpg?1510231162" alt="dfdf" /><span style={{ fontSize: 25, color: "white" }}>Travels</span></a></Paper>
                    <Paper elevation={3} className={classes.paper}><a href="/Religious"><img className={classes.img} src="https://www.transindiatravels.com/wp-content/uploads/birla-mandir-3.jpg" alt="dfdf" /><span style={{ fontSize: 25, color: "white"}}>Religious Places</span></a></Paper>
                    {/* <Paper elevation={3}><a href="/SculpturePark"><img className={classes.img} src={backImage} alt="dfdf" /><span style={{ fontSize: 25, margin: 50 }}>The Sculpture Park</span></a></Paper> */}
                </div>

            </div>

            {/* <Footer style={{ position: 'fixed', marginBottom: 0 }} /> */}

        </>
    );
}

export default Category;




// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import tileData from './tileData';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         // backgroundColor: theme.palette.background.paper,

//     },
//     gridList: {
//         width: 1200,
//         height: 1000,
//     },

//     tiles:{
//         '&:hover': {
//             backgroundColor:'red'
//         }

//     }
// }));


// export default function TitlebarGridList() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <GridList cellHeight={150} className={classes.gridList}>
//                 <GridListTile key="Subheader" cols={2} style={{ height: 'auto'}}>
//                     <ListSubheader component="div" style={{ fontSize: 60, textAlign: 'center', paddingTop: 60, color:'#f46a33'}}>Attractions in jaipur</ListSubheader>
//                 </GridListTile>
//                 {tileData.map((tile,key) => (
//                     <GridListTile className={classes.tiles} key={tile.img}>
//                         <a href={tile.url}><img className={classes.tiles_image_zoom} src={tile.img} alt={tile.title} /></a>
//                        <GridListTileBar title={tile.title} />

//                     </GridListTile>
//                 ))}
//             </GridList>
//         </div>
//     );
// }