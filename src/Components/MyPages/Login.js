import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { validateEmail, validatePassword } from './Validation'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SvgIcon from '@material-ui/core/SvgIcon';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(60),
            height: theme.spacing(60),
        },
        justifyContent: 'center',
        // marginTop: 100,
        background:'black',
       

    },

    input: {
        marginTop: 10,
        width: '80%',
        borderRadius: '5px',
        height: 50,
        background: '#d6d6d1',
        padding: 20
    },
}));

const Login = () => {

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }


    const classes = useStyles();

    let history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [toEmail, setToEmail] = useState({
        'to_name':'',
        'to_email': ''

    })

    const [newPass, setNewPass] = useState({
        'newpass': '',
        'confirmpass': ''

    })

    const [otp,setOtp] = useState(0)
    const [Email, setEmail] = useState('')
    const [open, setOpen] = useState(false);
    const [openValid, setOpenValid] = useState(false);
    const [openReset, setOpenReset] = useState(false);
    const [emailError, setEmailError] = useState()
    const [passError, setPassError] = useState()
    const [submitError, setsubmitError] = useState()
    
   
    const [user, setUser] = useState(true)



    

    const otpFun = ()=>{

        
        var random = Math.floor(Math.random() * 900000 + 100000).toString()

        sendFun(random)
    } 





    const sendFun = (random) => {

       
    
       localStorage.setItem('sentOTP',random)

       setEmail(toEmail.to_email)
        

        const templateId = 'template_e363s3l';
        const serviceID = 'service_mygmail';
        const userID = 'user_QtbDVd48yFFKTJPyOocqz';

        const variables = {
            to_name: toEmail.to_name,
            to_email: toEmail.to_email,
            message:random
        }
        window.emailjs.send(
            serviceID, templateId,
            variables, userID
        ).then(res => {
            
            alert('OTP sent!')
            
            // history.go()
            setOpenValid(true)
            
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))

        
        setToEmail({ ...toEmail,  ['to_email']: '',['to_name']:'' })
        // setMessage('')
        setOpen(false);
       


    }

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
        setOpenValid(false)
        setOtp(0)
        setOpenReset(false)
        setNewPass('')
        

    };

    // const handleCloseValid = () => {
       
    //     setOpenValid(false)
    //     setOtp(0)

    // };

    const handleChange = (e) => {
        setToEmail({...toEmail,[e.target.name]:e.target.value })

    };

    const handleChangeNewPass = (e) => {
        setNewPass({ ...newPass, [e.target.name]: e.target.value })

    };

    const handleChangeValid = (e) => {
        setOtp( e.target.value )

    };


    const errEmail = () => {
        var err = validateEmail(values.email)
        if (err === false) {
            setEmailError('')
        } else (setEmailError(err))


    }

    const errPass = () => {
        var err = validatePassword(values.password)
        if (err === false) {
            setPassError('')
        } else (setPassError(err))


    }

    const fun = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })

        if (values.email !== '') {
            errEmail(values.email)
        }

        if (values.password !== '') {
            errPass(values.password)
        }
    }

    
    const fun1 = (event) => {
        event.preventDefault();


        if (emailError === '' && passError === '') {

            setsubmitError('')

        var loginVisitor = {
            email: values.email,
            password: values.password
        }
        

        // user ?
           
             Axios.post('http://localhost:7000/loginForm', loginVisitor)
            .then(function (response) {
                // console.log(typeof (response.data));
                if (response.data === "Correct password") {
                    // localStorage.setItem('token','')
                    // if (localStorage.getItem('token') === '') {
                        localStorage.setItem('token', values.email)
                        localStorage.setItem('login', true)
                        history.push('/')
                        // history.goBack()

                    
                }

                setValues({ ...values, ['email']: "", ['password']: "" });


            })
            .catch(function (error) {
                setsubmitError('😣 Wrong Credentials 😣')
            })
         
            
           
        

            
        } else { setsubmitError('🙁 All fields are mandatory 🙁') }
            


    }


    const adminLogin = () =>{

        if(values.email === 'admin' && values.password === 'root'){
            localStorage.setItem('adminLogin',true)
            history.push('/DashboardHome')
        } 
        else{
        
        alert('Wrong Credentials') 
        setValues({ ...values, ['email']: "", ['password']: "" })
        }
        

    }



    const validateOtpFun = () => {

        
        if(otp===localStorage.getItem('sentOTP')){
            setOpenReset(true)
            setOpenValid(false)
            setOtp(0)
        }
        else{
            alert('Wrong OTP')
            setOpen(true)
        }

    }

    const changePassword = () => {


        if (newPass.newpass === newPass.confirmpass) {

            const obj = {
                email:Email,
                newpass:newPass.newpass
            }

            Axios.post('http://localhost:7000/updatePassword', obj)
                .then(function (response) {
                    // console.log(response.data);
                    if (response.data === "Success") {
                            alert('Password Reset Successful. You can try login now')
                            history.push('/Login')
                            setOpenReset(false)
                           

                        
                    }

                    setNewPass({ ...newPass, ['newpass']: "", ['confirmpass']: "" });


                })
                .catch(function (error) {
                   alert(error)
                })
        }
        else {
            alert('Password Confirmation Failed')
            setNewPass({ ...newPass, ['newpass']: "", ['confirmpass']: "" });
        }

    }

    const back = () =>{
        history.goBack()
    }
       
    const logout = () => {
        // history.push('/')
        localStorage.setItem('login',false)
        localStorage.setItem('adminLogin', false)
        alert('You have been logged out.')
        history.go()
    }

    // const disableBack = () =>{
    //     window.history.forward();
    // }

    // setTimeout(disableBack(),0)

    // window.onunload = function (){ <></> };

    window.history.forward()

    

    return (
        <>
            {
                localStorage.getItem('login')==='false' && localStorage.getItem('adminLogin')==='false' ?
           <>

            
            <a href="/"> <HomeIcon style={{ color: 'black', fontSize: 55, marginTop: 15, marginLeft: 5, position: 'fixed' }} /></a>

            <div className={classes.root} style={{ margin: 0,textAlign:'center', backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1 }} >
            
                <Paper elevation={3} style={{ height: '80%', textAlign: 'center', margin: 140, backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MoLBwDJ4ir_GRwfdOk143gHaEK%26pid%3DApi%26h%3D160&f=1')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 0.8}} >

                    <div style={{ display: 'flex' }}>
                    
                                    <Button className={classes.button} style={{ backgroundColor: 'green', margin: 20, color: 'white' }} onClick={() => { setUser(true) ;setValues({ ...values, ['email']: "", ['password']: "" }) }}> User</Button>
                                    <Button className={classes.button} style={{ backgroundColor: 'green', margin: 20, color: 'white' }} onClick={() => { setUser(false); setValues({ ...values, ['email']: "", ['password']: "" }) }}> Admin</Button>
                        
                    </div>


                    {user===true ?

                    <>
                    
                            <h1 style={{ color: '#f90979', textAlign: 'center', marginTop: 20 }}> User Login</h1>
                            <div style={{ color: 'red' }}><b>{submitError}</b></div>
                            <br></br>
                            <input
                                required
                                id="email"
                                type="email"
                                placeholder="Email"
                                className={classes.input}
                                value={values.email}
                                onChange={fun}
                                onBlur={errEmail}
                                name="email"
                            />
                            <div style={{ color: 'red' }}><b>{emailError}</b></div>
                            
                            <input
                                required
                                type="password"
                                id="password"
                                placeholder="Password"
                                className={classes.input}
                                value={values.password}
                                onChange={fun}
                                onBlur={errPass}
                                name="password"
                            
                               
                            />
                            <div style={{ color: 'red' }}><b>{passError}</b></div>
                            <br></br>
                            <Button variant="contained" color="primary" style={{ marginLeft: 10 }} onClick={fun1} type="submit">
                                Login
                            </Button>
                            <br></br><br></br>
                            <Button style={{ color: 'yellow' }} onClick={handleClickOpen}><b>Forgot Password ?</b></Button>
                            <a href="/Register" style={{ color: 'yellow' }}><h5>Don't have an account ?</h5></a>
                            <br></br>
                           
                   

                            
                    </>

                    : 
                    <>
                     
                    <h1 style={{ color: 'f90979', textAlign: 'center', marginTop: 20 }}> Admin Login</h1>
                    

                   <br></br>
                    <input
                        required
                        id="email"
                        placeholder="Id"
                        className={classes.input}
                        value={values.email} 
                        onChange={fun} 
                        name="email"
                    />
                            <br /><br />
                            <div></div>
                    <input
                        required
                       
                        id="password"
                        type="password"
                        placeholder="Password"
                        className={classes.input}
                        value={values.password}
                        onChange={fun}
                        name="password"
                    />
                            <br></br><br></br><br></br>

                    <Button variant="contained" color="primary" style={{ marginLeft: 10 }} onClick={adminLogin} type="submit">
                        Login
                    </Button>
                            <br></br><br></br>
                           
                    
                  </> }

                    <br></br><br></br>

                   
                </Paper>
               
            </div>

            </>

            :

            

                    <div style={{ textAlign: 'center', marginBottom: 0, background:'#e00850'}}>
                        <div style={{paddingTop:100,paddingBottom:150}}>
                        <span style={{color:'white',fontSize:250}}>404</span>
                        <h1 style={{ color: 'white' }}>Sorry!!! You have an active session logout first.</h1>

                        <Button className={classes.button} onClick={back} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >👍 Continue </Button>
                        <Button className={classes.button} onClick={logout} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >Logout 🔒</Button>
                        </div>
                    </div>

        }

            {/* ====================================================Get OTP============================================================== */}

            <div style={{ width: '200%' }}>

                <Dialog open={open}   aria-labelledby="form-dialog-title" style={{ width: '100%'}}>
                    <DialogTitle id="form-dialog-title">Get OTP</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>
                            Name : {values.to_name}
                            <br></br>
                            Email : {values.to_email}
                        </DialogContentText> */}

                        <input
                            id='to_name'
                            placeholder="Enter your name"
                            name='to_name'
                            value={toEmail.to_name}
                            onChange={handleChange}
                            style={{ width: 500 }} />

                        <br></br><br></br>
                        <input
                            id='to_email'
                            placeholder="Enter your email"
                            name='to_email'
                            value={toEmail.to_email}
                            onChange={handleChange}
                            style={{ width: 500 }} />

                    </DialogContent>
                    <DialogActions>



                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={otpFun} color="primary">
                            Get OTP
                        </Button>
                    </DialogActions>
                </Dialog>
                
            </div>

            {/* ===========================================================Validate OTP================================================================= */}
            
            <div style={{ width: '200%' }}>

                <Dialog open={openValid}  aria-labelledby="form-dialog-title" style={{ width: '100%' }}>
                    <DialogTitle id="form-dialog-title">Validate OTP</DialogTitle>
                    <DialogContent>
                        

                        <input
                            id='otp'
                            placeholder="Enter your otp"
                            name='otp'
                            type='number'
                            value={otp.to_name}
                            onChange={handleChangeValid}
                            style={{ width: 500 }} />

                        <br></br><br></br>
                        

                    </DialogContent>
                    <DialogActions>



                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={validateOtpFun} color="primary">
                             Submit
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>

            {/* ==================================================New Password======================================================== */}

            <div style={{ width: '200%' }}>

                <Dialog open={openReset} aria-labelledby="form-dialog-title" style={{ width: '100%' }}>
                    <DialogTitle id="form-dialog-title">Reset password</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>
                            Name : {values.to_name}
                            <br></br>
                            Email : {values.to_email}
                        </DialogContentText> */}

                        <input
                            id='newpass'
                            placeholder="New Password"
                            name='newpass'
                            type='password'
                            value={newPass.newpass}
                            onChange={handleChangeNewPass}
                            style={{ width: 500 }} />

                        <br></br><br></br>
                        <input
                            id='confirmpass'
                            placeholder="Confirm Password"
                            name='confirmpass'
                            type='password'
                            value={newPass.confirmpass}
                            onChange={handleChangeNewPass}
                            style={{ width: 500 }} />

                    </DialogContent>
                    <DialogActions>



                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={changePassword} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        </>
    );

}

export default Login;