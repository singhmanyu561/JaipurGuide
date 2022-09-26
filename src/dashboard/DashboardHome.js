import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import { useHistory } from 'react-router-dom';

import UserDetails from './UserDetails'
import PackageDetails from './PackageDetails'
import HotelDetails from './HotelDetails'
import UserQuery from './UserQuery'
import BookedHotelDetails from './BookedHotelDetails';
import BookedPackageDetails from './BookedPackageDetails';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function DashboardHome() {

  let history = useHistory(); 

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [tabSelection,setTabSelection] = useState({
      'user':false,
      'hotel':false,
      'package1':false,
      'query':false,
      'bookedHotel':false,
      'bookedPackage':false
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSelectUserDetails = () => {
    setTabSelection({ ...tabSelection, ['user']: true, ['hotel']: false, ['package1']: false, ['query']: false, ['bookedHotel']: false, ['bookedPackage']: false})
  };

  const handleSelectHotelDetails = () => {
    setTabSelection({ ...tabSelection, ['hotel']: true, ['user']: false, ['package1']: false, ['query']: false, ['bookedHotel']: false, ['bookedPackage']: false})
  };

  const handleSelectPackageDetails = () => {
    setTabSelection({ ...tabSelection, ['package1']: true, ['hotel']: false, ['user']: false, ['query']: false, ['bookedHotel']: false, ['bookedPackage']: false})
  };

  const handleSelectUserQuery = () => {
    setTabSelection({ ...tabSelection, ['query']: true, ['hotel']: false, ['package1']: false, ['user']: false, ['bookedHotel']: false, ['bookedPackage']: false})
  };

  const handleSelectBookedHotel = () => {
    setTabSelection({ ...tabSelection, ['bookedHotel']: true, ['query']: false, ['hotel']: false, ['package1']: false, ['user']: false, ['bookedPackage']: false })
  };

  const handleSelectBookedPackage = () => {
    setTabSelection({ ...tabSelection, ['bookedPackage']: true,['bookedHotel']: false, ['query']: false, ['hotel']: false, ['package1']: false, ['user']: false})
  };


  const adminLogout = () => {

    if (localStorage.getItem('adminLogin')==='true') {

      localStorage.setItem('adminLogin',false)
     
      history.push('/Login')
    }

    


  }

  
  const back = () =>{
    history.go()
  }

  const login = () => {
    history.push('/Login')
  }

  return (

    <>
    {localStorage.getItem('adminLogin')==='true' ?
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>

          <Button className={classes.button} onClick={adminLogout}  style={{ backgroundColor: '#e5b9da', marginLeft: 20, position: 'absolute', right: 120, color: 'black' }} >Logout</Button>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{background:''}}>
          {/* {['Users', 'Hotels', 'Packages', 'Query'].map((text, index) => (
            <ListItem button key={text} onClick={handleSelect}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary='Users' />
            </ListItem>
          ))} */}


          <ListItem button  onClick={handleSelectUserDetails}>Users</ListItem>
          <ListItem button onClick={handleSelectHotelDetails}>Hotels</ListItem>
          <ListItem button onClick={handleSelectBookedHotel}>Booked Hotels</ListItem>
          <ListItem button onClick={handleSelectPackageDetails}>Packages</ListItem>
          <ListItem button onClick={handleSelectBookedPackage}>Booked Package</ListItem>
          <ListItem button onClick={handleSelectUserQuery}>Query</ListItem>

        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {
          tabSelection.user ? <UserDetails id="userDetails" /> : tabSelection.hotel ? <HotelDetails /> : tabSelection.package1 ? <PackageDetails /> : tabSelection.query ? <UserQuery /> : tabSelection.bookedHotel ? <BookedHotelDetails /> : tabSelection.bookedPackage ? <BookedPackageDetails />:
        
          <>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </>
        }
      </main>
    </div>
    : 

    []
    
    // <div style={{textAlign:'center'}}>

    //       <h1 style={{ color: 'red', marginTop: 200 }}>To access this page you need to login first.</h1>

    //       <Button className={classes.button} onClick={back} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >◀️ Back </Button>
    //       <Button className={classes.button} onClick={login} style={{ backgroundColor: '#e5b9da', color: 'black', margin: 20 }} >Login 🔑</Button>

    // </div>

   
    
    }
    </>
  );
}
