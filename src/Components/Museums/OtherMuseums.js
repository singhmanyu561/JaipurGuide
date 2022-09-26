import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign:'left'
    },
  
}));


const OtherMuseums = () =>{

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h3>Explore Other Museums</h3>
                <div>
                    <ol className={classes.table}>
                        <li><a href="/AlbertHall">Albert Hall Museum</a></li>
                        <li><a href="/AnokhiMuseum" >Anokhi Museum</a></li>
                        <li><a href="/HawaMahal" >Hawa Mahal</a></li>
                        <li><a href="/WaxMuseum" >Jaipur Wax Museum</a></li>
                        <li><a href="/GemNJewellery" >Museum of Gem and Jewellery</a></li>
                        <li><a href="/Amrapali" >Amrapali Museum</a></li>
                        <li><a href="/LegaciesMuseum" >Museum of Legacies</a></li>
                        <li><a href="/SculpturePark" >The Sculpture Park</a></li>
                    </ol>
                </div>

            </div>

        </>
    );

}

export default OtherMuseums;