import { takeEvery, put } from 'redux-saga/effects'
import { ACTION_UPDATE_BIRTHDAY } from './BirthdayActions'
import { doUpdateBirthday } from './BirthdayActions'
import { ACTION_UPDATE_TIME_AND_PLACE } from './BirthdayActions'
import { updateBirthdayTimeAndPlace } from './BirthdayActions'


/**
 * MÅSTE ALLTID HA * EFTER FUNCTION HÄR PÅ SAGAN ANNARS FUNGERAR DET INTE
 */

export function* watchUpdateBirthday() {

  yield takeEvery(
    ACTION_UPDATE_BIRTHDAY, makeUpdateBirthday
  )
}


function* makeUpdateBirthday(action) {
  yield put(doUpdateBirthday(action.data))
}


export function* watchUpdateTime() {
  yield takeEvery(ACTION_UPDATE_TIME_AND_PLACE, makeUpdateTimeAndPlace)
}

function* makeUpdateTimeAndPlace(action) {
  yield put(updateBirthdayTimeAndPlace(action.data))
}

