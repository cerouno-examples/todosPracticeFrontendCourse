import { Map, fromJS } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'SELECT_CHAT': {
      return state.update('currentChat', value => action.userName);
    }
    case 'ADD_USER': {
      return state.set(action.userName, fromJS(
        {userName: action.userName, messageList: []}
      ));
    }
    case 'ADD_MESSAGE': {
      const currentChat = state.get('currentChat');
      const userList = state.getIn([currentChat, 'messageList']).push(action.msg);
      const newState = state.setIn([currentChat, 'messageList'], userList);
      return newState;
    }
    case 'REPLY_NOTIFICATION': {
      return state.update('currentChat', value => action.userName);
    }
    default:
      return state;
  }
};
