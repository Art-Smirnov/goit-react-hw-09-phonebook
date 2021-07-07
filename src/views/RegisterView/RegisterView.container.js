import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import RegisterView from './RegisterView';

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
