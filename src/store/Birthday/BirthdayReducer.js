import initialState from '../initialState'
import { UPDATE_BIRTHDAY } from './BirthdayActions'

export default function(state = initialState.birthday, action) {
  switch(action.type) {
    case UPDATE_BIRTHDAY:
      return { ...state, birthdayEvent: { ...state.birthdayEvent, ...action.data }}

    default:
      return state
  }
}