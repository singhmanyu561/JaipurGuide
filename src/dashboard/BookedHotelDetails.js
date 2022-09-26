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

import { hotelBookingDetailsDatafromplaceholder } from '../Action/HotelBookingDetailsAction'
// import { relativeTimeRounding } from 'moment';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

export default function BookedHotelDetails() {
    const classes = useStyles();
    let history = useHistory();

    const [values, setValues] = useState({
       

    })

    const dispatch = useDispatch()

    const storeData = useSelector((state) =>


        state.HotelBookingDetailReducer.data && state.HotelBookingDetailReducer.data.length && Array.isArray(state.HotelBookingDetailReducer.data) ?
            state.HotelBookingDetailReducer.data : []

      
    );




    // console.log(arr)



    useEffect(() => {

        dispatch(hotelBookingDetailsDatafromplaceholder())

    }, []);


    // const navfun = (x) => {
    //     const obj = {
    //         "email":x
    //     }
        
    //     Axios.post('http://localhost:7000/delete_user', obj)
    //         .then(function (response) {
    //             console.log(response.data);
    //             if (response.data === "user deleted successfully") {
    //                alert("User removed")
    //                history.go()
    //                history.push("#userDetails")
    //             }

    //          })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }



    const onMyChange = (e) => {

        setValues({ ...values, ['emailId']: e.target.value })
    }


    const changeData = () => {
        dispatch(hotelBookingDetailsDatafromplaceholder())

    }

    
    return (
        <>
            {/* <div>

                <input placeholder="Enter email id" name='emailId' onChange={onMyChange} />

                <button onClick={changeData} style={{ marginTop: 10, alignSelf: "center" }} >Click Me</button>
                <p>{values.userId}</p>
            </div> */}
            <h1 style={{ textAlign: 'center' }}>Booked Hotel Table</h1>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Mobile</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Nationality</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Hotel Name</StyledTableCell>
                            <StyledTableCell align="left">Check In</StyledTableCell>
                            <StyledTableCell align="left">Check Out</StyledTableCell>
                            <StyledTableCell align="left">Room</StyledTableCell>
                            <StyledTableCell align="left">Person</StyledTableCell>
                            <StyledTableCell align="left">Price (Rs)</StyledTableCell>
                            <StyledTableCell align="left">Booking Date/Time</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeData.map((row) => (
                            <StyledTableRow >
                                <StyledTableCell align="left"><b>{row.name}</b></StyledTableCell>
                                <StyledTableCell align="left">{row.mobile}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.nationality}</StyledTableCell>
                                <StyledTableCell align="left">{row.status}</StyledTableCell>
                                <StyledTableCell align="left"><b>{row.hotel}</b></StyledTableCell>
                                <StyledTableCell align="left">{row.checkin}</StyledTableCell>
                                <StyledTableCell align="left">{row.checkout}</StyledTableCell>
                                <StyledTableCell align="left">{row.room}</StyledTableCell>
                                <StyledTableCell align="left">{row.person}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}/-</StyledTableCell>
                                <StyledTableCell align="left">{row.booktime}</StyledTableCell>

                                {/* <button onClick={() => navfun(row.email)} style={{ marginTop: 10 }}>Remove</button> */}

                                {/* <IconButton aria-label="delete" onClick={() => navfun(row.email)} style={{ marginTop: 10, color: 'red' }}>
                                    <DeleteIcon />
                                </IconButton> */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

}
