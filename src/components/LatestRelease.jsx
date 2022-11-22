import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../booksData/horror.json";

class LatestRelease extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center mt-3">
            {horror.map((book) => (
              <Col xs={12} sm={6} lg={4} xl={3}>
                <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      <small>$</small>
                      <span>{book.price}</span>
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default LatestRelease;
