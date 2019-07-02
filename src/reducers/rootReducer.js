import { combineReducers } from "redux"
import BirthdayReducer from "../store/Birthday/BirthdayReducer"
import SwishReducer from "../store/Swish/SwishReducer"
import AgreementReducer from "../store/Agreement/AgreementReducer"

export default combineReducers({
  birthday: BirthdayReducer,
  swish: SwishReducer,
  agreement: AgreementReducer
})
