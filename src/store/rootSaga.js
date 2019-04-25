import { all } from 'redux-saga/effects'

import {
  watchUpdateBirthday,
  watchUpdateTime
} from './Birthday/BirthdaySaga'

/**
 * Generator funktion ska alltid ha * 
 */

export function* rootSaga() {
  yield all([
    // watchUpdateImage(),
    watchUpdateBirthday(),
    watchUpdateTime()
  ])
}

