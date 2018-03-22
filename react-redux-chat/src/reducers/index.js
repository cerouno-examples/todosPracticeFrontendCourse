import { combineReducers } from 'redux-immutable';
import userList from './userListReducer';
import notification from './notificationReducer';
import chats from './chatsReducer';

export default combineReducers({
  userList,
  notification,
  chats
});
