import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <Link className="btn btn-success mt-5" to={"/products/add"}>
        Add New Product
      </Link>
      <table className="table table-striped mt-4 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Price</td>
            <td>
              <button className="btn btn-danger btn-sm m-2">Delete</button>
              <Link className="btn btn-info btn-sm m-2" to={"/products/view"}>
                View
              </Link>
              <Link
                className="btn btn-primary btn-sm m-2"
                to={"/products/edit"}
              >
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Products;
