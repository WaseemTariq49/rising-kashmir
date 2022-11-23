import React from 'react';
import '../styles/carousel.scss';
import Carousel from 'react-material-ui-carousel';
import Headings from'../assets/headings-carousel.json'


const Carousel1 = () => {
  return (
      <Carousel>
        {
          Headings.map((item, i)=>(
            <div className='carouselcontainer'>
              <h5 key={item.id}>{item.value}</h5>
            </div>
            
          ))
        }
      </Carousel>
  )
}

export default Carousel1;