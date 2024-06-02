// src/components/Layout.jsx
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import '../css/layout.css'; // Import the CSS file

function Layout(){
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/task/create">Add Product</Nav.Link>
              <Nav.Link href="/task">Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="flex-grow-1">
        <Container className="my-5">
          <Outlet /> {/* This will render the matched child route */}
        </Container>
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
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
};

export default Layout;
