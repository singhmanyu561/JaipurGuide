import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { queryDatafromplaceholder } from '../Action/QueryAction'

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { init } from 'emailjs-com';




// import { relativeTimeRounding } from 'moment';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);












const useStyles = makeStyles({
    table: {
        minWidth: 700,
        marginTop: 20
    },
});

export default function UserDetails() {

    // init("user_HftBFmjZOd1pu3wsHvYT5");
    const classes = useStyles();
    let history = useHistory();

    const [values, setValues] = useState({
       'to_name':'',
       'to_email':'',
       'id':''

    })

    const [message, setMessage] = useState({
        'message': ''

    })

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()

    const storeData = useSelector((state) =>


        state.QueryReducer.data && state.QueryReducer.data.length && Array.isArray(state.QueryReducer.data) ?
            state.QueryReducer.data : []

    );




    // console.log(arr)



    useEffect(() => {

        dispatch(queryDatafromplaceholder())

    }, []);


   


    const replyfun = () => {


        // alert(`Thank you for your message from ${data.email}`);
        const templateId = 'template_8d89c0c';
        const serviceID = 'service_mygmail';
        const  variables = {
            to_name: values.to_name,
            to_email: values.to_email, 
            message: message.message
        }
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            alert('Email successfully sent!')

            Axios.post('http://localhost:7000/update_message',{message:message.message,id:values.id})
                .then(function (response) {
                    if (response.data === "data saved successfully") {
                        alert('Data Saved')
                    }

                })
                .catch(function (error) {
                    alert(error)
                })
            history.go()
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
       
        setMessage({ ...message, ['message']: '' })
        setValues({...values,['to_name']:'',['to_email']:'',['id']:''})

        
    }

   

   


    const handleClickOpen = (x) => {
        setValues({ ...values, ['to_name']: x.name, ['to_email']: x.email, ['id']: x.id })
        setOpen(true);
    };

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
       
    };

    const handleClose = () => {
        setOpen(false);
        setMessage({ ...message, ['message']: ''})

    };


    return (
        <>
            {/* <div>

                <input placeholder="Enter email id" name='emailId' onChange={onMyChange} />

                <button onClick={changeData} style={{ marginTop: 10, alignSelf: "center" }} >Click Me</button>
                <p>{values.userId}</p>
            </div> */}

            <h1 style={{textAlign:'center'}}>Query/Feedback Table</h1>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Message</StyledTableCell>
                            <StyledTableCell align="left">Reply</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeData.map((row,i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left"><b>{row.message}</b></StyledTableCell>
                                <StyledTableCell align="left">{row.reply}</StyledTableCell>
                                <IconButton aria-label="reply" onClick={() =>handleClickOpen(row)} style={{ marginTop: 10, color: '#1de52b' }}>
                                    <ReplyIcon />
                                </IconButton>
                               
                               
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* ======================================================================================================= */}

            <div style={{ width: '200%', background: '#666987'}}>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={{ width: '100%' }}>
                <DialogTitle id="form-dialog-title">REPLY TO</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Name : {values.to_name}
                        <br></br>
                        Email : {values.to_email}
                    </DialogContentText>

                        <TextareaAutosize 
                        aria-label="minimum height" 
                        rowsMin={8} 
                        placeholder="Type your message here" 
                        name='message'
                        value={message.message}
                        onChange={handleChange}
                        style={{width:500}} />

                </DialogContent>
                <DialogActions>

                   
                
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={replyfun} color="primary">
                        Reply
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        </>
    );

}
