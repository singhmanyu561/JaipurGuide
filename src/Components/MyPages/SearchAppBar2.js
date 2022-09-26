import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import logo from '../Assets/jG.gif';
import Booking from './Booking';
import Button from '@material-ui/core/Button';






const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      width:'100%'
       
    },
  
    title: {
       
        display: 'block',
        marginLeft:15,
        color:'black',
        fontStyle:'bold'
       
    },
   
}));



export default function SearchAppBar() {
    const classes = useStyles();


    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }


    

    return (
        <div className={classes.root}>
            {/* backgroundImage: `url(${jaipurNav})`, */}
            <AppBar position="static" style={{ backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Huw0oRVfEdcFwvZUu5DBeAHaDH%26pid%3DApi&f=1')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1, height: 110 }}>
                <Toolbar >
                 

                    {/* ===========================LOGO ==========================================================================*/}
                    <img src={logo} alt="dfdf" style={{ 'height': "100px", marginLeft: 20, marginTop: 7, borderRadius: 60 ,border: '2px solid white'}} />
                    {/* ===========================LOGO ==========================================================================*/}

                    <h3 style={{ margin: 30,marginRight:0, color: '#ba0cf4' }}>  | Jaipur Guide</h3>
                   
                    {/* <a href="/" style={{ color: 'white', fontSize: 60, marginLeft: 30 }}>Home</a> */}

                   

                   
                        
                   

                    <Typography className={classes.title} variant="h6" noWrap>
                        <a href="/" style={{ color: 'white' }}> Home</a>
                    </Typography>

                    <Typography className={classes.title} variant="h6" noWrap>
                        <Booking/>
                    </Typography>
                    
                    <Button className={classes.button} style={{ backgroundColor: 'green', position: 'absolute', right: 20}} > <a href="/Login" style={{ color: 'white', display: 'flex' }}>Login</a></Button>
                    {/* <Button className={classes.button} style={{ backgroundColor: 'green', marginLeft: 20}} > <a href="/Logout" style={{ color: 'black', display: 'flex' }}>Logout</a></Button> */}

                   

                </Toolbar>
            </AppBar>
            
        </div>
    );
}
