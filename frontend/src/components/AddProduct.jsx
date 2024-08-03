import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "none",
  });
  const [filePath, setFilePath] = useState(null);

  const [categories, setCategories] = useState([]);
  const categoryApi = "http://localhost:3005/api/category/getcategory";
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(categoryApi);
      const data = await response.data;
      setCategories(data.categoryList);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    setProduct((preData) => ({ ...preData, [e.target.name]: e.target.value }));
  }

  const postCategoryApi = "http://localhost:3005/api/product/postproduct"

  async function handleSubmit(e) {
    e.preventDefault();
    const newFormData = new FormData()
    newFormData.append('name', product.name)
    newFormData.append('category', product.category)
    newFormData.append('price', product.price)
    newFormData.append('description', product.description)
    newFormData.append('image', filePath)

    try {
        const response = await axios.post(postCategoryApi, newFormData, {
          headers : {
            "Content-Type" : "Multipart/form-data"
          }
        })
        console.log(response)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  aria-label="product name"
                  aria-describedby="basic-addon1"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                >
                  <option value="none" disabled>
                    --Choose category--
                  </option>
                  {categories.length > 0 &&
                    categories.map((category, index) => (
                      <option key={index} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="price"
                  aria-label="price"
                  aria-describedby="basic-addon1"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                  aria-label="Image"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {setFilePath(e.target.files[0])}}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
