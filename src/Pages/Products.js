import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// https://api.escuelajs.co/api/v1/products ==> fake api
// https://fakestoreapi.com/products ==> fake api

function Products() {
  const url_api = "http://localhost:9000/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = (product) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `You won't be able to revert ${product.title}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons
            .fire("Deleted!", `${product.title} has been deleted.`, "success")
            .then(() => {
              axios
                .delete(`${url_api}/${product.id}`)
                .then(() => getAllProducts());
            });
        } else {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            `${product.title} is safe :)`,
            "error"
          );
        }
      });
  };

  const getAllProducts = () => {
    axios.get(url_api).then((res) => {
      setProducts(res.data);
    });
  };

  return (
    <>
      <h1 className="text-center">Products Page</h1>
      <Link className="btn btn-success mt-5" to={"/products/add"}>
        Add New Product
      </Link>
      <table className="table table-striped mt-4 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const { id, title, price, category } = product;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title.slice(0, 7)}</td>
                <td>{price}$</td>
                <td>{category.slice(0, 5)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => {
                      deleteProduct(product);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-info btn-sm m-2"
                    to={`/products/view/${id}?${title}?${category}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm m-2"
                    to={`/products/edit/${id}?=${title}?=${category}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
