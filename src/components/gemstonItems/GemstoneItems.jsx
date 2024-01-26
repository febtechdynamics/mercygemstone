// GemstoneItems.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { itemsData } from '../productdata';
import './gemstonItem.css';

const GemstoneItems = () => {
  
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className='gemstone_container'>
      <h1 className='gemstone_title'>Gemstone</h1>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        responsive={responsive}
      >
        {itemsData.map((item) => (
          <div key={item.id} className='single_item'>
            <img className='gemstone_image' src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              <Link className='btn-mod' to={`/gemstone/${item.id}`}>
                See More
              </Link>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GemstoneItems;
