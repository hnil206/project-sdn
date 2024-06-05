import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal"; // Import modal component
import Button from "react-bootstrap/Button"; // Import button component
import "../css/index.css";

import { Link } from "react-router-dom";

function ListProduct() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedTaskId, setSelectedTaskId] = useState(""); // State to store selected task ID

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("http://localhost:3001/task")
      .then((response) => {
        const visibleTasks = response.data.filter(task => !task.isDeleted);
        setTasks(visibleTasks);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const handleDelete = (id) => {
    setSelectedTaskId(id); // Set the selected task ID
    setShowModal(true); // Show the modal
  };

  const confirmDelete = () => {
    axios
      .put(`http://localhost:3001/task/delete/${selectedTaskId}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== selectedTaskId));
        setShowModal(false); // Hide the modal after deleting
      })
      .catch((error) => {
        console.error("There was an error marking the task as deleted!", error);
      });
  };

  return (
    <Container className="mt-5">
      <Link to={`/task/create`}>
        <Button>Add Product</Button>
      </Link>
      <h2 className="text-center mb-4">Product List</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th className="description-column">Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td className="description-column">{task.description}</td>
              <td>{task.price}$</td>
              <td>{task.stock}</td>
              <td className="d-flex justify-content-center align-items-center">
                <div className="d-flex">
                  <Link
                    className="btn btn-primary mx-1"
                    to={`/task/update/${task._id}`}
                  >
                    Sửa
                  </Link>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleDelete(task._id)}
                  >
                    Xóa
                  </button>
                  <Link to={`/task/${task._id}`} className="btn btn-success mx-1">
                    Chi tiết
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for confirmation */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ListProduct;
