import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const url_api = "http://localhost:9000/products";
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState({ rate: 0, count: 0 });

  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url_api, {
        title,
        price,
        description,
        category,
        image,
        rating,
      })
      .then(() => navigate("/products"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={formSubmit}>
        <div className="mt-5 mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter The Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Enter The Category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter The Price"
            step={0.01}
            onChange={(e) => {
              setPrice(parseFloat(e.target.value));
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter The Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter The Image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rate" className="form-label">
            Rate
          </label>
          <input
            type="number"
            className="form-control"
            id="rate"
            placeholder="Enter The Rate"
            step={0.01}
            onChange={(e) => {
              setRating({ ...rating, rate: parseFloat(e.target.value) });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberRate" className="form-label">
            Number Of Rate
          </label>
          <input
            type="number"
            className="form-control"
            id="numberRate"
            placeholder="Enter The Number Of Rate"
            step={0.01}
            onChange={(e) => {
              setRating({ ...rating, count: parseInt(e.target.value) });
            }}
          />
        </div>
        <div className="mt-4 mb-5">
          <button className="btn btn-success">Add Product</button>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
