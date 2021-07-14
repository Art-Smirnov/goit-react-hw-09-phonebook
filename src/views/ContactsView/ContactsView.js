import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Spiner from '../../Components/Spiner';

export default function ContactsView() {
  const dispatch = useDispatch();
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <>
      {error ? (
        <p>Whoops, something went wrong: {error.message}</p>
      ) : (
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <Spiner />
          <ContactList />
        </div>
      )}
    </>
  );
}
