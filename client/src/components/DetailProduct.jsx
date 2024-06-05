import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/task/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the product!", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={`http://localhost:3001/uploads/${product.image}`} />
          </Card>
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <h3>Description:</h3>
          <p>{product.description}</p>
          <h3>{product.price}$</h3>
          <p>Stock: {product.stock}</p>
          <Link to={`/`}>
          <Button variant="primary">Add to Cart</Button>
          </Link>
          
        </Col>
      </Row>
    </Container>
  );
}

export default DetailProduct;
