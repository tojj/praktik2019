import { combineReducers } from 'redux';
import BirthdayReducer from '../store/Birthday/BirthdayReducer';

export default combineReducers({
 birthday: BirthdayReducer
});