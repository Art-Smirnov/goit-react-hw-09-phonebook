import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import './ContactListItem.scss';

const ContactListItem = ({ contacts, onDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li className="ContactListItem" key={id}>
      <span className="ContactListItem__data">
        {name}: {number}
      </span>
      <Button
        startIcon={<DeleteIcon />}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => onDelete(id)}
      >
        DELETE
      </Button>
    </li>
  ));

export default ContactListItem;
