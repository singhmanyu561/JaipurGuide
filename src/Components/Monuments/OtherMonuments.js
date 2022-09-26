import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'left'
    },

}));


const OtherMonuments = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h3>Explore Other Museums</h3>
                <div>
                    <ol className={classes.table}>
                        <li><a href="/AbhaneriStepFall">Abhaneri Step Fall</a></li>
                        <li><a href="/AmerFort" >Amer Fort</a></li>
                        <li><a href="/BirlaTemple" >Birla Temple</a></li>
                        <li><a href="/CityPalace" >City Palace</a></li>
                        <li><a href="/JaigarhFort" >Jaigarh Fort</a></li>
                        <li><a href="/JalMahal" >Jai Mahal</a></li>
                        <li><a href="/JantarMantar" >Jantar Mantar</a></li>
                        <li><a href="/NahargarhFort" >Nahargarh Fort</a></li>
                    </ol>
                </div>

            </div>

        </>
    );

}

export default OtherMonuments;