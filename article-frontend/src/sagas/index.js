import { fork } from 'redux-saga/effects'
import headerSaga from './headerSaga'
import articleSaga from './articleSaga'

export default function* rootSaga() {
  yield fork(headerSaga);
  yield fork(articleSaga);
}
