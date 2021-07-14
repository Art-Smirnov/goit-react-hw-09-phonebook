import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTween } from 'react-use';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  contactsSelectors,
  contactsOperations,
} from '../../../../redux/contacts';
import './ContactListItem.scss';

export default function ContactListItem() {
  const value = useTween('elastic', 1000, 500);
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDelete = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return contacts.map(({ id, name, number }) => (
    <li
      style={{ marginLeft: value * 200 - 200 }}
      className="ContactListItem"
      key={id}
    >
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
}
