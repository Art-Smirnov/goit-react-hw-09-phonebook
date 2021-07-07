import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import ContactsView from './ContactsView';

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
