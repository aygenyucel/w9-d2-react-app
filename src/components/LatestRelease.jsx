import { Component, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../booksData/horror.json";

class LatestRelease extends Component {
  state = {
    selectedBook: null,
    totalPrice: 0,
  };

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center mt-3">
            {horror.map((book) => (
              <Col xs={12} sm={6} lg={4} xl={3} key={book.asin}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      <small>$</small>
                      <span>{book.price}</span>
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        this.setState({
                          selectedBook: book,
                          totalPrice: (this.state.totalPrice += book.price),
                        });
                        console.log(this.state.totalPrice);
                      }}
                    >
                      Add To Cart
                    </Button>
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
