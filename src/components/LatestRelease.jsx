import { Component, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../booksData/horror.json";
import "./LatestRelease.css";

class LatestRelease extends Component {
  state = {
    selectedBook: null,
    totalPrice: 0,
  };

  //TODO: search difference between null and {}: .....
  //TODO: search optional chaining operator: ..... !!!and null will stop the chaining so this is one of the reason why sometimes we prefer null instead of {}
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center mt-3">
            {horror.map((book) => (
              //TODO: make the return value as seperate component!
              <Col xs={12} sm={4} lg={4} xl={3} key={book.asin}>
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
                        //every time you set the state, render() fires again!!
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

//for the checkboxes, the value will be on or off, not true or false. So you can use checked instead of value property if you want to reach out if its true or false

export default LatestRelease;
