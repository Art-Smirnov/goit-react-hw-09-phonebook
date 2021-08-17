import React from 'react';
import { Button } from '@material-ui/core';

const MyButton = ({ children }) => (
  <Button variant="contained" color="primary" type="submit">
    {children}
  </Button>
);

export default MyButton;
