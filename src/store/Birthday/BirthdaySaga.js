import { takeEvery, put } from 'redux-saga/effects'
import { ACTION_UPDATE_BIRTHDAY } from './BirthdayActions'
import { doUpdateBirthday} from './BirthdayActions'

/**
 * MÅSTE ALLTID HA * EFTER FUNCTION HÄR PÅ SAGAN ANNARS FUNGERAR DET INTE
 */

export function* watchUpdateBirthday(){

  yield takeEvery(
    ACTION_UPDATE_BIRTHDAY,
    makeUpdateBirthday
  )
}

function* makeUpdateBirthday(action){
  yield put(doUpdateBirthday(action.data))
}