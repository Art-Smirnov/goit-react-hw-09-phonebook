import { connect } from 'react-redux';
import Filter from './Filter';
import { contactsSelectors, changeFilter } from '../../../redux/contacts';

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
