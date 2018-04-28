import { call, takeLatest, put } from 'redux-saga/effects'
import {
  CHANGE_TITLE_REQUEST,
  CHANGE_TITLE_FAILURE,
  CHANGE_TITLE_SUCCESS
 } from '../constants/actionTypes'
 import {
  baseApiPath,
  articlesRoute,
} from '../utils/apiContants'


// ---------- API CALL ------------
function* title (title, article_id) {

  let params = {
    title: title
  };

  let payload = Object.keys(params).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
    }).join('&');

  let config = {
    method: 'PATCH',
    headers: new Headers({
      'Accept':'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body: payload,
  };

  const route = `${baseApiPath}${articlesRoute}${article_id}/`
  try {
    const response = yield call(fetch, route, config);

    if (!response.ok) {
      yield put({
        type: CHANGE_TITLE_FAILURE,
        error: response.statusText,
      });
      return
    }

    const json = yield response.json();
    yield put({
      type: CHANGE_TITLE_SUCCESS,
      response: json,
    });
  }

  catch (error) {
     console.error(error);
  }

}

// ---------- WATCHER HANDLING -----------
function* fetchTitleData(header) {
  yield call(title, header.title, header.id);
}

export default function* headerSaga() {
  yield takeLatest(CHANGE_TITLE_REQUEST, fetchTitleData)
}
