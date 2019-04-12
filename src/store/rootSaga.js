import { all } from 'redux-saga/effects'
import { watchUpdateBirthday } from './Birthday/BirthdaySaga'

/**
 * Generator funktion ska alltid ha * 
 */

export function* rootSaga(){
  yield all([
      watchUpdateBirthday() /* Watcher Saga */
  ])
}

