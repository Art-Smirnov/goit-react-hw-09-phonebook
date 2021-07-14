import React, { useState, useCallback } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { contactsSelectors, contactsOperations } from '../../../redux/contacts';
import style from './ContactForm.module.scss';

const stylesMI = {
  input: {
    marginBottom: 25,
    minWidth: 350,
  },
};

const ContactForm = ({ classes }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getAllContacts);

  const onSubmit = useCallback(
    obj => {
      dispatch(contactsOperations.addContact(obj));
    },
    [dispatch],
  );

  const onNameChange = useCallback(e => {
    setName(e.currentTarget.value);
  }, []);

  const onNumberChange = useCallback(e => {
    setNumber(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const normalizedName = name.toLocaleLowerCase();

      contacts.some(
        contact => contact.name.toLocaleLowerCase() === normalizedName,
      )
        ? alert(`${name} is already in contacts`)
        : onSubmit({ name, number });

      setName('');
      setNumber('');
    },
    [contacts, name, number, onSubmit],
  );

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        label="Name"
        onChange={onNameChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <TextField
        className={classes.input}
        label="Number"
        onChange={onNumberChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default withStyles(stylesMI)(ContactForm);
