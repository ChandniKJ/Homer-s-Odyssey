import React from "react";

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
    // console.log(`A form was submitted ${JSON.stringify(this.state)}`);
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };

  render() {
    return (
      <>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.updateEmailField}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePasswordField}
          />
          <input
            type="password"
            name="passwordconf"
            value={this.state.passwordconf}
            onChange={this.updatePasswordConfField}
          />
          <input
            type="firstname"
            name="firstname"
            value={this.state.firstname}
            onChange={this.updateFirstNameField}
          />
          <input
            type="lastname"
            name="lastname"
            value={this.state.lastname}
            onChange={this.updateLastNameField}
          />

          <input type="submit" value="Submit" />
        </form>
        {this.state.flash && <p>{this.state.flash}</p>}
      </>
    );
  }
}

export default SignUp;
