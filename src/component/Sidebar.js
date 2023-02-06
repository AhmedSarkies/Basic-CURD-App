import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link className="text-decoration-none fw-bold text-info" to="/">
            Get Home
          </Link>
        </li>
        <li>
          <Link
            className="text-decoration-none fw-bold text-info"
            to="products"
          >
            Get All Products
          </Link>
        </li>
        <li>
          <Link
            className="text-decoration-none fw-bold text-info"
            to="categories"
          >
            Get All Categories
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
