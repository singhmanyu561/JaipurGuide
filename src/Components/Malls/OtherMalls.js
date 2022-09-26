import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'left'
    },

}));


const OtherMalls= () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h3>Explore Other Museums</h3>
                <div>
                    <ol className={classes.table}>
                        <li><a href="/CityMall">City Mall</a></li>
                        <li><a href="/CrystalCourt" >Crystal Court</a></li>
                        <li><a href="/Elements" >Elements</a></li>
                        <li><a href="/GTCentralMall" >GT Centra lMall</a></li>
                        <li><a href="/MGFMetropolitian" >MGF Metropolitan</a></li>
                        <li><a href="/PinkSquare" >Pink Square</a></li>
                        <li><a href="/TritonMall" >Triton Mall</a></li>
                        <li><a href="/WTP" >The World Trade Park</a></li>
                    </ol>
                </div>

            </div>

        </>
    );

}

export default OtherMalls;