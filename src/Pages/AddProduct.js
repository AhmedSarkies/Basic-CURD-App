function AddProduct() {
  return (
    <>
      <h1>Add Product</h1>
      <div className="mt-5 mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter The Title"
        />
      </div>
      <div className="mb-3">
        <label for="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Enter The Category"
        />
      </div>
      <div className="mb-3">
        <label for="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Enter The Price"
          step={0.01}
        />
      </div>
      <div className="mb-3">
        <label for="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          placeholder="Enter The Description"
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="image" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          placeholder="Enter The Image"
        />
      </div>
      <div className="mb-3">
        <label for="rate" className="form-label">
          Rate
        </label>
        <input
          type="number"
          className="form-control"
          id="rate"
          placeholder="Enter The Rate"
          step={0.01}
        />
      </div>
      <div className="mb-3">
        <label for="numberRate" className="form-label">
          Number Of Rate
        </label>
        <input
          type="number"
          className="form-control"
          id="numberRate"
          placeholder="Enter The Number Of Rate"
          step={0.01}
        />
      </div>
      <div className="mt-4 mb-5">
        <button className="btn btn-success">Add Product</button>
      </div>
    </>
  );
}

export default AddProduct;
