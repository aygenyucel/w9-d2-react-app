import { Button, Jumbotron } from "react-bootstrap";

const Welcome = () => (
  <>
    <Jumbotron>
      <h1>
        SAVE BIG WITH <span className="text-success">STRIVEBOOKS</span>
      </h1>
      <p>Buy and sell your books at the best price</p>
      <p>
        <Button variant="primary" style={{ border: "none" }}>
          Shop Now
        </Button>
      </p>
    </Jumbotron>
  </>
);

export default Welcome;
