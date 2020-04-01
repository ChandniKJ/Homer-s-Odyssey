import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link, Redirect } from "react-router-dom";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }
  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect === true) {
      return <Redirect to="/profile" />;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("/auth/signin", {
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
          <h2>Sign in !</h2>
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

            <div className="signin-button">
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
                  Login
                </Button>
                <Button variant="contained" color="primary">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </ButtonGroup>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
