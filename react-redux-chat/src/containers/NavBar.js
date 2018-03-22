import NavBar from '../components/NavBar';
import userListActions from '../actions/userListActions';
import chatActions from '../actions/chatActions';
import { connect } from 'react-redux';

const allActions = Object.assign({}, chatActions, userListActions);

export default connect(null, allActions)(NavBar);
