import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { gsap, Power3 } from 'gsap/all';
import { useEffect } from 'react';

import {
  contactsSelectors,
  contactsOperations,
} from '../../../../redux/contacts';
import './ContactListItem.scss';

export default function ContactListItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => {
    gsap.fromTo(
      '.ContactListItem',
      1,
      { x: -200, ease: Power3.easeInOut() },
      { x: 0, ease: Power3.easeInOut() },
    );
  }, []);

  const onDelete = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return contacts.map(({ id, name, number }) => (
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
}
