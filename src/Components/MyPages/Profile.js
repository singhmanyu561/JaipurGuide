import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root1: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginLeft:85,
        background:'#d923ea',
        fontSize:30

    },

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));


export default function Profile() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Booking Details', 'History', 'Wishlist'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['FAQs', 'Contact Us', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment >
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <div style={{ background: ' #f7b76f'}}>
                        <div className={classes.root1}>
                            <Avatar alt="Abhimanyu Singh" src="/static/images/avatar/1.jpg" className={classes.large}  />
                            <IconButton aria-label="edit" style={{ marginLeft: 145, marginTop: 80, height:35, width:35, color: 'white', background:'#7c9af4',position:'absolute'}}>
                                    <PhotoCamera />
                            </IconButton>
                            <br></br><br></br>
                           
                        </div>
                        <div style={{padding:20}}>
                                <h5 style={{ color: 'green' }}>Hello,<i> Abhimanyu Singh</i></h5>
                            <i style={{color:'blue'}}>singhmanyu561@gmail.com </i>
                            <IconButton aria-label="edit" style={{ marginTop: 0, color: '#6a6b63' }}>
                                <EditIcon />
                            </IconButton>
                            <br></br>
                            <i style={{ color: 'blue' }}>8521153455</i>
                                <IconButton aria-label="edit" style={{ marginTop: 0, color: '#6a6b63' }}>
                                <EditIcon />
                            </IconButton>
                        </div>
                        </div>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
