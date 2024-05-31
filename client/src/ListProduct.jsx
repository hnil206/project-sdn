import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./css/index.css";
import { Link } from "react-router-dom";

function ListProduct() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/task")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Product List</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th >STT</th>
            <th >Name</th>
            <th  className="description-column">Description</th>
            <th > Price</th>
            <th >Stock</th>
            <th>action</th>
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
                    href="#"
                    role="button"
                    to={`/task/update/${task._id}`}
                  >
                    Sửa
                  </Link>
                  <Link
                    className="btn btn-danger mx-1"
                    data-toggle="modal"
                    data-target="#delete-club-modal"
                    data-id=""
                    href="#"
                    role="button"
                  >
                    Xóa
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListProduct;
