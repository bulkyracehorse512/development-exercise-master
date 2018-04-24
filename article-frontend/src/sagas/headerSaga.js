import { call, takeLatest, put, all, take, select } from 'redux-saga/effects'

const getHeaderSaga = async() => (
  console.log('hi')
)

export function* watchGetHeader() {
  yield takeLatest('YI', getHeaderSaga)
}

export default function*() {
  yield all([
    call(watchGetHeader),
  ])
}
