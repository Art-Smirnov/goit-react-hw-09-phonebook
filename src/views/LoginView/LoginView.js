import React, { Component } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';

const stylesMI = {
  input: {
    marginBottom: 25,
    width: 250,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="form__title">Login</h1>

        <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
          <TextField
            className={classes.input}
            label="Mail"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <TextField
            className={classes.input}
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <Button variant="outlined" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(stylesMI)(LoginView);
