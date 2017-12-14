import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false || "":
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return (
          <li>
            <a>Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props.auth);

    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">TheFeedbackMachine</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

//which gets called with the entire state object of redux store
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
