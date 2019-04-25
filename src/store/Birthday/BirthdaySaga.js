import { takeEvery, put } from 'redux-saga/effects'

import {
  ACTION_UPDATE_BIRTHDAY,
  doUpdateBirthday,
  ACTION_UPDATE_TIME_AND_PLACE,
  updateBirthdayTimeAndPlace,
  ACTION_UPDATE_GUEST_USER_DETAILS,
  updateGuestDetails

} from './BirthdayActions'


/**
 * MÅSTE ALLTID HA * EFTER FUNCTION HÄR DÅ DET ÄR EN GENERATOR FUNCTION
 */


/**
 * TakeLatest() does what it sounds like; if you dispatch the action before the previous API call finishes, it will stop that call and return only the latest one. TakeEvery() allows multiple instances of these sagas to run at the same time. Both takeLatest() and takeEvery() are built on take(), which behaves synchronously.
 */

export function* watchUpdateBirthday() {

  yield takeEvery( /* Nedanstående lyssnar din watcher saga på */
    ACTION_UPDATE_BIRTHDAY,
    makeUpdateBirthday
  )
}

/**
 * 
 * Nedanstående är din worker saga
 * När takeEvery dispatchas (för oss är det ACTION_UPDATE_BIRTHDAY osv) börjar den göra its thing
 */

function* makeUpdateBirthday(action) {
  yield put(doUpdateBirthday(action.data))
}

/*
export function* watchUpdateImage(){

  yield takeEvery(
    ACTION_UPDATE_IMAGE,
    makeUpdateImage
  )
}

 function* makeUpdateImage(action){
  console.log(action);
  yield put(updateTheImage(action.data))
}
*/

/**
 * Watcher for updates in EventInput component
 */

export function* watchUpdateTime() {
  yield takeEvery(ACTION_UPDATE_TIME_AND_PLACE, makeUpdateTimeAndPlace)
}

function* makeUpdateTimeAndPlace(action) {
  yield put(updateBirthdayTimeAndPlace(action.data))
}


/**
 * Watcher for updates in Guest Details component
 */
/*
export function* watchUpdateGuestUserDetails() {
  yield takeEvery(ACTION_UPDATE_GUEST_USER_DETAILS, makeUpdateGuestUserDetails)
}

function* makeUpdateGuestUserDetails(action) {
  yield put(updateGuestDetails(action.data))
}*/
