import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lấy danh sách sản phẩm từ API
    axios.get('http://localhost:3001/task')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/task/create">Add product</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      <div className="bg-light py-5 text-center">
        <h1>Welcome to Our Online Shop</h1>
        <p>Discover our collection of products at the best prices.</p>
        <Button variant="primary" href="#shop">Shop Now</Button>
      </div>

      {/* Product List */}
      <Container className="my-5">
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`http://localhost:3001/uploads/${product.image}`}/>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}$</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 Online Shop. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
