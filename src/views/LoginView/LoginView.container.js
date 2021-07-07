import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import LoginView from './LoginView';

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
