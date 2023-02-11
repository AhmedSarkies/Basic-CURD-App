import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewProduct() {
  let { productID } = useParams();
  const url_api = "http://localhost:9000/products";
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`${url_api}/${productID}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
  return (
    <>
        <div className="text-center">
          <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <h3>{product.description}</h3>
        </div>
    </>
  );
}

export default ViewProduct;
