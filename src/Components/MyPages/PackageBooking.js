import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useHistory,useLocation } from 'react-router';
import moment  from 'moment';
import Axios from 'axios'
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchAppBar2Logout from './SearchAppBarLogout'


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        justifyContent: 'center',
        // marginTop: 70,
        marginLeft: 100,
        width: "90%",
        display: 'flex',
        padding:50,
        background:'black'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        diplay: 'flex'


    },
    paper2: {
        padding: theme.spacing(2),
        marginLeft: 50,
        color: theme.palette.text.secondary,
        diplay: 'flex'


    },
    input: {
        width: '80%'
    }
}));

const PackageBooking = () => {


    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    const classes = useStyles();
    const Data = useLocation()
    let history = useHistory()
    // console.log(Data.state.header)

    const [values, setValues] = useState({
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        nationality: '',
        status: '',
        checkIn: 'dd-mm-yyyy',
       

    })

    var checkOut = 'dd-mm-yyyy'

    const [person, setPerson] = useState(0)



    const fun = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const submitForm = (event) => {
        event.preventDefault();

        const templateId = 'template_rzi2xrl';
        const serviceID = 'service_mygmail';

        var bookingDetails = {
            name: values.fname.concat(' ', values.lname),
            mobile: values.mobile,
            email: values.email,
            nationality: values.nationality,
            status: values.status,
            package:'JAIPUR TOUR PACKAGES FOR '+Data.state.header+' DAYS',
            checkIn: values.checkIn,
            checkOut: checkOut,
            person: person,
            tPrice: Data.state.price * person,
            bookTime: moment().format('lll')
        }

        Axios.post('http://localhost:7000/booked_package', bookingDetails)
            .then((response) => {
                console.log(response);

                setValues({
                    ...values, ['fname']: "", ['lname']: "", ['mobile']: "", ['email']: "", ['nationality']: "",
                    ['status']: "", ['checkIn']: ""
                });

                setPerson(0)

                if(response.data === 'package booked successfully'){
                    window.emailjs.send(
                        serviceID, templateId,
                        bookingDetails, 'user_QtbDVd48yFFKTJPyOocqz'
                    ).then(res => {
                        alert('Package booked successfully and Email sent to customer')
                        history.push('/Package')
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

    const incPerson = () => {
        setPerson(person + 1)

    }

    const decPerson = () => {
        if (person > 0) {
            setPerson(person - 1)

        }

    }

    //=================================================================================================

    if(values.checkIn !== 'dd-mm-yyyy')
    {
    var today = new Date(values.checkIn);
    var newDay = new Date(today.getTime() + (24*Data.state.header * 60 * 60 * 1000));
    // console.log(tomorrow)
    var yy = newDay.getFullYear()
    var mm = newDay.getMonth() + 1
    if (mm.toString().length == 1) {
        mm = '0' + mm.toString()
    }
    var dd = newDay.getDate()
    if (dd.toString().length == 1) {
        dd = '0' + dd.toString()
    }

    checkOut = yy + '-' + mm + '-' + dd
    }


    const back = () => {
        history.goBack()
    }


    return (
        <>
            
            <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <SearchAppBar2Logout/>
            
           
            <h1 className={classes.root} style={{color:'red',background:'none'}}>Enter Details To Complete Your Booking</h1>
            <Paper className={classes.root} style={{}}>

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
                <Paper className={classes.paper2} style={{ width: "40%" }}>

                    <div style={{display:'flex'}}>

                    <Paper elevation={3} style={{ width: '45%', marginLeft: 12, textAlign: 'center', padding: 10 }}>

                        <h5>Person</h5>
                        <Button onClick={decPerson} style={{ background: '#f2eff4' }}><b>-</b></Button>
                        &emsp; <b style={{ color: 'red' }}>{person}</b>  &emsp;
                        <Button onClick={incPerson} style={{ background: '#f2eff4' }}><b>+</b></Button>

                    </Paper>

                        <Paper elevation={3} style={{ width: '45%', padding: 10, marginLeft: 25}}>

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
                        style={{ width: '90%', marginLeft: 10 }}

                    />
                    </Paper>

                    </div>

                    <br></br>

                    <Paper elevation={3} style={{ padding: 20 }}>

                    <h2 style={{ color: 'red',textAlign:'center'}}>Review Details</h2>
                    <br></br>
                    
                    <h6 style={{ color: 'blue' }}>JAIPUR TOUR PACKAGES FOR {Data.state.header} DAYS</h6>
                    <h6 style={{color:'brown'}}>{values.checkIn} <span style={{color:'black'}}>to</span>  {checkOut}</h6>
                    <h6 style={{ color: 'green' }}>{Data.state.duration}</h6>
                    <h6 style={{ color: 'green' }}>{person} Person</h6>
                    <h6>Total Price</h6>
                    <Paper style={{ width: '25%', background: '#fcc094', fontSize: 20, textAlign: 'center' ,color:'white'}}> Rs {Data.state.price*person}/-</Paper>
                    <br></br>
                    <p>{Data.state.description}</p>
                    </Paper>

                </Paper>
            </Paper>
            <br></br><br></br>

            </div>
            {/* </div> */}
        </>
    );
}

export default PackageBooking;