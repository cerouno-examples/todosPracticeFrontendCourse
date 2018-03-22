const logger = store => next => action => {
  console.group(action.type);
  console.log('old state', store.getState().toJS());
  const result = next(action);
  console.log('next state', store.getState().toJS());
  console.groupEnd(action.type);
  return result;
};

export default logger;
