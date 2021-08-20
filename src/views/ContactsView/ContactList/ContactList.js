import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import MyButton from '../../../Components/UI/button/MyButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { contactsOperations, contactsSelectors } from '../../../redux/contacts';

import './ContactList.scss';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDelete = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  if (!contacts.length) {
    return <p>There are no contacts!</p>;
  }

  return (
    <ul className="ContactList">
      <TransitionGroup>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={500} classNames="item">
            <li className="ContactListItem">
              <span className="ContactListItem__data">
                {name}: {number}
              </span>
              <MyButton
                startIcon={<DeleteIcon />}
                variant="contained"
                color="secondary"
                type="submit"
                onClick={() => onDelete(id)}
              >
                DELETE
              </MyButton>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ContactList;
