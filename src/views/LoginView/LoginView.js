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

const LoginView = ({ classes }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onLogin = useCallback(
    obj => {
      dispatch(authOperations.logIn(obj));
    },
    [dispatch],
  );

  const handleEmailChange = useCallback(e => {
    setEmail(e.currentTarget.value);
  }, []);

  const handlePasswordChange = useCallback(e => {
    setPassword(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      onLogin({ email, password });
      reset();
    },
    [email, onLogin, password],
  );

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className="form__title">Login</h1>

      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <TextField
          className={classes.input}
          label="Mail"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          className={classes.input}
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default withStyles(stylesMI)(LoginView);
