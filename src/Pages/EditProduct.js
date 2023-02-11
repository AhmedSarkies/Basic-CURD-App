import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditProduct() {
  let { productID } = useParams();
  const url_api = "http://localhost:9000/products";
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState({ rate: 0, count: 0 });
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${url_api}/${productID}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const saveChanging = () => {
    axios
      .put(`${url_api}/${productID}`, {
        title,
        price,
        description,
        category,
        image,
        rate,
      })
      .then(() => navigate("/products"));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success").then(() => saveChanging());
      } else {
        Swal.fire("Changes are not saved", "", "info").then(() =>
          navigate("/products")
        );
      }
    });
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
            defaultValue={product.title}
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
            defaultValue={product.category}
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
            defaultValue={product.price}
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
            defaultValue={product.description}
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
            defaultValue={product.image}
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
            defaultValue={product.rating?.rate}
            onChange={(e) => {
              setRate({ ...rate, rate: parseFloat(e.target.value) });
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
            defaultValue={product.rating?.count}
            onChange={(e) => {
              setRate({ ...rate, count: parseInt(e.target.value) });
            }}
          />
        </div>
        <div className="mt-4 mb-5">
          <button className="btn btn-success">Save Editing</button>
        </div>
      </form>
    </>
  );
}

export default EditProduct;
