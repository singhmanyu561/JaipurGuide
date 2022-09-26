import React ,{useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as Phone } from "../Assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../Assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../Assets/svg/mail.svg";
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
   
   
}));

const Contact = ()=>{

    const classes = useStyles();

    const [msg, setMsg] = useState({
        name: '',
        email: '',
        message: ''
    })


    const fun = (event) => {
        setMsg({ ...msg, [event.target.name]: event.target.value })
    }

    const submitForm = (event) => {
        event.preventDefault();

        var sendMsg = {
            name: msg.name,
            email: msg.email,
            message: msg.message
        }

        

        Axios.post('http://localhost:7000/message', sendMsg)
            .then((response) => {
                console.log(response);

                setMsg({ ...msg, ['name']: "", ['email']: "", ['message']: "" });

                alert("Message Sent")
               

            })
            .catch(function (error) {
                console.log(error);
            });





    }

    
        return (
            <div className="subComponent-lg" id="contactBody" style={{ background: '#6d613c', width: '100%', opacity: 0.9, border: '2px solid white'}}>
                <Container>
                    <header className="headerTitle text-center" style={{ marginTop: 20, padding: 40, color:'white'}}>
                        <h1>Contact</h1>
                        <p>GET IN TOUCH WITH US</p>
                    </header>
                    <section className="svg-group text-center" style={{width:'auto'}}>
                        <Row>
                            <Col lg="4" md="4">
                                <div className="svg-card-3" style={{ padding: 8,color:'white'}}>
                                    <Phone width="50" height="55" strokeWidth="1" />
                                    <p style={{width:'auto'}}>911 014 5418</p>
                                </div>
                            </Col>
                            <Col lg="3" md="3">
                                <div className="svg-card-3" style={{ padding: 8, color: 'white' }}>
                                    <MapPin width="55" height="55" strokeWidth="1" />
                                    <p style={{ width: 'auto' }}>Jaipur City, Rajasthan</p>
                                </div>
                            </Col>
                            <Col lg="4" md="4">
                                <div className="svg-card-3" style={{ padding: 8, color: 'white' }}>
                                    <Mail width="50" height="55" strokeWidth="1" />
                                    <p style={{ width: 'auto' }}>abhisinghm789@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <hr />
                    <br />
                    <section className="msg text-center">
                        <form action="">
                            <Row>
                                <Col sm="6">
                                    <input
                                        className='inputID'
                                        type="text"
                                        name="name"
                                        id="inputID"
                                        placeholder="Your Name"
                                        required
                                        onChange={fun}
                                        value={msg.name}
                                        style={{width:'100%',margin:5,border:'2px solid white',padding:10,borderRadius:5,background:'#a0a0a0',color:'black'}}
                                    />
                                    <br />
                                    <input
                                        className='inputID'
                                        type="email"
                                        name="email"
                                        id="inputID"
                                        placeholder="Your email"
                                        required
                                        onChange={fun}
                                        value={msg.email}
                                        style={{ width: '100%', margin: 5, border: '2px solid white', padding: 10, borderRadius: 5, background: '#a0a0a0' }}
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        className='inputID'
                                        name="message"
                                        id="inputID"
                                        rows="4"
                                        placeholder="Your Message"
                                        onChange={fun}
                                        value={msg.message}
                                        style={{ width: '100%', margin: 5, border: '2px solid white', padding: 10, borderRadius: 5, background: '#a0a0a0' }}
                                    />
                                    
                                   
                                </Col>
                                
                            </Row>
                            <br></br>
                            <Row style={{display:'flex',justifyContent:'center'}}>
                            <Button outline color="light" className="float-left" style={{}} onClick={submitForm}>
                                Send Message
                            </Button>
                            </Row>
                            <br></br>
                        </form>
                    </section>
                </Container>
            </div>
        );
    }


export default Contact;
