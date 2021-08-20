import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  contactsOperations,
  contactsSelectors,
  setModal,
} from '../../redux/contacts';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Spiner from '../../Components/Spiner';
import MyModal from '../../Components/UI/modal/MyModal';
import MyButton from '../../Components/UI/button/MyButton';
import styles from './ContactsView.module.scss';

export default function ContactsView() {
  const dispatch = useDispatch();
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onOpenModal = useCallback(() => {
    dispatch(setModal(true));
  }, [dispatch]);

  return (
    <>
      {error ? (
        <p>Whoops, something went wrong: {error.message}</p>
      ) : (
        <div className={styles.contactsSection}>
          <h1>Phonebook</h1>
          <MyButton
            className={styles.btn}
            variant="contained"
            color="primary"
            onClick={onOpenModal}
          >
            Add Conact
          </MyButton>
          <MyModal visible={true} setVisible={setModal}>
            <ContactForm />
          </MyModal>
          <h2>Contacts</h2>
          <Filter />
          <Spiner />
          <ContactList />
        </div>
      )}
    </>
  );
}
