import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import ViewProduct from "./Pages/ViewProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light sidebar p-3">
            <Sidebar />
          </div>
          <div className="col-10 p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="about" element={<About />} />
              <Route
                path="products"
                element={
                  <>
                    <Outlet />
                  </>
                }
              >
                <Route path="" element={<Products />} />
                <Route path="add" element={<AddProduct />} />
                <Route path="edit" element={<EditProduct />} />
                <Route path="view" element={<ViewProduct />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
