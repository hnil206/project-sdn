import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {

  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    // Lấy danh sách sản phẩm từ API
    axios
      .get("http://localhost:3001/task")
      .then((response) => {
        // Lọc những sản phẩm có isDeleted: false
        const filteredProducts = response.data.filter(
          (product) => !product.isDeleted
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="bg-light py-5 text-center">
        <h1>Welcome to Our Online Shop</h1>
        <p>Discover our collection of products at the best prices.</p>
        <Button variant="primary" href="#shop">
          Shop Now
        </Button>
      </div>

      {/* Product List */}
      <Container className="my-5">
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={3} className="mb-4">
              <Card>
                <Link to={`/task/${product._id}`}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3001/uploads/${product.image}`}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}$</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link>
                      <Button variant="primary">Add to Cart</Button>
                    </Link>
                    <Link to={`/task/${product._id}`}>
                      <Button variant="primary">Detail</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Add to cart</Modal.Title>
        </Modal.Header>


        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmAddToCart}>
            Delete
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
}

export default Home;
