import { combineReducers } from 'redux';
import { authReducer } from '../auth/redux/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
});
