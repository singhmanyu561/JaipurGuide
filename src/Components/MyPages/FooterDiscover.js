import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import logo from '../Assets/jG.gif';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        marginLeft: 100,
        fontSize:20,
        display:'flex'
    },
    demo: {
        // backgroundColor: theme.palette.background.paper,
        // background:'grey',
    
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        fontSize: 30
    },
}));

// function generate(element) {
//     return [0, 1, 2].map((value) =>
//         React.cloneElement(element, {
//             key: value,
//         }),
//     );
// }

export default function FooterDiscover() {
    const classes = useStyles();
    // const [dense, setDense] = React.useState(false);
    // const [secondary, setSecondary] = React.useState(false);

    return (
        
        <div className={classes.root}> 
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Discover
                    </Typography>
                    <div className={classes.demo}>
                        <List >
                            {/* {generate( */}
                            <ListItem> Forts </ListItem>
                            <ListItem> Palaces </ListItem>
                            <ListItem> Lakes </ListItem>
                            <ListItem> Museums </ListItem>
                            <ListItem> Religious </ListItem>
                            <ListItem> Travels </ListItem>
                                
                            {/* )} */}
                        </List>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Contact-Us
                    </Typography>
                    <div className={classes.demo}>
                        <List >
                            {/* {generate( */}
                            <ListItem> Phone No. </ListItem>
                            <ListItem> Email Id </ListItem>
                            <ListItem> Addresss </ListItem>
                            {/* <ListItem> Museums </ListItem>
                            <ListItem> Religious </ListItem>
                            <ListItem> Travels </ListItem> */}

                            {/* )} */}
                        </List>
                    </div>
                </Grid>
            </Grid>
            
           
           
        </div>

    
    );
}
