import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import logo from '../Assets/jG.gif';
import Booking from './Booking';
import Button from '@material-ui/core/Button';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    //   position:'fixed',
      width:'100%'
       
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        // flexGrow: .1,
        // display: 'none',
        display: 'block',
        marginLeft:20,
        // marginTop:50,
        color:'white',
        padding:10,
        // fontStyle:'bold',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    
}));



export default function SearchAppBar() {
    const classes = useStyles();
    // const history = useHistory()

    // const [value, setValue] = useState();


    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    const [width, setWidth] = React.useState(window.innerWidth);

    const [menu, setMenu] = useState(null);

    const handleClick = (event) => {
        setMenu(event.currentTarget)
    };

    const handleClose = () => {
        setMenu(null);
    };



    React.useEffect(() => {


        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)


    }, []);
    

    return (
        <div className={classes.root}>
            {/* backgroundImage: `url(${jaipurNav})`, */}
            <AppBar position="static" style={{ backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Huw0oRVfEdcFwvZUu5DBeAHaDH%26pid%3DApi&f=1')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1, height:110}}>
                <Toolbar >
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton> */}

                    {/* ===========================LOGO ==========================================================================*/}
                    <img src={logo} alt="dfdf" style={{ 'height': "100px", marginLeft: 20, marginTop: 7,borderRadius: 60,border:'2px solid white' }} />
                    {/* ===========================LOGO ==========================================================================*/}


                   
                    {/* <a href="/"> <HomeIcon style={{ color: 'white', fontSize: 50 ,marginLeft:30}}/></a> */}

                   

                   
                    <h3 style={{ margin: 30, color: '#ba0cf4' }}>  | Jaipur Guide</h3>

                    {/* <a href="/"> <HomeIcon style={{ color: 'white', fontSize: 50 ,marginLeft:30}}/></a> */}



                    {console.log(width)}

                    {width > 950 ?
                        <div id="hide" style={{ display: 'flex' }}>

                            <Typography className={classes.title} noWrap>
                                <a href="/" style={{ color: 'white' }}>HOME</a>
                            </Typography>
                            <Typography className={classes.title} noWrap>
                                <a href="http://localhost:3000/#about" style={{ color: 'white' }}> ABOUT</a>
                            </Typography>

                            <Typography className={classes.title} noWrap>
                                <a href="http://localhost:3000/#servicesBody" style={{ color: 'white' }}> SERVICES</a>
                            </Typography>

                            <Typography className={classes.title} noWrap>

                                <a href="http://localhost:3000/#contactBody" style={{ color: 'white' }}>CONTACT</a>
                            </Typography>
                        </div> : <ArrowDropDownCircleOutlinedIcon onClick={handleClick} style={{ fontSize: 25, marginLeft: 0 }} />}
                    
                   
                    <Typography className={classes.title} style={{marginLeft:15}} noWrap>
                        <Booking/>
                    </Typography>
                   
                   

                    <div style={{position:'absolute', right:20}}>

                    <Button className={classes.button} style={{ backgroundColor: 'green'}} > <a href="/Login" style={{  color:'white' }}>Login</a></Button>
                    </div>


                    {/* ==================================================================Menu======================================================= */}


                    <Menu
                        id="simple-menu"
                        anchorEl={menu}
                        keepMounted
                        open={menu}
                        onClose={handleClose}

                    >
                        <MenuItem style={{ background: '#c5f7d7' }} onClick={handleClose}><a href="/" style={{ color: 'black' }}>HOME</a></MenuItem>
                        -----------------
                        <MenuItem style={{ background: '#c5f7d7' }} onClick={handleClose}> <a href="http://localhost:3000/#about" style={{ color: 'black' }}> ABOUT</a></MenuItem>
                        -----------------
                        <MenuItem style={{ background: '#c5f7d7' }} onClick={handleClose}> <a href="http://localhost:3000/#servicesBody" style={{ color: 'black' }}> SERVICES</a></MenuItem>
                        -----------------
                        <MenuItem style={{ background: '#c5f7d7' }} onClick={handleClose}> <a href="http://localhost:3000/#contactBody" style={{ color: 'black' }}>CONTACT</a></MenuItem>

                    </Menu>

                    
                       
                    
                  
                </Toolbar>
            </AppBar>
            
        </div>
    );
}
