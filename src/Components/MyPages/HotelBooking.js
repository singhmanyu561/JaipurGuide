import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SvgIcon from '@material-ui/core/SvgIcon';

import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

import SearchAppBar2Logout from './SearchAppBarLogout';

import { useDispatch, useSelector } from 'react-redux'


import { hotelDetailsDatafromplaceholder } from '../../Action/HotelDetailsAction'
import { useHistory } from 'react-router';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(150),
            height: theme.spacing(80),
        },
        justifyContent: 'center',
        paddingTop:50
        
        
    },

    formControl: {
        width: 300,
        marginTop:40,
        marginLeft:100,
        display:'flexbox',
    },

   
    paper:{
        display:'flexbox',
        margin:20
    },

    info:{
        display:'flexbox'
    },
    detail:{
        margin:10,
        // border:'1px solid blue'
    }
}));

const HotelBooking = () =>{
    const classes = useStyles();
    let history = useHistory()

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    const roomTypes = ["Non - smoking rooms","Suites","Family room"]

    const [checked, setChecked] = useState(true);
    const [roomType, setRoomType] = useState(true);
    const [favourite, setFavourite] = useState(false)



    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const chooseRoomType = (e) => {
        setRoomType(e.target.roomType);
    }

   const [rooms,setRooms] = useState(1)
    const [person, setPerson] = useState(0)


    const dispatch = useDispatch()

    

    const hotelData = useSelector((state) =>

        
        state.HotelDetailReducer.data && state.HotelDetailReducer.data.length && Array.isArray(state.HotelDetailReducer.data) ?
            state.HotelDetailReducer.data : []

    );

    var list = []

    // list.push({'name':'abhi',"class":'5'})

    // list.push({ 'name': 'abhimanyu', "class": '6' })

    const setLocal = (x) =>{

      setFavourite(!favourite)

        // const object = {
        //     hotelwishlist: x.id,
        //     email:localStorage.getItem('token')
        // }

        // Axios.post('http://localhost:7000/update_hotelwishlist',object)
        //     .then((response) => {
        //         console.log(response);
        //         // alert("Successfully Registered")
               

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }

    useEffect(() => {

        dispatch(hotelDetailsDatafromplaceholder())
      
        

    }, []);


    const incRoom = () =>{
        setRooms(rooms+1)
        
    }

    const decRoom = () => {
        if(rooms>0){
            setRooms(rooms - 1)
            
        }
        
    }

    const showValue = (e) => {
        setRooms({...rooms,[e.target.name]:e.target.value})
        console.log(rooms)

    }

    const bookNow = (x) => {
        history.push('/HotelBooking2',x)
    }


    const back = () => {
        history.goBack()
    }

    const loginpage = () => {
        history.push('/Login')
    }


    return(

        <>
            {/* <Button onClick={back} style={{ color: 'white', background: 'black', position: 'fixed', margin: 20 }} >◀️ Go Back </Button> */}

        {
        localStorage.getItem('login')==='true'
         ?
         <>
         <SearchAppBar2Logout/>
        <div style={{ marginTop: 0, backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            {/* <a href="/"> <HomeIcon style={{ color: 'black', fontSize: 55, marginTop: 15,marginLeft:5, position: 'fixed' }} /></a>
            <Button onClick={back} style={{ color: 'white', background: 'black', position: 'fixed', marginTop: 70,borderRadius:15 }} >Back </Button>
                        */}

            <div className={classes.root}>
                <Paper elevation={3} style={{ height: 'auto', width: '80%',borderRadius:80}}>
                    <h1 style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>GET YOUR BEST HOLIDAYS WITH THE BEST STAYS</h1>

                        {hotelData.map((data, i) => (

                        <Paper elevation={3} className={classes.paper} style={{ margin: 20, background:'#3f3a3b' ,borderRadius:'10%'}}>
                            <div style={{ margin: 20, display: 'flex' }}>
                                <div style={{marginTop:20, height: 'auto', width: '40%' ,padding:0}}>
                                    <img className={classes.img} src={data.image} alt="dfdf" style={{ height:450, width: '100%',borderRadius:'20%' }} />
                                </div>
                                <Paper elevation={3} className={classes.paper} style={{ height: 'auto', width: '65%', paddingLeft: 20, borderRadius:'5%' }}>
                                    <div style={{display:'flex'}}>
                                            <h1 style={{ color: 'red' }}>{data.name}</h1>
                                           
                                    </div>

                                    <p><b>Address:</b> {data.address}</p>

                                    <div style={{ display: 'flex' }}>

                                            <Paper elevation={3} className={classes.info} style={{ marginTop: 20, width: '30%', height: '100%',textAlign:'center',padding:10 }}>
                                            <h5>Your Price Include</h5>
                                            <ul>
                                                <li style={{textAlign:'left'}}>wifi connection</li>
                                                <li style={{ textAlign: 'left' }}>Hotel Services</li>
                                            </ul>
                                            <h5>Per Night Stay</h5>

                                            <h3 style={{color:'orange'}}>{data.price}/-</h3>

                                        </Paper>

                                         <Paper elevation={0} className={classes.info} style={{ marginLeft: 20, width: '65%' }}>

                                            <br></br>

                                            <div style={{display:'flex'}}>

                                                    <Paper elevation={3} style={{ width: '100%', textAlign: 'center', padding: 10, marginLeft:10}}>

                                                    <h6>Room Features</h6>
                                                    {
                                                        data.features.split(',').map((row1,i)=>(
                                                            
                                                                <li style={{textAlign:'left'}}>{row1}</li>
                                                          
                                                        ))
                                                    }

                                                </Paper>
                                                    
                                                <Paper elevation={3} style={{ width: '100%', textAlign: 'center', padding: 10 ,marginLeft:30}}>
                                                    <h6>Room Types</h6>
                                                        {
                                                            data.types.split(',').map((row2, i) => (
                                                                
                                                                <li style={{ textAlign: 'left' }}>{row2}</li>
                                                                
                                                            ))
                                                        }

                                                </Paper>

                                            </div>

                                            <br></br><br></br>

                                            <Button className={classes.button} onClick={()=>bookNow(data)}style={{ backgroundColor: 'blue', marginLeft: 100, marginBottom: 20,color:'white' }} >Book Now</Button>
                                                
                                        </Paper>
                                    </div>
                                </Paper>

                            </div>
                        </Paper>

                        

                    ))}

                    

                </Paper>
            </div>
        </div>
        </>
        : 
                

                 <div style={{ textAlign: 'center', marginBottom: 0, background: '#e00850' }}>
                        <div style={{ paddingTop: 100, paddingBottom: 150 }}>
                            <span style={{ color: 'white', fontSize: 250 }}>404</span>
                            <h1 style={{ color: 'white' }}>Sorry!!! To access this page you need to login first.</h1>

                            <Button className={classes.button} onClick={back} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >👍 Continue</Button>
                            <Button className={classes.button} onClick={loginpage} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >Login 🔑</Button>
                        </div>
                    </div>
         }

        </>
    );
}

export default HotelBooking;