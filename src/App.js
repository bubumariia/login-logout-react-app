import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      fiedsEmpty: false,
      userName: "",
      errorMessage: "",
    };
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    let emailValue = e.target.email.value;
    let passwordValue = e.target.password.value;
    const credentials = {
      email: emailValue,
      password: passwordValue,
    };

    if (emailValue !== "" && passwordValue !== "") {
      this.authenticateUser(credentials);
    } else {
      this.setState({ fiedsEmpty: true });
      setTimeout(() => {
        this.setState({ fiedsEmpty: false });
      }, 3000);
    }
  };
  authenticateUser = async (creds) => {
    const { email, password } = creds;

    const url = "https://633d68f37e19b178290dd4a7.mockapi.io/api/v1/users";
    const response = await fetch(url);

    const data = await response.json();
    const user = data.find((el, index) =>
      el.email === email && el.password === password
        ? this.setState({ loggedIn: true, userName: data[index].fname })
        : this.setState({ errorMessage: "Username or Password is incorrect" })
    );
    console.log(this.state.userName);
    console.log(data);
  };
  render() {
    const { loggedIn, fiedsEmpty, userName, errorMessage } = this.state;
    return (
      <div className="App">
        {loggedIn ? (
          <Dashboard userName={userName} />
        ) : (
          <Login
            handleFormSubmit={this.handleFormSubmit}
            fiedsEmpty={fiedsEmpty}
            errorMessage={errorMessage}
          />
        )}
      </div>
    );
  }
}
