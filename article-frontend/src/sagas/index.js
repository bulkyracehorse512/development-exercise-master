import { call, all } from 'redux-saga/effects'
import headerSaga from './headerSaga'

export default function* rootSaga() {
  yield all([call(headerSaga)])
}
