import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import { validateName, validateMobile, validateEmail, validatePassword } from './Validation'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(60),
            height: theme.spacing(60),
        },
        justifyContent:'center',
        marginTop:100

    },

    input:{
        marginTop:15,
        width:'80%',
        borderRadius:'5px',
        height:50,
        background:'#d6d6d1',
        padding:20,
        '&:hover':{
            border:'2px solid powder'
        }
    },
}));

const Register = () =>{

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
        name: '',
        mobile: '',
        email: '',
        password: ''
    })

    const [nameError,setNameError]  = useState()
    const [mobileError, setMobileError] = useState()
    const [emailError, setEmailError] = useState()
    const [passError, setPassError] = useState()
    const [submitError, setsubmitError] = useState()

    const errName = () => {
        var err = validateName(values.name)
        if (err===false){
            setNameError('')
        }else(setNameError(err))
        

    }

    const errMobile = () => {
        var err = validateMobile(values.mobile)
        if (err === false) {
            setMobileError('')
        } else (setMobileError(err))


    }

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

        if (values.name !== '') {
            errName(values.name)
        }

        if (values.mobile !== '') {
            errMobile(values.mobile)
        }

        if (values.email !== '') {
            errEmail(values.email)
        }

        if (values.password !== '') {
            errPass(values.password)
        }
        
    }

    useEffect(() => {

    }, []);


    const submitForm = (event) => {
        event.preventDefault();

        // console.log(setEmailError+''+setMobileError+''+setNameError+''+setPassError)

        if(nameError === '' && mobileError === '' && emailError === '' && passError === ''){

        setsubmitError('')

        var register = {
            name: values.name,
            mobile: values.mobile,
            email: values.email,
            password: values.password
        }

        Axios.post('http://localhost:7000/regisForm', register)
            .then((response) => {
                console.log(response);

                setValues({ ...values, ['name']: "", ['mobile']: "", ['email']: "", ['password']: "" });

                alert("Successfully Registered")
                history.push('/Login')

            })
            .catch(function (error) {
                console.log(error);
            });

        } else { setsubmitError('🙁 All fields are mandatory 🙁') }



    }

    const back = () => {
        history.goBack()
    }

    const logout = () => {
       
        localStorage.setItem('login', false)
        localStorage.setItem('adminLogin', false)
        alert('You have been logged out.')
        history.go()
    }

    

    return (
        <>
            {
                localStorage.getItem('login') === 'false' && localStorage.getItem('adminLogin') === 'false' ?
                    <>
                        <a href="/"> <HomeIcon style={{ color: 'black', fontSize: 55, marginTop: 15, marginLeft: 5, position: 'fixed' }} /></a>

            <div className={classes.root} style={{ margin: 0, backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 1 }}>
                <Paper elevation={3} style={{ height: '80%', textAlign: 'center', margin: 110, backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MoLBwDJ4ir_GRwfdOk143gHaEK%26pid%3DApi%26h%3D160&f=1')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 0.8 }} >
                    
                    <h1 style={{ color:'#f90979',textAlign:'center',marginTop:20}}>Register</h1>
                    
                    <div style={{ color: 'red' }}><b>{submitError}</b></div>
                   
                    <input
                        id="name"
                        placeholder="Name"
                        className={classes.input}
                        required
                        value={values.name} 
                        onChange={fun}
                        onBlur={errName}
                        name="name"


                    />
                    <div style={{ color: 'red' }}><b>{nameError}</b></div>

                    
                    <input
                        required
                        id="mobile"
                        placeholder="Mobile"
                        className={classes.input}
                        value={values.mobile} 
                        onChange={fun}
                        onBlur={errMobile}
                        name="mobile"
                    />
                    <div style={{ color: 'red' }}><b>{mobileError}</b></div>
                    
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
                        id="password"
                        placeholder="Password"
                        className={classes.input}
                        value={values.password}
                        onChange={fun}
                        onBlur={errPass}
                        name="password"
                        type="password"
                    />
                    <div style={{ color: 'red' }}><b>{passError}</b></div>
                    <br></br><br></br>

                    <Button variant="contained" color="primary" onClick={submitForm} type="submit">
                        Register
                    </Button>
                    <br></br><br></br>
                    <a href="/Login" style={{ color: 'yellow' }}><h5>Already have an account ?</h5></a>
                    <br></br> <br></br> <br></br>
                  
                </Paper>
            </div>
                    </>

                    :

                    <div style={{ textAlign: 'center', marginBottom: 0, background: '#e00850' }}>
                        <div style={{ paddingTop: 100, paddingBottom: 150 }}>
                            <span style={{ color: 'white', fontSize: 250 }}>404</span>
                            <h1 style={{ color: 'white' }}>Sorry!!! You have an active session logout first.</h1>

                            <Button className={classes.button} onClick={back} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >👍 Continue </Button>
                            <Button className={classes.button} onClick={logout} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >Logout 🔒</Button>
                        </div>
                    </div>
                } 
        </> 
    );
   
}

export default Register;