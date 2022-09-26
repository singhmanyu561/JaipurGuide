import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { useLocation,useHistory } from 'react-router-dom'
import moment from 'moment';
import Axios from 'axios'
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchAppBar2Logout from './SearchAppBarLogout'
import ErrorBoundary from './ErrorBoundary'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent:'center',
        marginTop:30,
        marginLeft:100,
        width: "90%", 
        display: 'flex'
    },

    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        diplay:'flex'
        
        
    },
    paper2: {
        padding: theme.spacing(3),
        marginLeft:50,
        color: theme.palette.text.secondary,
        diplay: 'flex'


    },
    input:{
        width:'80%'
    }
}));





const HotelBooking2=()=> {

    // function HomeIcon(props) {
    //     return (
    //         <SvgIcon {...props}>
    //             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    //         </SvgIcon>
    //     );
    // }

    const classes = useStyles();

    const Data = useLocation();
    let history = useHistory()

    // console.log(Data.state.price);
    

    const [values, setValues] = useState({
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        nationality:'',
        status:'',
        checkIn: 'dd-mm-yyyy',
        checkOut:'dd-mm-yyyy'
       
    })

    const [rooms, setRooms] = useState(0)
    const [person, setPerson] = useState(0)


    const fun = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const submitForm = (event) => {
        event.preventDefault();

        const templateId = 'template_ev26m47';
        const serviceID = 'service_mygmail';

        var bookingDetails = {
            name: values.fname.concat(' ',values.lname),
            mobile: values.mobile,
            email: values.email,
            nationality: values.nationality,
            status: values.status,
            hotel:Data.state.name,
            checkIn:values.checkIn,
            checkOut:values.checkOut,
            room:rooms,
            person:person,
            tPrice:Data.state.price*rooms*days_difference,
            bookTime:moment().format('lll')
        }

        Axios.post('http://localhost:7000/booked_hotel', bookingDetails)
            .then((response) => {
                console.log(response);

                setValues({
                    ...values, ['fname']: "", ['lname']: "",['mobile']: "", ['email']: "", ['nationality']: "",
                 ['status']: "", ['checkIn']: "", ['checkOut']: ""});

                setRooms(0)
                setPerson(0)

                if (response.data === 'hotel booked successfully') {
                    window.emailjs.send(
                        serviceID, templateId,
                        bookingDetails
                    ).then(res => {
                        alert('Hotel booked successfully and Email sent to customer')
                        history.push('/HotelBooking')
                    })
                        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [checked, setChecked] = React.useState(true);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const chooseNationality = (e) => {
        console.log(e.target.value);
    }

    const incRoom = () => {
        setRooms(rooms + 1)
       
    }

    const decRoom = () => {
        if (rooms > 0) {
            setRooms(rooms - 1)

        }
        

    }

    const incPerson = () => {
        setPerson(person + 1)

    }

    const decPerson = () => {
        if (person > 0) {
            setPerson(person - 1)

        }

    }

    // console.log(moment.format('L'))

    if (values.checkIn !== 'dd-mm-yyyy' && values.checkOut !== 'dd-mm-yyyy')

    {
        var date1 = new Date(values.checkIn);
        var date2 = new Date(values.checkOut);

        var time_difference = date2.getTime() - date1.getTime();

        var days_difference = time_difference / (1000 * 60 * 60 * 24);

       
    }
    else{var days_difference = 0}


    //=============================================================================
    var today = new Date(values.checkIn);
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    console.log(tomorrow)
    var yy = tomorrow.getFullYear()
    var mm = tomorrow.getMonth()+1
    if(mm.toString().length == 1){
        mm = '0'+mm.toString()
    }
    var dd = tomorrow.getDate()
    if (dd.toString().length == 1) {
        dd = '0' + dd.toString()
    }

    var day = yy + '-' + mm + '-' + dd
    console.log(yy+'-'+mm+'-'+dd)
   
   const back = () =>{
       history.goBack()
   }
  
   

    return (
        <>


          
            

            <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <SearchAppBar2Logout />
            <h1 className={classes.root} style={{ color: 'red', background: 'none' }}>Enter Details To Complete Your Booking</h1>
                
                <Paper className={classes.root} style={{padding:50,background:'black'}}>

                <Paper className={classes.paper} style={{ width: "60%" }}>
                    <TextField
                        required
                        id="outlined-textarea"
                        label="First Name"
                        // placeholder="Placeholder"
                        multiline
                        variant="outlined"
                        className={classes.input}
                        value={values.fname}
                        onChange={fun}
                        name="fname"

                    />
                    <br></br> <br></br>

                    <TextField
                        required
                        id="outlined-textarea"
                        label="Last Name"
                        // placeholder="Placeholder"
                        multiline
                        variant="outlined"
                        className={classes.input}
                        value={values.lname}
                        onChange={fun}
                        name="lname"

                    />
                    <br></br> <br></br>

                    <TextField
                        required
                        id="outlined-textarea"
                        label="Email"
                        // placeholder="Placeholder"
                        multiline
                        variant="outlined"
                        className={classes.input}
                        value={values.email}
                        onChange={fun}
                        name="email"

                    />
                    <br></br> <br></br>
                    <TextField
                        required
                        id="outlined-textarea"
                        label="Mobile"
                        // placeholder="Placeholder"
                        multiline
                        variant="outlined"
                        className={classes.input}
                        value={values.mobile}
                        onChange={fun}
                        name="mobile"

                    />
                    <br></br> <br></br>
                    <FormControl variant="outlined" className={classes.input}>
                        <InputLabel id="demo-simple-select-outlined-label">Nationality</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            
                            label="nationality"
                            onChange={fun}
                            value={values.nationality}
                            name="nationality"
                            
                           
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Indian'>Indian</MenuItem>
                            <MenuItem value='American'>American</MenuItem>
                            <MenuItem value='Sri Lankan'>Sri Lankan</MenuItem>
                            <MenuItem value='Bangladeshi'>Bangladeshi</MenuItem>
                            <MenuItem value='Australian'>Australian</MenuItem>
                            <MenuItem value='British'>British</MenuItem>
                            <MenuItem value='African'>African</MenuItem>
                            <MenuItem value='Japanese'>Japanese</MenuItem>

                        </Select>

                    </FormControl>

                    <br></br> <br></br>

                    <FormControl variant="outlined" className={classes.input}>
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"

                            label="status"
                            onChange={fun}
                            value={values.status}
                            name="status"


                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Single'>Single</MenuItem>
                            <MenuItem value='Married'>Married</MenuItem>
                            
                        </Select>

                    </FormControl>

                    <br></br><br></br>

                    <Button variant="contained" color="primary" onClick={submitForm} type="submit">
                        Book 
                    </Button>
                        <Button variant="contained" color="primary" onClick={back} type="submit" style={{marginLeft:20}}>
                            Cancel
                        </Button>
                </Paper>
                <Paper className={classes.paper2} style={{ width: "40%"}}>


                    <div style={{ display: 'flex' }}>
                        <Paper elevation={3} style={{ width: '45%', textAlign: 'center', padding: 10 }}>

                            <h5 >Rooms</h5>
                            <Button onClick={decRoom} style={{ background:'#f2eff4'}}><b >-</b></Button>
                            &emsp; <b style={{color:'red'}}>{rooms}</b>  &emsp;
                            <Button onClick={incRoom} style={{ background: '#f2eff4' }}><b>+</b></Button>

                        </Paper>

                        <Paper elevation={3} style={{ width: '45%', marginLeft: 25, textAlign: 'center', padding: 10 }}>

                            <h5>Person</h5>
                            <Button onClick={decPerson} style={{ background: '#f2eff4' }}><b>-</b></Button>
                            &emsp; <b style={{ color: 'red' }}>{person}</b>  &emsp;
                            <Button onClick={incPerson} style={{ background: '#f2eff4' }}><b>+</b></Button>

                        </Paper>
                    </div>

                    <br></br> <br></br>

                    <div style={{ display: 'flex' }}>

                    <Paper elevation={3} style={{ width: '45%' ,padding:15}}>

                    <TextField
                        required
                        id="checkIn"
                        label="Check In"
                        type="date"
                        // defaultValue="dd-mm-yyy"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.detail}
                        value={values.checkIn}
                        onChange={fun}
                        name="checkIn"
                        style={{ width: '90%',marginLeft:10 }}

                    />

                     </Paper>

                    <Paper elevation={3} style={{ width: '45%', marginLeft: 30, padding: 15 }}>

                    <TextField
                        required
                        id="checkOut"
                        label="Check Out"
                        type="date"
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.detail}
                        value={values.checkOut}
                        onChange={fun}
                        name="checkOut"
                        style={{ width: '90%', marginLeft: 10}}
                    />

                    </Paper>

                    </div>

                    <br></br>

                    <div style={{padding:10}}>
                    
                    <Paper elevation={3} style={{padding:20}}>

                    <h2 style={{color:'red',textAlign:'center'}}>Review Details</h2>
                    <br></br>

                    <h6><span style={{ color: 'brown' }}>{values.checkIn}</span>  to <span style={{ color: 'brown' }}>{values.checkOut}</span></h6>
                    <h6 style={{ color: 'green' }}>{days_difference} Night</h6>
                    <h6 style={{ color: 'green' }}>{rooms} x Room</h6>
                    <h6 style={{ color: 'green' }}>{person}  Person</h6>
                    <h6>Total Price</h6>
                    <Paper style={{ width: '25%', background:'#fcc094',fontSize:20,textAlign:'center',color:'white'}}> Rs {Data.state.price*rooms*days_difference}/-</Paper>
                            
                    </Paper>

                    </div>

                </Paper>
            </Paper>
            <br></br><br></br>
            
            </div>

               

        </>
    );
}

export default HotelBooking2;