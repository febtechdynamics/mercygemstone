// Items.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { industrialItemsData, itemsData } from '../productdata';
import './items.css';

const Items = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='items'>
      <div className='items_container'>
        <h1 className='items_title'>Gemstone</h1>
        <Carousel
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  transitionDuration={500}
  responsive={responsive}
>
  {itemsData.map((item) => (
    <div key={item.id} className='single_iteme'>
      <Link to={`/product/${item.id}`} onClick={() => handleProductClick(item)}>
        <img className='items_image' src={item.image} alt={item.name} />
      </Link>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>
        <button>See More</button>
      </p>
    </div>
  ))}
</Carousel>

      </div>

      <div className='items_container'>
        <h1 className='items_title'>Industrial Material</h1>
        <div className='industrial_material_container'>
          <div className='flex-container'>
            {industrialItemsData.slice(0, 2).map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className='industrial_material_image'
                onClick={() => handleProductClick(item)}
              >
                <img className='industrial_material_image' src={item.image} alt={item.name} />
              </Link>
            ))}
          </div>
          <div className='flex-container'>
            {industrialItemsData.slice(2).map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className='industrial_material_image'
                onClick={() => handleProductClick(item)}
              >
                <img className='industrial_material_image' src={item.image} alt={item.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
