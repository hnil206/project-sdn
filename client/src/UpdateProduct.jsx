import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./css/index.css";

function UpdateProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // Updated
  const [task, setTask] = useState({
    name: "",
    description: "",
    price: "",
    stock: ""
  });

  useEffect(() => {
    // Fetch the current product data
    axios
      .get(`http://localhost:3001/task/${id}`)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated product data to the server
    axios
      .put(`http://localhost:3001/task/update/${id}`, task)
      .then(() => {
        alert("Update successfully!");
        navigate("/"); // Navigate back to the product list page
      })
      .catch((error) => {
        console.error("There was an error updating the product!", error);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={task.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={task.stock}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
