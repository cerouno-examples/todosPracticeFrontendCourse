import SideChat from '../components/SideChat';
import userListActions from '../actions/userListActions';
import chatActions from '../actions/chatActions';
import { connect } from 'react-redux';

const allActions = Object.assign({}, chatActions, userListActions);

function mapStateToProps(state) {
  return {
    userList: state.get('userList').toArray()
  };
}


export default connect(mapStateToProps, allActions)(SideChat);
