import { takeEvery, put } from 'redux-saga/effects'
import { ACTION_UPDATE_BIRTHDAY } from './BirthdayActions'
import { doUpdateBirthday} from './BirthdayActions'

/**
 * MÅSTE ALLTID HA * EFTER FUNCTION HÄR DÅ DET ÄR EN GENERATOR FUNCTION
 */

/**
 * TakeLatest() does what it sounds like; if you dispatch the action before the previous API call finishes, it will stop that call and return only the latest one. TakeEvery() allows multiple instances of these sagas to run at the same time. Both takeLatest() and takeEvery() are built on take(), which behaves synchronously.
 */

export function* watchUpdateBirthday(){

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

function* makeUpdateBirthday(action){
  yield put(doUpdateBirthday(action.data))
}