import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from '../assets/4.jpg';

function Services() {
  return (
    <div className='services'>

        <Carousel 
        infiniteLoop 
        autoPlay 
        showArrows={false}
        showStatus={false}
        interval={1000}
        showThumbs={false}
        >
            <div>
                <img src={img1} alt='Item1'/>
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt='Item2'/>
                <p className='legend'>Peer-to-peer Stack</p>
            </div>
        </Carousel>
    </div>
  );
}

export default Services;
