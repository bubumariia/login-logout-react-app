import React, { Component } from "react";
import { Button } from "reactstrap";
import "./styles/Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard Page</h2>
        <p>Dear {this.props.userName}, welcome to your dashboard.</p>
        <Button>Logout</Button>
      </div>
    );
  }
}
