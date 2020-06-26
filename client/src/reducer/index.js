import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './auth.reducer';
import profile from './profile.reducer';

export default combineReducers({
   alert,
   authReducer,
   profile,
});
