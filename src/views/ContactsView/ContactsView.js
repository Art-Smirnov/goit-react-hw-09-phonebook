import React, { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Spiner from '../../Components/Spiner';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoadingContacts, error } = this.props;
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
            <Spiner isLoading={isLoadingContacts} />
            <ContactList />
          </div>
        )}
      </>
    );
  }
}

export default ContactsView;
