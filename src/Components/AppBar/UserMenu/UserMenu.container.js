import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  Avatar: AccountCircleIcon,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
