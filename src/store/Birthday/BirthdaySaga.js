import { takeEvery, put } from 'redux-saga/effects'
import { ACTION_UPDATE_BIRTHDAY, ACTION_UPDATE_IMAGE } from './BirthdayActions'
import { doUpdateBirthday, updateTheImage} from './BirthdayActions'

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
