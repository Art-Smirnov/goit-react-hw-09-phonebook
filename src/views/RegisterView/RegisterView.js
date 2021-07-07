import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const stylesMI = {
  input: {
    marginBottom: 25,
    width: 250,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="form__title">Register</h1>

        <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
          <TextField
            className={classes.input}
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />

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
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(stylesMI)(RegisterView);
