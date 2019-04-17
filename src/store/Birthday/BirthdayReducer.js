import initialState from '../initialState'
import {
  UPDATE_BIRTHDAY,
  UPDATE_TIMEANDPLACE
} from './BirthdayActions'


export default function (state = initialState.birthday, action) {
  switch (action.type) {
    case UPDATE_BIRTHDAY:
      return { ...state, birthdayEvent: { ...state.birthdayEvent, ...action.data } }
    case UPDATE_TIMEANDPLACE:
      return { ...state, birthdayTimeAndPlace: { ...state.birthdayTimeAndPlace, ...action.data } }
    default:
      return state
  }
}