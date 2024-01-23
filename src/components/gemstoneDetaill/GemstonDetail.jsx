// GemstoneDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemsData } from '../productdata';
import "./productdetail.css";

const GemstoneDetail = () => {
  const { id } = useParams();
  const [gemstoneData, setGemstoneData] = useState(null);

  useEffect(() => {
    const foundGemstone = itemsData.find((item) => item.id === parseInt(id, 10));

    if (foundGemstone) {
      setGemstoneData(foundGemstone);
    } else {
      console.log("Gemstone not found");
    }
  }, [id]);

  if (!gemstoneData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product_detail">
      <div className='product_detail_left'>
        <h3>{gemstoneData.name}</h3>
        <p>Price: {gemstoneData.price}</p>
        <p>Description: {gemstoneData.description}</p>
      </div>
      <div className="product_detail_right">
        <img src={gemstoneData.image} alt={gemstoneData.name} />
      </div>
    </div>
  );
};

export default GemstoneDetail;
