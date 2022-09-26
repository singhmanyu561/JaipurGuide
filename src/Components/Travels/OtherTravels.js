import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'left'
    },

}));


const OtherReligious = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h3>Explore Other Transport</h3>
                <div>
                    <ol className={classes.table}>
                        <li><a href="/AirTaxi">Air Taxi</a></li>
                        <li><a href="/Bicycle" >Bicycle</a></li>
                        <li><a href="/CamelSafari" >Camel Safari</a></li>
                        <li><a href="/HorseBackRiding" >Horse Back Riding</a></li>
                        <li><a href="/JeepSafari" >Jeep Safari</a></li>
                        <li><a href="/Tongas" >Tongas</a></li>
                        <li><a href="/VintageCar" >Vintage Car</a></li>
                    </ol>
                </div>

            </div>

        </>
    );

}

export default OtherReligious;