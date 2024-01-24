// GemstoneList.jsx

import React, { useEffect, useState } from "react";
import { itemsData } from "../productdata"; // Import as a named export

function GemstoneList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(itemsData);
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper font-weight-bold">Gemstones</div>
              <div className="brief-description">Beautiful gemstones for every occasion.</div>
            </div>
          </div>
          {products?.map(({ id, name, image, price, description }, index) => {
            const productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${index % 2 === 0 ? 1 : 2}`}>
                  <div className="product-title">{name}</div>
                  <div className="product-description">{description}</div>
                  <div className="price">{`Price: ${price}`}</div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${index % 2 === 0 ? 2 : 1}`}>
                  <div className="product-image">
                    <img src={image} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default GemstoneList;
