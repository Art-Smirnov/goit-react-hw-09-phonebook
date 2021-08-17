import React from 'react';
import { useSelector } from 'react-redux';

import ContactListItem from './ContactListItem';
import { contactsSelectors } from '../../../redux/contacts';

import './ContactList.scss';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  if (!contacts.length) {
    return <p>There are no contacts!</p>;
  }

  return <ul className="ContactList">{<ContactListItem />}</ul>;
};

export default ContactList;
