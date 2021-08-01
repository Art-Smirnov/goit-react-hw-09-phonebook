import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, changeFilter } from '../../../redux/contacts';
import { TextField, withStyles } from '@material-ui/core';

const stylesMI = {
  input: {
    minWidth: 400,
    marginBottom: 20,
  },
};

const Filter = ({ classes }) => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = useCallback(
    e => {
      dispatch(changeFilter(e.target.value.trim()));
    },
    [dispatch],
  );
  return (
    <TextField
      className={classes.input}
      id="standard-basic"
      label="Find your contacts by name"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default withStyles(stylesMI)(Filter);
