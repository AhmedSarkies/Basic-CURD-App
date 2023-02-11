import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  let { productID } = useParams();
  const url_api = "http://localhost:9000/products";
  const [product, setProduct] = useState([]);
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [rating, setRating] = useState({ rate: 0, count: 0 });
//   let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${url_api}/${productID}`)
      .then((res) => {
        setProduct(res.data);
      });
    // editProduct();
  }, []);
//   const editProduct = (e) => {
//     axios
//       .put(`${url_api}/${productID}`, {
//         title,
//         price,
//         description,
//         category,
//         image,
//         rating,
//       })
//       .then(() => navigate("/products"));
//   };
  return (
    <div className="text-center">
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <h3>{product.description}</h3>
    </div>
  );
}

export default EditProduct;
