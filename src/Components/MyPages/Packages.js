import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router';
import SvgIcon from '@material-ui/core/SvgIcon';

import { packageDatafromplaceholder } from '../../Action/PackageAction'
import SearchAppBar2Logout from './SearchAppBarLogout'


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
        textAlign:'center'

    },

    part1:{
        '&:hover': {
            borderRadius: '195px 10px',
        }
    },

    part2: {
        '&:hover': {
            borderRadius:'100%'
        }
    }

}))

const Packages = () =>{


    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    let classes = useStyles()
    let history = useHistory()

    const dispatch = useDispatch()

    const storeData = useSelector((state) =>


        state.PackageReducer.data && state.PackageReducer.data.length && Array.isArray(state.PackageReducer.data) ?
            state.PackageReducer.data : []

    );




    // console.log(arr)



    useEffect(() => {

        dispatch(packageDatafromplaceholder())





    }, []);


    const bookNow = (x) => {
        history.push('/PackageBooking', x)
    }


    const back = () => {
        history.goBack()
    }

    const loginpage = () => {
        history.push('/Login')
    }

    return (
        <>

           
            {
                localStorage.getItem('login')==='true'
                ?

                <>
                <SearchAppBar2Logout/>
            
            <div style={{ marginTop: 0, backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
               
            <div className={classes.root}>
                
                <Paper elevation={3} style={{ height: 'auto', width: '70%' , border:'2px solid red',borderRadius:'200px',justifyContent:'center',marginTop:50}}>
                    <h1 style={{padding:30,color:'red'}}>MAKE YOUR OWN MEMORABLE DESTINATION</h1>
                    <Paper elevation={3} style={{height:'auto',width:'80%',textAlign:'center',justifyContent:'center',marginLeft:110,marginBottom:50}}>
                        <div style={{background:'yellow'}}>
                            <h2 >JAIPUR   HOLIDAY  PACKAGES</h2>
                        </div>

                        {/* {JSON.stringify(packageData)} */}
                        {storeData.map((data) => (


                            <div className={classes.pack} style={{ display: 'flex', marginTop: 10, background: 'black', width: '100%', borderRadius: '30px'}}>
                           
                            <Paper className={classes.part1} elevation={3} style={{ height: 'auto', width: '40%', margin: 20, borderRadius: '20px' }}>
                                    <img className={classes.img} src={data.image} alt="Hotel Image" style={{ height: 350, width: '100%', borderRadius: '20px' }} />
                           </Paper>
                        
                           

                            <Paper className={classes.part2} elevation={3} style={{ height: 'auto', width: '57%', margin: 20, borderRadius: '20px',padding:20}} >
                                <h5 style={{ color: 'red', marginTop: 10}}>JAIPUR TOUR PACKAGES FOR {data.header} DAYS</h5>
                                <h5 style={{ color: 'blue' }}>{data.duration}</h5>
                                <h5 style={{ color: 'green' }}><u>INCLUSION</u></h5>
                                <h5 style={{ color: 'orange' }}>{data.inclusion}</h5>

                                <p style={{ color: 'blue' }}>
                                   
                                    {data.description}
                                </p>
                                <h3 style={{color:'red'}}>&#8377; {data.price}/-</h3>
                                <Button className={classes.button} onClick={()=>bookNow(data)} style={{ backgroundColor: 'blue', marginBottom: 20,color:'white' }} >Book Now</Button>
                            </Paper>

                           

                        </div>

                        ))}
                    </Paper>

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

export default Packages;