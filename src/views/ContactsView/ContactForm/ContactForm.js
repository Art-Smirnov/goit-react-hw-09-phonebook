import React, { Component } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import style from './ContactForm.module.scss';

const stylesMI = {
  input: {
    marginBottom: 25,
    minWidth: 350,
  },
};

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const normalizedName = this.state.name.toLocaleLowerCase();
    this.props.contacts.some(
      contact => contact.name.toLocaleLowerCase() === normalizedName,
    )
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <TextField
          className={classes.input}
          label="Name"
          onChange={this.onInputChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <TextField
          className={classes.input}
          label="Number"
          onChange={this.onInputChange}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Button
          onChange={this.onSubmit}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add contact
        </Button>
      </form>
    );
  }
}

export default withStyles(stylesMI)(ContactForm);
