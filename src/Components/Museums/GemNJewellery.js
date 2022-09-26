import React from 'react';
import Footer from '../MyPages/Footer'
import SearchAppBar from '../MyPages/SearchAppBar'
import SearchAppBarLogout from '../MyPages/SearchAppBarLogout'

import Carousel from '../MyPages/IntroCarousel'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OtherMuseums from './OtherMuseums'
import SendMessage from '../MyPages/Contact2'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex', margin: 0
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

const GemNJewellery = () => {

    const classes = useStyles();

    const CarouselData = [

        {
            source: 'https://www.jewelrycult.com/images/photos/museo-del-gioiello.jpg',
            alter: "Slide 1",
            caption: "First Demo"

        },

        {
            source: 'https://www.thefrenchjewelrypost.com/content/uploads/2015/12/WORLD-JEWELLERY-MUSEUM-Necklace-Gallery.jpg',
            alter: "Slide 2",
            caption: "Second Demo"

        },

        {
            source: 'https://artjewelryforum.org/sites/default/files/images2015/curators/eveline-holsappel/content/cuintevalineholsappel600px01.jpg',
            alter: "Slide 3",
            caption: "Third Demo"

        },

        {
            source: 'https://www.rajasthandirect.com/wp-content/uploads/2018/05/gem-museum.jpg',
            alter: "Slide 4",
            caption: "Fourth Demo"

        },

        {
            source: 'http://www.relaissantacorona.it/wp-content/blogs.dir/3/files/2015/12/museo-del-gioiello-a-Vicenza.jpg',
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
                        <h1 style={{ color: 'red' }}>Museum of Gem and Jewellery</h1>
                        <h5>Address: Rajasthan Chamber Bhawan, MI Road, Ashok Nagar, Jaipur, Rajasthan 302003</h5>
                        <br></br>
                        <p>Museum of Gem and Jewellery is located on the first floor of Rajasthan Chamber Bhawan. It is sponsored by Jewellers from Jaipur in New York, supported by Rajasthan Chamber of Commerce & Industry, and is in partnership with Resurgent Rajasthan and Tourism Department.
                        The various galleries in the museum display precious and semiprecious gemstones, beads with description of quality, characteristics and details of the related rough stones like quartz, agate, jade, garnet, and peridot.
                        Tools of trade which give raw materials (rough stones) their shape are displayed in the museum. When juxtaposed, they give a sense of their development through ages. On display, are also photos of famous stones of the world and information about all the important objects of the world carved from these stones. In its varied collection there’s also a dinosaur egg, various types of fossils, a section for African rough stones, idols of the nine planets, gold, and diamond. There are separate sections for kundan meena, stone jewellery, and silver.
                        The mini-theatre of the museum plays a video presentation for the visitors. The museum also has a rental-sales section where exhibitors are able to sell their products by booking the space for their required time period.
                        </p>
                        <br></br>
                        <Carousel obj={CarouselData} />
                        <br></br>
                        <h2>Theme of the museum</h2>
                        <br></br>
                        <p>This museum shares “The Story of a Stone”- a creation of nature and “Making of Jewellery”- a creation of human mind i.e. from mining to manufacturing, a sojourn from minerals to their transformation into gems – to their conversion into jewelry has been displayed beautifully here.
                        Jaipur has been a leading center for gems and jewelry in the country and is globally known for its fine gem cutting and polishing, along with jewelry craftsmanship, especially ‘Kundan-Meena’ and gemstone jewelry.
                        The Museum, only of its kind in the country fully dedicated to gems and jewelry, showcases this very heritage and legacy of Jaipur in its pure form leaving behind the footprints of our forefathers.
                        About 60+ sections explain the journey of a stone from the mine to fine-crafted jewelry. The journey begins from the entry itself, which graphically represents the process from mining to manufacturing, with a picture of old and new Johari Bazar- a dedicated street for the trade for over the last 300 years, as the backdrop.
                        On stepping inside, the world of gemstones welcomes the visitors, showcasing hundreds of types of rough as well as cut and polished stones, illustrating how nature creates its own art with various colors and designs.
                        The display of a wide variety of colourful stones in their original forms and their finished products, including rare and newer stones, is definitely a learning experience.
                        Visitors can delve deep into the history by looking at a picture of traders attending their first auction in Jaipur in the year 1948, along with the story of trade development scripted in chronological order from 1727 with a running video. Check out the world’s love for gems & jewelry in postcards and stamps here.
                        Another fascinating section is “Navgrahas“-the nine planets. The “Navratan” wall has nine idols with nine stones representing the nine-planets, blessing the visitors with peace and prosperity. Beads and carvings section illustrates another dimension of craftsmen’s creativity.
                        The next highlight is Jaipur’s pride – the exquisite ‘kundan–meena’ jewellery. Embedded with coloured gemstones, kundan (pure gold), meena (enamel) and diamonds, the classic jewellery designs carved on gold and silver bespeak the story of unmatched and exclusive craftsmanship.
                        The museum displays and educates about the off-beat French-enamel,Victorian, Tanjore, Thewa and Fusion jewellery types.
                        Next are gold and diamond jewelry set with precious stones beautifully exhibited followed by silver, fashion, and costume jewelry. Visitors are wooed by the idea of creating jewelry made from materials like rope, leather, grass, clay, shell, plastic, watch parts, playing cards, stamps, etc.
                        The museum, a joint effort of Indian Jewellers from New York and Jaipur traders, will be a source of education and inspiration for younger generations. It is heartening to note that many gemstones and jewelry business houses and organizations including the Rajasthan chamber and many individual donors have joined in and gave a helping hand.
                        A bigger and better museum with a permanent set-up is in view, which management describes as”knowledge center for gems and jewelry” instead of a museum.
                        This museum is one of its kinds, which bespeak a story of extraordinary artistry, craftsmanship, and passion for the trade. Museum of Gem and Jewellery is sure to boost tourism and trade in the city and is indeed a valuable addition to the city’s rich heritage adding colors to the Pink city.
                        </p>
                        <h2>Opening Time</h2>
                        <p>10:00am to 05:30pm (Open All 7 Days)</p>

                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper2}>
                        <OtherMuseums />
                       
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

export default GemNJewellery;