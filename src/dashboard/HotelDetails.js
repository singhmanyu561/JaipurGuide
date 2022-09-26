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

import { hotelDetailsDatafromplaceholder } from '../Action/HotelDetailsAction'

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


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
        minWidth: 850,
        marginTop: 20
    },
});



export default function HOtelDetails() {
    const classes = useStyles();
    let history = useHistory();

    // const [values, setValues] = useState({id: ""})

    const [hotel, setHotel] = useState({
        name: '',
        address: '',
        price: '',
        features:'',
        types:'',
        image: ''
    })


    const [editHotel, setEditHotel] = useState({
        id:'',
        name: '',
        address: '',
        price: '',
        features: '',
        types: '',
        image: '',
        choose: ''
    })

    // const [update,setUpdate] = useState()

    const [openNew, setOpenNew] = useState(false);

    // const handleClickNew = () => {
    //     setOpenNew(true);
    // };

    const changeFunEdit = (e) =>{

        
        setEditHotel({...editHotel,[e.target.name]:e.target.value})
    }

    const handleCloseNew = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenNew(false);
    };


    const [open, setOpen] = useState(false);
    const [openEditor, setOpenEditor] = useState(false);

    const dispatch = useDispatch()

    const storeData = useSelector((state) =>


        state.HotelDetailReducer.data && state.HotelDetailReducer.data.length && Array.isArray(state.HotelDetailReducer.data) ?
            state.HotelDetailReducer.data : []

    );




    const [checked, setChecked] = React.useState(true);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    

   



    useEffect(() => {

        dispatch(hotelDetailsDatafromplaceholder())





    }, []);


    const delfun = (x) => {

       
       
        Axios.post('http://localhost:7000/delete_hotel', {"id":x})
            .then(function (response) {
                // console.log(response.data);
                if (response.data === "hotel deleted successfully") {
                    alert("Hotel removed")
                    history.go()
                   
                }

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const editfun = (x) => {

        setOpenEditor(true)
        setEditHotel({ ...editHotel, ['id']: x.id, ['name']: x.name, ['address']: x.address, ['price']: x.price, ['features']: x.features, ['types']: x.types, ['image']: x.image })

       
    }

    const update = () => {

        var val = ''

        if(editHotel.choose==='name'){val=editHotel.name}
        else if (editHotel.choose === 'address') { val = editHotel.address }

        else if (editHotel.choose === 'price') { val = editHotel.price }

        else if (editHotel.choose === 'features') { val = editHotel.features }

        else if (editHotel.choose === 'types') { val = editHotel.types }

        else if (editHotel.choose === 'image') { val = editHotel.image }




        const obj = {
            
            first : editHotel.choose,
            second : val,
            third : editHotel.id
        }

        Axios.post('http://localhost:7000/update_hotel', obj)
            .then(function (response) {
                if (response.data === "hotel edited successfully") {
                    alert("Hotel Edited")
                    history.go()

                }

            })
            .catch(function (error) {
                console.log(error);
            })

    }



   
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenEditor(false)
        setEditHotel({ ...editHotel, ['id']: '', ['name']: '', ['address']: '', ['price']: '', ['features']: '', ['types']: '', ['image']: '' ,['choose']:''})
    };

    const changeFun = (event) => {
        setHotel({ ...hotel, [event.target.name]: event.target.value })
    }


    const addHotel = (event) => {

        event.preventDefault();

        var addPack = {
            name: hotel.name,
            address: hotel.address,
            price: hotel.price,
            features:hotel.features,
            types:hotel.types,
            image: hotel.image
        }

        Axios.post('http://localhost:7000/hotel', addPack)
            .then((response) => {
                console.log(response);

                setHotel({ ...hotel, ['name']: "", ['address']: "", ['price']: "", ['features']: "", ['types']: "" , ['image']: "" });

                // alert("Hotel Successfully Added")
                // history.push('/Login')
                // history.go()

                setOpen(false)
                setOpenNew(true);
                history.go()


            })
            .catch(function (error) {
                console.log(error);
            });

    };



    return (
        <>
            {/* <div>

                <input placeholder="Enter email id" name='emailId' onChange={onMyChange} />

                <button onClick={changeData} style={{ marginTop: 10, alignSelf: "center" }} >Click Me</button>
                <p>{values.userId}</p>
            </div> */}

            <div>
                <Snackbar open={openNew} autoHideDuration={6000} onClose={handleCloseNew}>
                    <Alert onClose={handleCloseNew} severity="success">
                        Hotel Successfully Added
                    </Alert>
                </Snackbar>



                <h1 style={{ textAlign: 'center' }}>Hotel Table</h1>
                <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{}}>
                    Add More Hotel
                </Button>
                <Dialog open={open}  aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Fill the hotel details you want to add.</DialogTitle>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Hotel Name"
                            type="text"
                            required
                            fullWidth
                            value={hotel.name}
                            onChange={changeFun}
                            name="name"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="address"
                            label="Address"
                            type="text"
                            required
                            fullWidth
                            value={hotel.address}
                            onChange={changeFun}
                            name="address"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="price"
                            label="Price"
                            type="text"
                            required
                            fullWidth
                            value={hotel.price}
                            onChange={changeFun}
                            name="price"
                            placeholder="EX: 1000"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="features"
                            label="Features"
                            type="text"
                            required
                            fullWidth
                            value={hotel.features}
                            onChange={changeFun}
                            name="features"
                            placeholder="Ex: Air conditioning,Dining area,Housekeeping,etc"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="types"
                            label="Types"
                            type="text"
                            required
                            fullWidth
                            value={hotel.types}
                            onChange={changeFun}
                            name="types"
                            placeholder="Ex: Non-smoking rooms,Suites,Family rooms,etc"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="image"
                            label="Image URL"
                            required
                            fullWidth
                            value={hotel.image}
                            onChange={changeFun}
                            name="image"
                            placeholder="Ex: http://imagesource/image"
                        />

                      


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                     </Button>
                        <Button onClick={addHotel} color="primary">
                            Add
                     </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <br></br>

            {/* ================================================Table================================================= */}

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {/* <StyledTableCell align="left">Id</StyledTableCell> */}
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Address</StyledTableCell>
                            <StyledTableCell align="left">Price (RS)</StyledTableCell>
                            <StyledTableCell align="left">Features</StyledTableCell>
                            <StyledTableCell align="left">Types</StyledTableCell>
                            <StyledTableCell align="left">Image URL</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                            {/* <StyledTableCell align="left">Remove</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeData.map((row) => (
                            <StyledTableRow >
                                {console.log(row.IDnew)}
                                {/* <StyledTableCell align="left">{row.id}</StyledTableCell> */}
                                <StyledTableCell align="left"><b>{row.name}</b></StyledTableCell>
                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}/-</StyledTableCell>
                                <StyledTableCell align="left">{row.features}</StyledTableCell>
                                <StyledTableCell align="left">{row.types}</StyledTableCell>
                                <StyledTableCell align="left">{row.image}</StyledTableCell>
                                {/* <button onClick={() => navfun(row.id)} style={{ marginTop: 10 }}>Edit</button> */}
                                {/* <button onClick={() => navfun(row.id)} style={{ marginTop: 10 }}>Remove</button> */}

                                <IconButton aria-label="edit" onClick={() => editfun(row)} style={{ marginTop: 10 ,color:'blue'}}>
                                    <EditIcon />
                                </IconButton>

                                <IconButton aria-label="delete" onClick={() => delfun(row.idnew)} style={{ marginTop: 10, color: 'red'}}>
                                    <DeleteIcon />
                                </IconButton>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* ==============================================================Edit Hotel================================================================ */}
            
            <Dialog open={openEditor} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Choose the field  you want to add.</DialogTitle>
                <DialogContent>



                    <FormControl variant="outlined" className={classes.input} style={{width:500}}>
                        <InputLabel id="demo-simple-select-outlined-label">Choose</InputLabel>
                        <Select
                            // labelId="demo-simple-select-outlined-label"
                            id="choose"

                            label="choose"
                            onChange={handleChange,changeFunEdit}
                            value={editHotel.choose}
                            name="choose"
                            

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='name'>Name</MenuItem>
                            <MenuItem value='address'>Address</MenuItem>
                            <MenuItem value='price'>Price</MenuItem>
                            <MenuItem value='features'>Features</MenuItem>
                            <MenuItem value='types'>Types of room</MenuItem>
                            <MenuItem value='image'>Image url</MenuItem>
                           
                        </Select>

                    </FormControl>
                    <br></br> <br></br> 


                    {
                        editHotel.choose==='name'?

                    <>

                    {/* <p>
                        <b>Previous Hotel Name :</b>
                        {editHotel.name}
                     </p> */}
                    <TextField
                        variant="outlined"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Hotel Name"
                        type="text"
                        required
                        fullWidth
                        value={editHotel.name}
                        onChange={changeFunEdit}
                        name="name"
                    />
                    </>
                            : editHotel.choose === 'address' ?

                    <TextField
                        autoFocus
                        margin="dense"
                        variant="outlined"
                        id="address"
                        label="Address"
                        type="text"
                        required
                        fullWidth
                        value={editHotel.address}
                        onChange={changeFunEdit}
                        name="address"
                    />
                                : editHotel.choose === 'price' ?
                    <TextField
                        autoFocus
                        margin="dense"
                        variant="outlined"
                        id="price"
                        label="Price"
                        type="text"
                        required
                        fullWidth
                        value={editHotel.price}
                        onChange={changeFunEdit}
                        name="price"
                    />
                                    : editHotel.choose === 'features' ?
                    <TextField
                        autoFocus
                        margin="dense"
                        variant="outlined"
                        id="features"
                        label="Features"
                        type="text"
                        required
                        fullWidth
                        value={editHotel.features}
                        onChange={changeFunEdit}
                        name="features"
                    />
                                    : editHotel.choose === 'types' ?
                    <TextField
                        autoFocus
                        margin="dense"
                        variant="outlined"
                        id="types"
                        label="Types"
                        type="text"
                        required
                        fullWidth
                        value={editHotel.types}
                        onChange={changeFunEdit}
                        name="types"
                    />
                                    : editHotel.choose === 'image' ?
                    <TextField
                        autoFocus
                        margin="dense"
                        variant="outlined"
                        id="image"
                        label="Image URL"
                        required
                        fullWidth
                        value={editHotel.image}
                        onChange={changeFunEdit}
                        name="image"
                    />
                            : []

                        }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={update} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        
        
        </>
    );

}
