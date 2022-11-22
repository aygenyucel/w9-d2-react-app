import "./CartNav.css";
import { Component } from "react";
import * as Icon from "react-bootstrap-icons";

class CartNav extends Component {
  render() {
    return (
      <>
        <div className="cartnav d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between">
            <div>Total</div>
            <div>
              <small>$</small>
              <span className="totalCartPrice">{this.props.totalPrice}</span>
            </div>
          </div>
          <button className="d-flex align-items-center justify-content-between mt-3">
            Go Cart
            <Icon.ArrowRight />
          </button>
        </div>
      </>
    );
  }
}

export default CartNav;
