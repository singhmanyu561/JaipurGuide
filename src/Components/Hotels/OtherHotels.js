import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'left'
    },
   

}));


const OtherHotels = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h3>Explore Other Hotels</h3>
                <div>
                    <ol className={classes.table}>
                        <li ><a href="/FernResidency">The Fern Residency</a></li>
                        <li ><a href="/GrandChanakya" >Grand Chanakya</a></li>
                        <li ><a href="/HiltonJaipur" >Hilton Jaipur</a></li>
                        <li ><a href="/JaiMahal" >Jai Mahal</a></li>
                        <li ><a href="/PearlPalaceHeritage" >Pearl Palace Heritage</a></li>
                        <li ><a href="/RadisonBlue" >Radison Blue</a></li>
                        <li ><a href="/RambaghPalace" >Rambagh Palace</a></li>
                        <li ><a href="/TridentJaipur" >Trident Jaipur</a></li>
                    </ol>
                </div>

            </div>

        </>
    );

}

export default OtherHotels;