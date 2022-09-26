import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

export default function Booking() {

    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect1 = () => {
        if (localStorage.getItem('login') === 'true'){
            history.push('/HotelBooking')
        }
        else{history.push('/Login')}
        
    };

    const handleSelect2 = () => {
        if (localStorage.getItem('login') === 'true') {
            history.push('/Package')
        }
        else { history.push('/Login') }
        
        
    };


    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'white',fontSize:16}}>
                Booking
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
               
            >
                <MenuItem onClick={handleSelect1} style={{ background: '#c5f7d7' }}>HOTELS</MenuItem>
                -------------------
                <MenuItem onClick={handleSelect2} style={{ background: '#c5f7d7' }}>PACKAGES</MenuItem>
               
            </Menu>
        </div>
    );
}
