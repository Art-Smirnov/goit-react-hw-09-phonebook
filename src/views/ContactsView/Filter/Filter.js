import React from 'react';

import { TextField, withStyles } from '@material-ui/core';

const stylesMI = {
  input: {
    minWidth: 400,
    marginBottom: 20,
  },
};

const Filter = ({ value, onChange, classes }) => (
  <TextField
    className={classes.input}
    id="standard-basic"
    label="Find your contacts by name"
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default withStyles(stylesMI)(Filter);
