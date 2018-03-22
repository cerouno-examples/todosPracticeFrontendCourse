import Notification from '../components/Notification';
import actionCreator from '../actions/notificationActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['notification', 'newMessage']) || false,
    UserName: state.getIn(['notification', 'UserName']),
    Message: state.getIn(['notification', 'Message'])
  }
}

export default connect(mapStateToProps, actionCreator)(Notification)
