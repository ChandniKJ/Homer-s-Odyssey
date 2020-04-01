import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SnackbarContent } from "@material-ui/core";
import "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordconf: "",
      firstname: "",
      lastname: "",
      flash: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordConfField = this.updatePasswordConfField.bind(this);
    this.updateFirstNameField = this.updateFirstNameField.bind(this);
    this.updateLastNameField = this.updateLastNameField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }

  updatePasswordConfField(event) {
    this.setState({ passwordconf: event.target.value });
  }

  updateFirstNameField(event) {
    this.setState({ firstname: event.target.value });
  }

  updateLastNameField(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(res => this.setState({ flash: res.flash }))
      .catch(err => this.setState({ flash: err.flash }));
    this.setState({ open: false });
    console.log("form submitted");
  };

  render() {
    return (
      <div className="SignUp">
        <div className="container">
          <h2>Sign up !</h2>
          <form onSubmit={this.handleSubmit} className="form">
            <div>
              <TextField
                label="Email"
                id="email"
                type="email"
                name="email"
                fullWidth
                value={this.state.email}
                onChange={this.updateEmailField}
              />
            </div>

            <div>
              <TextField
                label="Password"
                id="password"
                type="password"
                name="password"
                fullWidth
                value={this.state.password}
                onChange={this.updatePasswordField}
              />
            </div>

            <div>
              <TextField
                label="Confirm Password"
                id="passwordConf"
                type="password"
                name="passwordConf"
                fullWidth
                value={this.state.passwordConf}
                onChange={this.updatePasswordConfField}
              />
            </div>

            <div>
              <TextField
                label="First Name"
                id="name"
                type="text"
                name="name"
                fullWidth
                value={this.state.name}
                onChange={this.updateFirstNameField}
              />
            </div>

            <div>
              <TextField
                label="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                fullWidth
                value={this.state.lastName}
                onChange={this.updateLastNameField}
              />
            </div>
            <div className="submit-button">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className="snackbar">
          {this.state.flash && (
            <SnackbarContent
              anchorOrigin={"bottom, center"}
              message={this.state.flash}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SignUp;
