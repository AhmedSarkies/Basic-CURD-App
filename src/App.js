import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light sidebar p-3">
            <Sidebar />
          </div>
          <div className="col-10 p-3">Home Page</div>
        </div>
      </div>
    </div>
  );
}

export default App;
