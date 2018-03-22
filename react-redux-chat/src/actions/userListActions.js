import { generateNewUser } from '../utils/chatHelper'

export default
{
  addUser: () => (dispatch, getState) => {
    generateNewUser().then((userName) => {
      dispatch({
        type: 'ADD_USER',
        userName
      });
    });
    dispatch({type: 'WAITING'});
  }
};
