import { combineReducers } from 'redux';
import userStore from './getToken/reducer';

const rootReducer = combineReducers({
  token: userStore,
});

export default rootReducer;
