import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherMonuments from './OtherMonuments'
import SendMessage from '../MyPages/Contact2'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex', margin: 0,

    },
    paper1: {
        padding: theme.spacing(10),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        // width:1100,
        background: '#fcd0ae',
        color: 'black',
        opacity: 0.82,
        margin: 20,
        marginLeft: 50
    },

    paper2: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginLeft: 20,
        // width: 200,
        background: 'pink',
        opacity: 0.9,
        margin: 20
    },

    table: {
        // textAlign:'left'
    }
}));

const NahargarhFort = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://static.toiimg.com/photo/70190403.cms',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.rajasthantourplanner.com/images/Nahagarh-fort.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://i1.wp.com/thekarwaan.com/wp-content/uploads/2020/07/Nahargarh-Fort-View.jpg?resize=640%2C380&amp;ssl=1',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://image.shutterstock.com/image-photo/day-view-nahargarh-fort-jaipur-260nw-1295175073.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3w8xX_s65VUXyX6uVNFHEjurSMfVAeK3Iw&amp;usqp=CAU',
            alter: "Slide 5",
            caption: "Fifth Demo"

        },
    ]
    return (
        <>
            {
                localStorage.getItem('login') === 'true'
                    ?
                    <SearchAppBarLogout />
                    :
                    <SearchAppBar />
            }
            <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1567335991483-fc7088c63506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <div className={classes.root} >
                <Grid item xs={9}>
                    <Paper className={classes.paper1}>
                        <h1 style={{ color: 'red' }}>Nahargarh Fort</h1>
                        <h5>Address: Krishna Nagar, Brahampuri, Jaipur, Rajasthan 302002
                        </h5>
                        <br></br>
                        <h2>About Nahargarh Fort</h2>
                        <br></br>
                        <p>
                            Standing tall overlooking the city of Jaipur, Nahargarh Fort is a monumental edifice built by Sawai Madho Singh in the eighteenth century. The fort is situated on Cheel ka Teela (Hill of Eagles) and Nahargarh means “abode of tigers”. Nahargarh fort along with Amer Fort and Jaigarh Fort once formed a strong defense around the city of Jaipur. However, Nahargarh fort was also used as a summer retreat by the Jaipur kings considering that there are several palaces, temples and landscaped gardens within its complex. There is an extended wall at Nahargarh Fort which connects it to Jaigarh Fort.
                            <br /><br />
                            The Madhavendra Palace is the hotspot attraction at the fort which has an opulent suite for the king and nine suites for his concubines. The Madhavendra palace looks spellbindingly magnificent and the walls of the suites are intricately designed with delicate fresco paintings.
                             <br /><br />
                            Within the fort lies the famous Nahargarh Biological Park and a zoo that gives tourists a sneak peek into the wilderness of the regions like Asiatic lions and Bengal tigers. Another huge attraction is the Sculpture Park that has astounding pieces of sculpture on display at the Madhavendra Palace. The fort complex even has two restaurants that offer breathtaking views of the city below and serves zesty Indian cuisine.



                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>History of Nahargarh Fort</h2>
                        <br></br>
                        <p>
                            Nahargarh Fort was built by Maharaja Sawai Jai Singh in the year 1734. Interestingly, the fort was never attacked during the entire history. But, historical events in the eighteenth century like the signing of treaties with Maratha forces happened at the fort.
                            <br /><br />
                            The fort also has another intriguing history attached to it. During the construction of the fort, something things strange used to happen every single day; whatever was built during the day used to collapse at night. The King believed that the construction work was hindered by the restless spirit of Rathore prince, Nahar Singh Bhomia.
                             <br /><br />
                            So, based on the advice of astrologers, the king decided to build a temple devoted to him and also name the fort on his name to honor him. After doing so, the construction works of the fort went unhindered.

                        </p>
                        <br></br>
                        <h2>What Not to Miss at Nahargarh Fort:</h2>
                        <br></br>
                        <p>

                            <b>Nahargarh Biological Park:</b> Draped by dry deciduous and humid spike jungles, the Nahargarh Biological Park sprawls over 7.2 sq.km at the foot of the Aravalli mountain ranges. Granite and quartzite rocks dominate the terrain here. The animals that have made this park their home are Asiatic lions, Bengal tiger, and Indian leopard. The park also houses about 285 species of birds and the white-naped tit species is particular to this region. Spotting the birds is fairly easy at Ram Sagar within the park.
                             <br /><br />
                            So, if you are a wildlife photographer or an avid bird watcher, this biological park is a great place for you. Nahargarh Biological Park also houses a zoo where animals like Asiatic lions, Bengal tigers, panthers, hyenas, wolves, deer, crocodiles, sloth, Himalayan black bear, and wild boar can be seen in cages.
                             <br /><br />
                             <b>Sculpture Park: </b>The Madhavendra Palace inside the Nahargarh Fort has been converted into a mind-blowing sculpture gallery where flamboyant pieces of sculpture are put on display. The exquisite sculptures and the intricately adorned walls of the rooms in which they are displayed are a sheer delight to gaze at.

                        </p>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherMonuments />

                    </Paper>
                </Grid>
            </div>
            <SendMessage />
            <br></br>
            <Footer />
            </div>
        </>
    );
}

export default NahargarhFort;