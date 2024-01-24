// IndustrialDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { industrialItemsData } from '../productdata';

const IndustrialDetail = () => {
  const { id } = useParams();


// useEffect(() => {
// 	fetch("http://localhost:3000/products")
// 		.then((res) => res.json())
// 		.then((products) => {
// 			const productList = products.products;
// 			const industrialData = productList.filter(
// 				(product) => product.product_url === productID
// 			);
// 			setIndustrialData(industrialData);
// 		})
// 		.catch(() => console.log("Error: unable to fetch!!"));
// }, [productID]);

// useEffect(() => {
//   axios.get("http://localhost:3000/products")
//     .then((response) => {
//       const productList = response.data.products;
//       const industrialData = productList.filter(
//         (product) => product.product_url === productID
//       );
//       setIndustrialData(industrialData);
//     })
//     .catch((error) => {
//       console.error("Error: unable to fetch!!", error);
//     });
// }, [productID]);


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


