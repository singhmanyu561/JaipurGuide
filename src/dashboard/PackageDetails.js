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

import { packageDatafromplaceholder } from '../Action/PackageAction'


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


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

export default function PackageDetails() {
    const classes = useStyles();
    let history = useHistory();

    // const [values, setValues] = useState({header: ""})

    const [pack, setPack] = useState({
        header: '',
        duration: '',
        inclusion: '',
        description: '',
        price:'',
        image:''
    })

    const [editPackage, setEditPackage] = useState({
        id: '',
        header: '',
        duration: '',
        inclusion: '',
        description: '',
        price: '',
        image: '',
        choose: ''
    })

    const [open, setOpen] = useState(false);
    const [openEditor, setOpenEditor] = useState(false);

    const dispatch = useDispatch()

    const storeData = useSelector((state) =>


        state.PackageReducer.data && state.PackageReducer.data.length && Array.isArray(state.PackageReducer.data) ?
            state.PackageReducer.data : []

    );




    // console.log(arr)



    useEffect(() => {

        dispatch(packageDatafromplaceholder())





    }, []);


    const delfun = (x) => {
        const obj = {
            "header": x
        }

        Axios.post('http://localhost:7000/delete_package', obj)
            .then(function (response) {
                console.log(response.data);
                if (response.data === "package deleted successfully") {
                    alert("package removed")
                    history.go()
                    // history.push("#hotelDetails")
                }

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const editfun = (x) => {

        console.log(x.id)

        setOpenEditor(true)
        setEditPackage({ ...editPackage, ['id']: x.id, ['header']: x.header, ['duration']: x.duration, ['inclusion']: x.inclusion, ['description']: x.description, ['price']: x.price, ['image']: x.image })


    }

    const changeFunEdit = (e) => {


        setEditPackage({ ...editPackage, [e.target.name]: e.target.value })
    }

    // const handleCloseNew = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpenNew(false);
    // };



    const update = () => {

        var val = ''

        if (editPackage.choose === 'header') { val = editPackage.header }
        else if (editPackage.choose === 'duration') { val = editPackage.duration }

        else if (editPackage.choose === 'inclusion') { val = editPackage.inclusion }

        else if (editPackage.choose === 'description') { val = editPackage.description }

        else if (editPackage.choose === 'price') { val = editPackage.price }

        else if (editPackage.choose === 'image') { val = editPackage.image }




        const obj = {

            first: editPackage.choose,
            second: val,
            third: editPackage.id
        }

        Axios.post('http://localhost:7000/update_package', obj)
            .then(function (response) {
                if (response.data === "Package edited successfully") {
                    alert("Package Edited")
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
        setEditPackage({ ...editPackage, ['id']: '', ['header']: '', ['duration']: '', ['inclusion']: '', ['description']: '', ['price']: '', ['image']: '', ['choose']: '' })
    };

    const changeFun = (event) => {
        setPack({ ...pack, [event.target.name]: event.target.value })
    }

    const addPackage = (event) => {

        event.preventDefault();

        var addPack = {
            header: pack.header,
            duration: pack.duration,
            inclusion: pack.inclusion,
            description: pack.description,
            price: pack.price,
            image: pack.image
        }

        Axios.post('http://localhost:7000/package', addPack)
            .then((response) => {
                console.log(response);

                setPack({ ...pack, ['header']: "", ['duration']: "", ['inclusion']: "", ['description']: "", ['price']: "", ['image']: ""});

                alert("Package Successfully Added")
                history.go()

            })
            .catch(function (error) {
                console.log(error);
            });
        
        setOpen(false);
    };


    return (
        <>
            {/* <div>

                <input placeholder="Enter email id" name='emailId' onChange={onMyChange} />

                <button onClick={changeData} style={{ marginTop: 10, alignSelf: "center" }} >Click Me</button>
                <p>{values.userId}</p>
            </div> */}

            <div>
                <h1 style={{ textAlign: 'center' }}>Package Table</h1>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add More Package
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Fill the package details you want to add.</DialogTitle>
                    <DialogContent>
                       
                        <TextField
                            autoFocus
                            margin="dense"
                            id="header"
                            label="Package"
                            type="text"
                            fullWidth
                            multiline
                            required
                            value={pack.header}
                            onChange={changeFun}
                            name="header"
                            placeholder="Ex: 5"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="duration"
                            label="Duration"
                            type="text"
                            fullWidth
                            multiline
                            required
                            value={pack.duration}
                            onChange={changeFun}
                            name="duration"
                            placeholder="Ex: 5D/4N"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="inclusion"
                            label="Inclusion"
                            type="text"
                            fullWidth
                            multiline
                            required
                            value={pack.inclusion}
                            onChange={changeFun}
                            name="inclusion"
                            placeholder="Ex: Meals+Guide+Travels+etc"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            multiline
                            required
                            value={pack.description}
                            onChange={changeFun}
                            name="description"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="price"
                            label="Price"
                            type="text"
                            fullWidth
                            multiline
                            required
                            value={pack.price}
                            onChange={changeFun}
                            name="price"
                            placeholder="Ex: 2000"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="image"
                            label="Image URL"
                            type="text"
                            fullWidth
                            multiline
                            required
                            value={pack.image}
                            onChange={changeFun}
                            name="image"
                            placeholder="Ex: http://imagesource/image"
                        />

                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={addPackage} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <br></br>


            {/* =======================================Table================================================ */}

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {/* <StyledTableCell align="left">Id</StyledTableCell> */}
                            <StyledTableCell align="left">Package</StyledTableCell>
                            <StyledTableCell align="left">Duration</StyledTableCell>
                            <StyledTableCell align="left">Inclusion</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left">Price (RS)</StyledTableCell>
                            <StyledTableCell align="left">Image URL</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeData.map((row, i) => (
                            <StyledTableRow key={i}>
                                {/* <StyledTableCell align="left">{row.id}</StyledTableCell> */}
                                <StyledTableCell align="left"><b>JAIPUR TOUR PACKAGES FOR {row.header} DAYS</b></StyledTableCell>
                                <StyledTableCell align="left">{row.duration}</StyledTableCell>
                                <StyledTableCell align="left">{row.inclusion}</StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}/-</StyledTableCell>
                                <StyledTableCell align="left">{row.image}</StyledTableCell>
                                {/* <button onClick={() => navfun(row.name)} style={{ marginTop: 10 }}>Edit</button>
                                <button onClick={() => navfun(row.header)} style={{ marginTop: 10 }}>Remove</button> */}

                                <IconButton aria-label="edit" onClick={() => editfun(row)} style={{ marginTop: 20 ,color:'blue'}}>
                                    <EditIcon />
                                </IconButton>

                                <IconButton aria-label="delete" onClick={() => delfun(row.header)} style={{ marginTop: 10 ,color:'red'}}>
                                    <DeleteIcon />
                                </IconButton>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* ==============================================================Edit Hotel================================================================ */}

            <Dialog open={openEditor} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Choose the field  you want to edit.</DialogTitle>
                <DialogContent>



                    <FormControl variant="outlined" className={classes.input} style={{ width: 500 }}>
                        <InputLabel id="demo-simple-select-outlined-label">Choose</InputLabel>
                        <Select
                            // labelId="demo-simple-select-outlined-label"
                            id="choose"

                            label="choose"
                            onChange={changeFunEdit}
                            value={editPackage.choose}
                            name="choose"


                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='header'>No of days</MenuItem>
                            <MenuItem value='duration'>Duration</MenuItem>
                            <MenuItem value='inclusion'>Inclusion</MenuItem>
                            <MenuItem value='description'>Description</MenuItem>
                            <MenuItem value='price'>Price</MenuItem>
                            <MenuItem value='image'>Image url</MenuItem>

                        </Select>

                    </FormControl>
                    <br></br> <br></br>


                    {
                        editPackage.choose === 'header' ?

                            <>

                                {/* <p>
                        <b>Previous Hotel Name :</b>
                        {editPackage.name}
                     </p> */}
                                <TextField
                                    variant="outlined"
                                    autoFocus
                                    margin="dense"
                                    id="header"
                                    label="Days"
                                    type="text"
                                    required
                                    fullWidth
                                    value={editPackage.header}
                                    onChange={changeFunEdit}
                                    name="header"
                                />
                            </>
                            : editPackage.choose === 'duration' ?

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    variant="outlined"
                                    id="duration"
                                    label="Duration"
                                    type="text"
                                    required
                                    fullWidth
                                    value={editPackage.duration}
                                    onChange={changeFunEdit}
                                    name="duration"
                                />
                                : editPackage.choose === 'inclusion' ?
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        variant="outlined"
                                        id="inclusion"
                                        label="Inclusion"
                                        type="text"
                                        required
                                        fullWidth
                                        value={editPackage.inclusion}
                                        onChange={changeFunEdit}
                                        name="inclusion"
                                    />
                                    : editPackage.choose === 'description' ?
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            variant="outlined"
                                            id="description"
                                            label="Description"
                                            type="text"
                                            required
                                            fullWidth
                                            value={editPackage.description}
                                            onChange={changeFunEdit}
                                            name="description"
                                        />
                                        : editPackage.choose === 'price' ?
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                variant="outlined"
                                                id="price"
                                                label="Price"
                                                type="text"
                                                required
                                                fullWidth
                                                value={editPackage.price}
                                                onChange={changeFunEdit}
                                                name="price"
                                            />
                                            : editPackage.choose === 'image' ?
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    variant="outlined"
                                                    id="image"
                                                    label="Image URL"
                                                    required
                                                    fullWidth
                                                    value={editPackage.image}
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
