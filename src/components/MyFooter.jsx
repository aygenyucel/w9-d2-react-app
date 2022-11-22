import { Component } from "react";
import * as Icon from "react-bootstrap-icons";

class Myfooter extends Component {
  render() {
    return (
      <>
        <div className="container">
          <footer className="d-flex justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <div className=" d-flex align-items-center w-100">
                <a
                  href="/"
                  className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                >
                  Aygen
                </a>
                <span className="mb-3 mb-md-0 text-muted ">© 2022</span>
              </div>
            </div>

            <div className="d-flex justify-content-end w-100">
              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex flex-row">
                <li className="ms-3 ml-3">
                  <a href="#" className="text-muted d-flex align-items-center">
                    <Icon.Twitter />
                  </a>
                </li>
                <li className="ms-3 ml-3">
                  <a href="#" className="text-muted d-flex align-items-center">
                    <Icon.Instagram />
                  </a>
                </li>
                <li className="ms-3 ml-3">
                  <a href="#" className="text-muted d-flex align-items-center">
                    <Icon.Facebook />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Myfooter;
