import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$40", image: "https://via.placeholder.com/150" },
  ];

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
            <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
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
