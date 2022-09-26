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

import { getUserDatafromplaceholder } from '../Action/UserDetailsAction'
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

export default function UserDetails() {
    const classes = useStyles();
    let history = useHistory();

    // const [values, setValues] = useState({
    //     flag1: false,
    //     flag2: false,
    //     flag3: true,
    //     myDate: '',
    //     size: 10,
    //     color: "black",
    //     emailId: ""

    // })

    const dispatch = useDispatch()

    const storeData = useSelector((state) =>


        state.UserReducer.data && state.UserReducer.data.length && Array.isArray(state.UserReducer.data) ?
            state.UserReducer.data : []

    );




    // console.log(arr)



    useEffect(() => {

        dispatch(getUserDatafromplaceholder())





    }, []);


    const navfun = (x) => {
        const obj = {
            "email":x
        }
        
        Axios.post('http://localhost:7000/delete_user', obj)
            .then(function (response) {
                console.log(response.data);
                if (response.data === "user deleted successfully") {
                   alert("User removed")
                   history.go()
                   history.push("#userDetails")
                }

             })
            .catch(function (error) {
                console.log(error);
            })
    }



    // const onMyChange = (e) => {

    //     setValues({ ...values, ['emailId']: e.target.value })
    // }


    // const changeData = () => {
    //     dispatch(getUserDatafromplaceholder(values.emailId))

    // }

    
    return (
        <>
            {/* <div>

                <input placeholder="Enter email id" name='emailId' onChange={onMyChange} />

                <button onClick={changeData} style={{ marginTop: 10, alignSelf: "center" }} >Click Me</button>
                <p>{values.userId}</p>
            </div> */}
            <div>
            <h1 style={{ textAlign: 'center' }}>User Table</h1>

            <TableContainer component={Paper}style={{width:'100%'}}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Mobile</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeData.map((row) => (
                            <StyledTableRow >
                                <StyledTableCell align="left"><b>{row.name}</b></StyledTableCell>
                                <StyledTableCell align="left">{row.mobile}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                {/* <button onClick={() => navfun(row.email)} style={{ marginTop: 10 }}>Remove</button> */}
                                <IconButton aria-label="delete" onClick={() => navfun(row.email)} style={{ marginTop: 10, color: 'red' }}>
                                    <DeleteIcon />
                                </IconButton>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </>
    );

}
