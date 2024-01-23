// IndustrialDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { industrialItemsData } from '../productdata';

const IndustrialDetail = () => {
  const { id } = useParams();
  const [industrialData, setIndustrialData] = useState(null);

  useEffect(() => {
    const foundIndustrialProduct = industrialItemsData.find((item) => item.id === parseInt(id, 10));

    if (foundIndustrialProduct) {
      setIndustrialData(foundIndustrialProduct);
    } else {
      console.log("Industrial Product not found");
    }
  }, [id]);

  if (!industrialData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product_detail">
      <div className='product_detail_left'>
        <h3>{industrialData.name}</h3>
        <p>Price: {industrialData.price}</p>
        <p>Description: {industrialData.description}</p>
      </div>
      <div className="product_detail_right">
        <img src={industrialData.image} alt={industrialData.name} />
      </div>
    </div>
  );
};

export default IndustrialDetail;
