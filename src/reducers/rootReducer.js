import { combineReducers } from 'redux'
import BirthdayReducer from '../store/Birthday/BirthdayReducer'
import SwishReducer from '../store/Swish/SwishReducer'

export default combineReducers({
 birthday: BirthdayReducer,
 swish: SwishReducer
})