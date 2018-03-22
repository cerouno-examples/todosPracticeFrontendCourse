import ChatTable from '../components/ChatTable';
import chatActions from '../actions/chatActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  const currentChat = state.getIn(['chats', 'currentChat']);
  return {
    userName : currentChat,
    userList: state.get('userList'),
    messageList : state.getIn(['chats', currentChat]) ?
            state.getIn(['chats', currentChat, 'messageList']).toArray() : []
  }
}

export default connect(mapStateToProps, chatActions)(ChatTable);
