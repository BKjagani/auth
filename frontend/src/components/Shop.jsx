import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Shop() {
  const [products, setProducts] = useState([]);

  const API = "http://localhost:3005/api/product/getproduct";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API);
      const data = await response.data;
      setProducts(data.productList);
      console.log(products);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={`http://localhost:3005/${product.image}`}  alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
