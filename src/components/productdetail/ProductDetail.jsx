// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemsData, industrialItemsData } from '../productdata';
import "./productdetail.css"


const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const foundProduct = itemsData.find((item) => item.id === parseInt(id, 10));

    if (foundProduct) {
      setProductData(foundProduct);
    } else {
      const foundIndustrialProduct = industrialItemsData.find((item) => item.id === parseInt(id, 10));

      if (foundIndustrialProduct) {
        setProductData(foundIndustrialProduct);
      } else {
        console.log("Product not found");
      }
    }
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product_detail">
      <div className='product_detail_left'>
        <h2>{productData.name}</h2>
        <p>Price: {productData.price}</p>
        <p>Description: {productData.description}</p>
      </div>
        <div className="product_detail_right">
          <img src={productData.image} alt={productData.name} />
        </div>
    </div>
  );
};

export default ProductDetail;

