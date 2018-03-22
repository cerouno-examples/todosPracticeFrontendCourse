import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'ADD_MESSAGE' :{
      return state.set('newMessage', true)
                  .set('UserName', action.msg.userName)
                  .set('Message', action.msg.message);
    }
    case 'REPLY_NOTIFICATION' :
    case 'CLOSE_NOTIFICATION' :
      return state.remove('newMessage');
    default:
      return state;
  }
};
