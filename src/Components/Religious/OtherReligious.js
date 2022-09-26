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
                <h3>Explore Other Museums</h3>
                <div>
                    <ol className={classes.table}>
                        <li><a href="/AksharDhamTemple">Akshar Dham Temple</a></li>
                        <li><a href="/BirlaMandir" >Birla Mandir</a></li>
                        <li><a href="/GaltajiTemple" >Galtaji Temple</a></li>
                        <li><a href="/GarhGanesh" >Garh Ganesh</a></li>
                        <li><a href="/GovindDevjiTemple" >Govind Devji Temple</a></li>
                        <li><a href="/MotiDongriTemple" >Moti Dongri Temple</a></li>
                        <li><a href="/ShilaDeviMandir" >Shila Devi Mandir</a></li>
                        <li><a href="/SunTemple" >Sun Temple</a></li>
                        <li><a href="/TarkeshwarMahadev" >Tarkeshwar Mahadev</a></li>
                    </ol>
                </div>

            </div>

        </>
    );

}

export default OtherReligious;