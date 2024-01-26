// IndustrialItems.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { industrialItemsData } from '../productdata';
import './industrialItem.css';

const IndustrialItems = () => {
  return (
    <div className='industrial_container'>
      <h1 className='industrial_title'>Industrial Material</h1>
      <div className='industrial_material_container'>
        <div className='item-container'>
          {industrialItemsData.map((item) => (
            <Link key={item.id} to={`/industrial/${item.id}`} className='industrial_item'>
              <img className='industrial_material_image' src={item.image} alt={item.name} />
              <div className='industrial_hover'>
                <p>View Details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrialItems;

