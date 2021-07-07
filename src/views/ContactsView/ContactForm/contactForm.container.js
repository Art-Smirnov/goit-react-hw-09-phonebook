import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import { contactsSelectors, contactsOperations } from '../../../redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: obj => dispatch(contactsOperations.addContact(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
