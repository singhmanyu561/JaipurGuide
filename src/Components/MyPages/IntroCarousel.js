import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel'
// import CarouselData from './CarouselData'


export class IntroCarousel extends Component {

    render() {

        
        
        return (
            <div>
               
                <div className='container-fluid' style={{ marginTop: 20, width: '80%', borderRadius: 20 }} >
                  
                   
                         <Carousel style={{}}>

                        {this.props.obj.map((data, i) => (
                            <Carousel.Item style={{ 'height': "500px"}} key={i} >
                                <img style={{ 'height': "500px" ,border:"2px solid white",opacity:1,borderRadius:20}}
                                    className="d-block w-100"
                                    src={data.source}
                                    alt={data.alter}
                                    />
                                <Carousel.Caption>
                                    <h3>{data.caption}</h3>
                                </Carousel.Caption>
                            </Carousel.Item >
                       

                    ))}
                    </Carousel>


                   

                </div>
            </div>
            
        )
    }
}

export default IntroCarousel;