import React, { useState, useCallback } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

const stylesMI = {
  input: {
    marginBottom: 25,
    width: 250,
  },
};

const RegisterView = ({ classes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onRegister = useCallback(
    obj => {
      dispatch(authOperations.register(obj));
    },
    [dispatch],
  );

  const handleChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Такой тип поля - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      onRegister({ name, email, password });

      setName('');
      setEmail('');
      setPassword('');
    },
    [email, name, onRegister, password],
  );

  return (
    <div>
      <h1 className="form__title">Register</h1>

      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <TextField
          className={classes.input}
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />

        <TextField
          className={classes.input}
          label="Mail"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
          className={classes.input}
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <Button variant="outlined" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default withStyles(stylesMI)(RegisterView);
