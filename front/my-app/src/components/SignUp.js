import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link, Redirect } from "react-router-dom";
import { SnackbarContent } from "@material-ui/core";
import "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordconf: "",
      name: "",
      lastname: "",
      flash: "",
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordConfField = this.updatePasswordConfField.bind(this);
    this.updateNameField = this.updateNameField.bind(this);
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

  updateNameField(event) {
    this.setState({ name: event.target.value });
  }

  updateLastNameField(event) {
    this.setState({ lastname: event.target.value });
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ flash: res.flash }))
      .catch((err) => this.setState({ flash: err.flash }));
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
                label="Name"
                id="name"
                type="text"
                name="name"
                fullWidth
                value={this.state.name}
                onChange={this.updateNameField}
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
            <div className="signup-button">
              <ButtonGroup
                size="small"
                aria-label="small outlined button group"
              >
                {this.renderRedirect()}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.setRedirect}
                >
                  Submit
                </Button>
                <Button variant="contained" color="primary">
                  <Link to="/signin">Sign In</Link>
                </Button>
              </ButtonGroup>
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
