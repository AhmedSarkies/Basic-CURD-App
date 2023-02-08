import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-center mb-5">Home Page</h1>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {products.map((product) => {
            const { id, image, title, price, description, category } = product;
            return (
              <div className="card col-3 text-center p-3 m-3" key={id}>
                <div>
                  <img src={image} className="card-img-bottom" alt={title} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{title.slice(0, 25)}...</h4>
                  <p className="card-description">
                    {description.slice(0, 40)}...
                  </p>
                  <p className="card-category">{category.slice(0, 10)}...</p>
                  <p className="card-price">{price}$</p>
                </div>
                <Link to="products/details" className="btn btn-primary">
                  Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
