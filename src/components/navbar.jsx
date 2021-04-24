import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div classname="container-fluid">
          <a classname="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounter}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
