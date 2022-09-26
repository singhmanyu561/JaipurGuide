import React, { useState,useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import logo from '../Assets/jG.gif';
import Booking from './Booking';
import { useDispatch, useSelector } from 'react-redux'
import { getUserDatafromplaceholder } from '../../Action/UserDetailsAction'
import TextField from '@material-ui/core/TextField';

import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FAQs from '@material-ui/icons/LiveHelp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BookingIcon from '@material-ui/icons/Apartment';
import LogoutIcon from '../Assets/LogoutIcon.png'
import Contact from './Contact'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

import { hotelBookingDetailsDatafromplaceholder } from '../../Action/HotelBookingDetailsAction'
import { packageBookingDetailsDatafromplaceholder } from '../../Action/PackageBookingDetailsAction'
import { queryDatafromplaceholder } from '../../Action/QueryAction'

import Menu from '@material-ui/core/Menu';


import $ from 'jquery'

// import pic from '../Assets/pic.jpg'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});





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
        
        display: 'block',
        marginLeft: 10,
        // marginTop:20,
        color: 'white',
        padding: 10
        
    },
    profile: {
        marginTop:10,
        // marginLeft: 100, 
        position: 'absolute', 
        width:'auto',
        right: 20,
        color: 'white', 
        fontSize: 60,
        '&:hover': { 
            fontSize:80,
            cursor:'pointer',
            color:'#ba0cf4'
        }
    },
    
   
    root1: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginLeft: 85,
        background: '#d923ea',
        fontSize: 30

    },

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));



export default function SearchAppBar() {
    const classes = useStyles();
    const history = useHistory()

   
    
       
   
    const [width, setWidth] = React.useState(window.innerWidth);
    
    
    
    

    const [state, setState] = React.useState({
        right: false,
    });


    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    const [mobile, setMobile] = React.useState('')
    const [newMobile, setNewMobile] = React.useState('')

    const [profile,setProfile] = useState(false)
    const [openInbox, setOpenInbox] = useState(false)
    const [openBooking, setOpenBooking] = useState(false)
    const [openHistory, setOpenHistory] = useState(false)
    const [openWishlist, setOpenWishlist] = useState(false)
    const [openFAQ, setOpenFAQ] = useState(false)
    const [openContact, setOpenContact] = useState(false)
    const [openMobile, setOpenMobile] = useState(false)

    const [menu, setMenu] = useState(null);

    const handleClick = (event) => {
        setMenu(event.currentTarget)
    };

    const handleClose = () => {
        setMenu(null);
    };

    var pic = "assets/img/"

    const [choose, setChoose] = useState(false)

    const dateNow = new Date()

    const dispatch = useDispatch()

    const storeData = useSelector((state) =>


        state.UserReducer.data && state.UserReducer.data.length && Array.isArray(state.UserReducer.data) ?
            state.UserReducer.data : []

    );
    
    const hotelData = useSelector((state) =>


        state.HotelBookingDetailReducer.data && state.HotelBookingDetailReducer.data.length && Array.isArray(state.HotelBookingDetailReducer.data) ?
            state.HotelBookingDetailReducer.data : []

    );


    const packageNewData = useSelector((state) =>


        state.PackageBookingDetailReducer.data && state.PackageBookingDetailReducer.data.length && Array.isArray(state.PackageBookingDetailReducer.data) ?
            state.PackageBookingDetailReducer.data : []

    );

    const queryData = useSelector((state) =>


        state.QueryReducer.data && state.QueryReducer.data.length && Array.isArray(state.QueryReducer.data) ?
            state.QueryReducer.data : []

    );

    useEffect(() => {

        dispatch(getUserDatafromplaceholder())
        dispatch(hotelBookingDetailsDatafromplaceholder())
        dispatch(packageBookingDetailsDatafromplaceholder())
        dispatch(queryDatafromplaceholder())

        

        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        if(width>950){
            window.addEventListener('resize', handleClose)
        }
       

    }, []);


    
const [newPic,setNewPic] = useState('')


// console.log(packageData)
    
    
    const toggleDrawer = (anchor, open) => (event) => {


        Axios.post('http://localhost:7000/show_picture', {email:localStorage.getItem('token') })
            .then((response) => {
                console.log(typeof(response.data[0].picture))

                // pic = pic.concat(response.data[0].picture)

                // localStorage.setItem('picture',pic)

                setNewPic(response.data[0].picture)
                

            })
            .catch(function (error) {
                console.log(error);
            });

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>       
                <ListItem button onClick={()=>{setOpenInbox(true)}}>
                    <ListItemIcon><MailIcon /> </ListItemIcon>
                    <ListItemText primary='Mail box'  />
                </ListItem>
                <ListItem button onClick={() => { setOpenBooking(true) }}>
                    <ListItemIcon><BookingIcon /> </ListItemIcon>
                    <ListItemText primary='Booking Details'  />
                </ListItem>
                <ListItem button onClick={() => { setOpenHistory(true) }}>
                    <ListItemIcon><HistoryIcon /> </ListItemIcon>
                    <ListItemText primary='Booking History'  />
                </ListItem>
                {/* <ListItem button onClick={() => { setOpenWishlist(true) }}>
                    <ListItemIcon><FavoriteIcon /> </ListItemIcon>
                    <ListItemText primary='Wishlist'  />
                </ListItem> */}
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => { setOpenFAQ(true) }}>
                       <ListItemIcon><FAQs /></ListItemIcon>
                        <ListItemText primary='FAQs'  />
                    </ListItem>
                <ListItem button onClick={() => { setOpenContact(true) }}>
                       <ListItemIcon><ContactSupportIcon /></ListItemIcon>
                        <ListItemText primary='Contact Us'  />
                    </ListItem>
                <ListItem button onClick={logout}>
                       <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary='Logout'  />
                    </ListItem>
            </List>
        </div>
    );

  
   

    const logout = () => {
        localStorage.setItem('login', false)
        localStorage.setItem('token','')
        alert('You have been logged out.')
        history.push('/')

    }

    const editMobile =(x) =>{

        toggleDrawer('right', false)
        setOpenMobile(true)
        
        setMobile(x)
    }

    const updateMobile = () => {
        // console.log(newMobile,localStorage.getItem('login'))

        Axios.post('http://localhost:7000/update_mobile',{mobile:newMobile,email:localStorage.getItem('token')})
            .then((response) => {
                console.log(response)

                if (response.data === 'Mobile no updated successfully') {
                   alert('Mobile Number Upadated Successfully')
                   history.go()
                }
                setMobile('')
                setNewMobile('')

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    const [file,setFile] = useState('')
    // console.log(file)

    const handleProfileChange = (e) =>{
        setFile((e.target.value).replace(/^.*[\\\/]/, ''))
       
    }


    const pro = (e) =>{
        Axios.post('http://localhost:7000/picture', { file: pic.concat(file), email: localStorage.getItem('token') })
            .then((response) => {
                console.log(response)

                if (response.data === 'Picture added') {
                    alert('Profile picture added successfully')
                    // history.goBack()
                    // history.go()
                }


            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (

        <>
        <div className={classes.root}>
          
            <AppBar position="static" style={{ backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Huw0oRVfEdcFwvZUu5DBeAHaDH%26pid%3DApi&f=1')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1, height:110}}>
                <Toolbar >
                   
                   
                    {/* ===========================LOGO ==========================================================================*/}
                    <img src={logo} alt="dfdf" style={{ 'height': "100px", marginLeft: 20, marginTop: 7,borderRadius: 60,border:'2px solid white' }} />
                    {/* ===========================LOGO ==========================================================================*/}
                        <h3 style={{ margin: 30, color:'#ba0cf4'}}>  | Jaipur Guide</h3>
                   
                    {/* <a href="/"> <HomeIcon style={{ color: 'white', fontSize: 50 ,marginLeft:30}}/></a> */}

                   

                     {console.log(width)}

                    { width>950 ?
                    <div id="hide" style={{ display: 'flex'}}>

                    <Typography className={classes.title} noWrap>
                        <a href="/" style={{ color: 'white' }}>HOME</a>
                    </Typography>
                    <Typography className={classes.title}  noWrap>
                    <a href="http://localhost:3000/#about" style={{ color: 'white' }}> ABOUT</a>
                    </Typography>

                    <Typography className={classes.title}  noWrap>
                    <a href="http://localhost:3000/#servicesBody" style={{ color: 'white' }}> SERVICES</a>
                    </Typography>

                    <Typography className={classes.title}  noWrap>
                       
                    <a href="http://localhost:3000/#contactBody" style={{ color: 'white' }}>CONTACT</a>
                    </Typography>
                    </div> 
                         : 
                    <ArrowDropDownCircleOutlinedIcon  onClick={handleClick} style={{ fontSize: 25,marginLeft:0}} />  }

                    
                    <Typography className={classes.title} style={{}}  noWrap>
                                <Booking /> 
                    </Typography>
                    
                        <AccountCircleIcon className={classes.profile} onClick={toggleDrawer('right', true)} style={{  marginLeft:100 }}/>
                   

                </Toolbar>
            </AppBar>
            
        </div>

        {/* ==================================================================Menu======================================================= */}

           
                <Menu
                    id="simple-menu"
                    anchorEl={menu}
                    keepMounted
                    open={menu}
                    onClose={handleClose}

                >
                    <MenuItem style={{ background: '#c5f7d7' }}><a href="/" style={{ color: 'black' }}>HOME</a></MenuItem>
                    -----------------
                <MenuItem style={{ background: '#c5f7d7' }}> <a href="http://localhost:3000/#about" style={{ color: 'black' }}> ABOUT</a></MenuItem>
                    -----------------
                   <MenuItem style={{ background: '#c5f7d7' }}> <a href="http://localhost:3000/#servicesBody" style={{ color: 'black' }}> SERVICES</a></MenuItem>
                    -----------------
                   <MenuItem style={{ background: '#c5f7d7' }}> <a href="http://localhost:3000/#contactBody" style={{ color: 'black' }}>CONTACT</a></MenuItem>
                   
                </Menu>
                
                

        {/* // ==============================================Drawer================================================================= */}

            <div>
                {['right'].map((anchor) => (
                    <React.Fragment >
                        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {storeData.map((data,i)=>(
                                
                            <div style={{ background: ' #f7b76f' }} key={i}>
                                {data.email === localStorage.getItem('token')?
                                <>
                                

                                <div className={classes.root1}>
                                    <Avatar alt={data.name} src={newPic} className={classes.large} />
                                    <IconButton aria-label="edit" onClick={() => { setProfile(true)}} style={{ marginLeft: 145, marginTop: 80, height: 35, width: 35, color: 'white', background: '#7c9af4', position: 'absolute' }}>
                                        <PhotoCamera />
                                    </IconButton>
                                    <br></br><br></br>

                                </div>
                                <div style={{ padding: 20 }}>
                                    <h5 style={{ color: 'green' }}>Hello, <i>{data.name}</i></h5>
                                    <i style={{ color: 'blue' }}>{data.email} </i>
                                    {/* <IconButton aria-label="edit" style={{ marginTop: 0, color: '#6a6b63' }}>
                                        <EditIcon />
                                    </IconButton> */}
                                    <br></br>
                                    <i style={{ color: 'blue' }}>{data.mobile}</i>
                                    <IconButton aria-label="edit" style={{ marginTop: 0, color: '#6a6b63' }} onClick={()=>editMobile(data.mobile)} >
                                        <EditIcon />
                                    </IconButton>
                                </div>
                               

                                </>
                                :[]}
                            </div>
                            ))}
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
            {/* =============================================================Profile Pic===================================================== */}
                

            <div>
                <Dialog
                    open={profile}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background: '#4c5e5a' }}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background: '#f7925b' }}><h3>{" Change Your Mobile No"}</h3></DialogTitle>
                    <DialogContent style={{ background: '#d9f1fc' }}>

                        <form method="POST" action="http://localhost:7000/profile-upload-single" enctype="multipart/form-data">
                            <div>
                                <label>Upload profile picture</label>
                                <br/>
                                <input type="file" name="profile" onChange={handleProfileChange} value={file.profile} required />
                            </div>
                            <div>
                                <br />
                                <input type="submit" value="Upload"  onClick={pro}/>
                            </div>
                        </form>

                       
                       
                    </DialogContent>
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setProfile(false) }} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Close
                        </Button>
                        {/* <Button  color="primary" style={{ border: '1px solid white', color: 'white' }} >
                            Update
                        </Button> */}
                    </DialogActions>
                </Dialog>
            </div>
            {/* ==========================================================Edit Mobile No===================================================== */}

            <div>
                <Dialog
                    open={openMobile}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background: '#4c5e5a' }}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background: '#f7925b' }}><h3>{" Change Your Mobile No"}</h3></DialogTitle>
                    <DialogContent style={{ background: '#d9f1fc' }}>
                        Mobile Number : <b>{mobile}</b>
                        <br></br><br></br>
                        <TextField
                            required
                            id="outlined-textarea"
                            label="New Number"
                            placeholder="Enter New Number"
                            variant="outlined"
                            // className={classes.input}
                            value={newMobile.mobile}
                            onChange={(e)=>{setNewMobile(e.target.value)}}
                            name="mobile"
                            // type='number'

                        />
                        <br></br> <br></br> 
                       
                    </DialogContent>
                    
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setOpenMobile(false) }} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Cancel
                        </Button>
                        <Button onClick={updateMobile} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            {/* ==========================================================Inbox===================================================== */}

            <div>
                <Dialog
                    open={openInbox}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background: '#4c5e5a' }}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background: '#f7925b' }}><h3>{"Your Talk With Jaipur Guide."}</h3></DialogTitle>
                    <DialogContent style={{ background: '#d9f1fc' }}>
                       {queryData.map((data,i)=>(
                           data.email === localStorage.getItem('token') ?
                           <>
                                <b> Your Message:</b> {data.message}
                                <br></br>
                                <b> Reply :</b> {data.reply}
                                <br></br>
                                ======================================================================
                           </>
                           :[]
                       ))}
                    </DialogContent>
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setOpenInbox(false) }} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Close
                        </Button>
                       
                    </DialogActions>
                </Dialog>
            </div>

            {/* ==========================================================Booking===================================================== */}

            <div>
                <Dialog
                    open={openBooking}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background: '#4c5e5a' }}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background: '#f7925b' }}><h3>{"Select category to see your booking."}</h3></DialogTitle>
                    <DialogContent style={{ background:'#d9f1fc'}}>
                        <br></br>
                        <FormControl variant="outlined" className={classes.input} style={{ width: 500 }}>
                            <InputLabel id="demo-simple-select-outlined-label">Choose</InputLabel>
                            <Select
                                // labelId="demo-simple-select-outlined-label"
                                id="choose"

                                label="choose"
                                onChange={(e)=>{setChoose(e.target.value)}}
                                value={choose.choose}
                                name="choose"


                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='hotel'>Hotel</MenuItem>
                                <MenuItem value='package'>Package</MenuItem>
                                
                            </Select>

                        </FormControl>
                        <br></br><br></br>


                        {
                        choose==='hotel'?
                        <>
                            <h2 style={{color:'green'}}>Hotel Booking Details</h2>
                            {
                                hotelData.map((data,i)=>(
                                    
                                    data.email === localStorage.getItem('token') ? 
                                    <>
                                    { 
                                
                                    dateNow.getTime() <= new Date(data.checkin).getTime() ?
                                    <>
                                        <div>
                                            
                                            <br></br>
                                            
                                            <b> Name :</b> {data.name}
                                            <br></br>
                                            <b> Hotel :</b> {data.hotel}
                                            <br></br>
                                            <b> Check In :</b> {data.checkin}
                                            <br></br>
                                            <b>Check Out : </b>{data.checkout}
                                            <br></br>
                                            <b> Room : </b>{data.room}
                                            <br></br>
                                            <b> Person : </b>{data.person}
                                            <br></br>
                                            <b> Price :</b> Rs {data.price}/-
                                            <br></br>
                                            <br></br>
                                            =======================================================
                                        </div>
                                  
                                    </>
                                    :
                                                   []
                                    }

                                    </>:
                                        []
                                ))

                            }
                        </>

                        :choose==='package'?
                        
                                    <>
                                        <h2 style={{ color: 'green' }}>Package Booking Details</h2>
                                        {
                                            packageNewData.map((data, i) => (

                                                // data.email===localStorage.getItem('token')?

                                                // dateNow.getTime() <= new Date(data.checkin)?<p>dfdf</p>:[]
                                                // :[]

                                                data.email === localStorage.getItem('token') ?
                                                    <>
                                                        {

                                                            dateNow.getTime() <= new Date(data.checkin).getTime() ?
                                                                <>
                                                                    <div>

                                                                        <br></br>

                                                                        <b> Name :</b> {data.name}
                                                                        <br></br>
                                                                        <b> Package :</b> {data.package}
                                                                        <br></br>
                                                                        <b> Check In :</b> {data.checkin}
                                                                        <br></br>
                                                                        <b>Check Out : </b>{data.checkout}
                                                                        <br></br>
                                                                        <b> Person : </b>{data.person}
                                                                        <br></br>
                                                                        <b> Price :</b> Rs {data.price}/-
                                                                        <br></br>
                                                                        <br></br>
                                                                        =======================================================
                                                                    </div>

                                                                </>
                                                                :
                                                                []
                                                        }

                                                    </> :
                                                    []
                                            ))

                                        }
                                    </>

                        :[]}

                    </DialogContent>
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setOpenBooking(false); setChoose(false) }} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Close
                        </Button>
                       
                    </DialogActions>
                </Dialog>
            </div>

            {/* ==========================================================History===================================================== */}

            <div >
                <Dialog
                    open={openHistory}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background: '#4c5e5a' }}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background: '#f7925b' }}><h3>{"Select category to see your booking history."}</h3></DialogTitle>
                    <DialogContent style={{ background: '#d9f1fc' }}>
                        <FormControl variant="outlined" className={classes.input} style={{ width: 500 }}>
                            
                            <InputLabel id="demo-simple-select-outlined-label">Choose</InputLabel>
                            <Select
                                // labelId="demo-simple-select-outlined-label"
                                id="choose"

                                label="choose"
                                onChange={(e) => { setChoose(e.target.value) }}
                                value={choose.choose}
                                name="choose"


                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='hotel'>Hotel</MenuItem>
                                <MenuItem value='package'>Package</MenuItem>

                            </Select>

                        </FormControl>
                        <br></br><br></br>


                        {
                            choose === 'hotel' ?
                                <>
                                    <h2 style={{ color: 'green' }}>Hotel Booking History</h2>
                                    {
                                        hotelData.map((data, i) => (

                                            data.email === localStorage.getItem('token') ?
                                                <>
                                                    {

                                                        dateNow.getTime() > new Date(data.checkin).getTime() ?
                                                            <>
                                                                <div>

                                                                    <br></br>

                                                                    <b> Name :</b> {data.name}
                                                                    <br></br>
                                                                    <b> Hotel :</b> {data.hotel}
                                                                    <br></br>
                                                                    <b> Check In :</b> {data.checkin}
                                                                    <br></br>
                                                                    <b>Check Out : </b>{data.checkout}
                                                                    <br></br>
                                                                    <b> Room : </b>{data.room}
                                                                    <br></br>
                                                                    <b> Person : </b>{data.person}
                                                                    <br></br>
                                                                    <b> Price :</b> Rs {data.price}/-
                                                                    <br></br>
                                                                    <br></br>
                                                                    =======================================================
                                                                </div>

                                                            </>
                                                            :
                                                            []
                                                    }

                                                </> :
                                                []
                                        ))

                                    }
                                </>

                                : choose === 'package' ?

                                    <>
                                        <h2 style={{ color: 'green' }}>Package Booking History</h2>
                                        {
                                            packageNewData.map((data, i) => (

                                                // data.email===localStorage.getItem('token')?

                                                // dateNow.getTime() <= new Date(data.checkin)?<p>dfdf</p>:[]
                                                // :[]

                                                data.email === localStorage.getItem('token') ?
                                                    <>
                                                        {

                                                            dateNow.getTime() > new Date(data.checkin).getTime() ?
                                                                <>
                                                                    <div>

                                                                        <br></br>

                                                                        <b> Name :</b> {data.name}
                                                                        <br></br>
                                                                        <b> Package :</b> {data.package}
                                                                        <br></br>
                                                                        <b> Check In :</b> {data.checkin}
                                                                        <br></br>
                                                                        <b>Check Out : </b>{data.checkout}
                                                                        <br></br>
                                                                        <b> Person : </b>{data.person}
                                                                        <br></br>
                                                                        <b> Price :</b> Rs {data.price}/-
                                                                        <br></br>
                                                                        <br></br>
                                                                        =======================================================
                                                                    </div>

                                                                </>
                                                                :
                                                                []
                                                        }

                                                    </> :
                                                    []
                                            ))

                                        }
                                    </>

                                    : []}
                    </DialogContent>
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setOpenHistory(false); setChoose(false) }} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Close
                        </Button>
                        {/* <Button onClick={() => { setOpenHistory(false) }} color="primary">
                            Agree
                        </Button> */}
                    </DialogActions>
                </Dialog>
            </div>

            {/* ==========================================================FAQs===================================================== */}

            <div>
                <Dialog
                    open={openFAQ}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background:'#4c5e5a'}}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background:'#f7925b'}}><h3>{"FAQs"}</h3></DialogTitle>
                    <DialogContent style={{ background: '#d9f1fc' }}>
                        <h5>1. What is the Best price Guarantee?</h5>
                        When booking through our website www.jaipurguide.com, via our service center or directly in our hotel,
                         we guarantee, that you will get the best available rate. In case you will find a cheaper price 
                         after your booking, you will receive the cheaper rate less 25% discount.
                        
                        <br></br><br></br>

                        <h5>2. At what time is check-in?</h5>
                        Generally hotel rooms are available from 3pm and apartments from 5pm.

                        <br></br><br></br>

                        <h5>3. At what time is check-out?</h5>
                        Check-out is generally at 11am. Afterwards the rooms have to get cleaned for the upcoming arrivals.

                        <br></br><br></br>

                        <h5>4. Is parking available at the hotel?</h5>
                        All Jaipur Guide Hotels have sufficient parking spaces. Most hotel also have a garage (partly with costs),
                        where your car can safely be stored overnight. Sometimes, there are also parking spaces free of charge
                        at or around the hotel. You will find more information about parking under „General Information“ in the
                         hotel of your choice.

                        <br></br><br></br>

                        <h5>5. Can I reserve a parking lot?</h5>
                        In some hotels you can book a parking lot directly in your online booking. After choosing a hotel during the 
                        booking process, the system offers you some additional services. Please note that you have to choose a service
                         for each day. It is not possible to reserve a parking slot in advance.
                        
                        <br></br><br></br>
                        
                        <h5>6. What are the reception opening hours ?</h5 >
                        The reception is open 24 hours and our colleagues will be at your service day and night.

                        <br></br><br></br>

                        <h5>7. Can I also book breakfast online ? What does it cost ?</h5 >
                        In some Jaipur Guide Hotels & Resorts buffet breakfast is already included in the rate. For hotels or rates, which do
                        not have breakfast included, there is of course the possibility to book it online. Please choose the requested 
                        meals after choosing the hotel room. The costs for breakfast depend on the hotel and may vary from Rs 200-300 per person.

                        <br></br><br></br>

                        <h5>8. Can I bring my pet ?</h5 >
                        In almost every Jaipur Guide Hotel & Resort pets are welcome. Depending on the hotel, there is a fee of 10-30,- €. Please note that for hygienic reasons pets are usually not allowed in the gastronomic and spa areas.

                        <br></br><br></br>

                        <h5>10. Where can I see the hotel rates ? / How much is a room/night ?</h5 >
                        Our rates are calculated on a daily basis. Therefore we cannot give you a general overview of costs. But you can easily enter the arrival dates in our booking engine and our system will search the best available rates for you.

                        <br></br><br></br>

                        <h5>11. Are the rates per person or per room ?</h5 >
                        All prices, unless stated otherwise, are on a per-room-basis.
                    </DialogContent>
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setOpenFAQ(false) }} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Close
                        </Button>
                        {/* <Button onClick={() => { setOpenFAQ(false) }} color="primary">
                            Agree
                        </Button> */}
                    </DialogActions>
                </Dialog>
            </div>

            {/* ==========================================================Contact Us===================================================== */}

            <div>
                <Dialog
                    open={openContact}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background: '#4c5e5a'}}
                >
                    {/* <DialogTitle id="alert-dialog-slide-title"><h1></h1>{""}</DialogTitle> */}
                    <DialogContent style={{ background: '#6d613c', width: '102%' }}>
                        <Contact style={{ border: '1px solid #6d613c' }}/>
                    </DialogContent>
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setOpenContact(false) }} color="primary" style={{ border: '1px solid white', color: 'white' }}>
                            Close
                        </Button>
                        {/* <Button onClick={() => { setOpenContact(false) }} color="primary">
                            Agree
                        </Button> */}
                    </DialogActions>
                </Dialog>
            </div>

            {/* ==========================================================Wishlist===================================================== */}

            <div>
                <Dialog
                    open={openWishlist}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{ background: '#4c5e5a' }}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background: '#f7925b' }}><h3>{"Your Wishlist"}</h3></DialogTitle>
                    <DialogContent style={{ background: '#d9f1fc' }}>
                        
                    </DialogContent>
                    <DialogActions style={{ background: '#f7925b' }}>
                        <Button onClick={() => { setOpenWishlist(false) }} color="primary" style={{border:'1px solid white',color:'white'}}>
                            Close
                        </Button>
                        {/* <Button onClick={() => { setOpenWishlist(false) }} color="primary">
                            Agree
                        </Button> */}
                    </DialogActions>
                </Dialog>
            </div>

            
        </>
    );
}
