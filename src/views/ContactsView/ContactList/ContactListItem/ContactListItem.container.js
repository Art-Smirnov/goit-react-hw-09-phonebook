import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import {
  contactsOperations,
  contactsSelectors,
} from '../../../../redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
