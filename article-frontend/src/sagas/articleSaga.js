import { call, takeLatest, put } from 'redux-saga/effects'
import {
  FETCH_CONTENT_REQUEST,
  FETCH_CONTENT_FAILURE,
  FETCH_CONTENT_SUCCESS,
} from '../constants/actionTypes'
import {
  baseApiPath,
  articlesRoute,
} from '../utils/apiContants'

// ---------- API CALL ------------
function* article (article_id) {

  let config = {
    method: 'GET',
    headers: new Headers({
      'Accept':'application/json',
    })
  };

  const route = `${baseApiPath}${articlesRoute}${article_id}/`

  try {
    const response = yield call(fetch, route, config);

    if (!response.ok) {
      yield put({
        type: FETCH_CONTENT_FAILURE,
        error: response.statusText,
      });
      return
    }

    const json = yield response.json();
    yield put({
      type: FETCH_CONTENT_SUCCESS,
      response: json,
    });
  }

  catch (error) {
     console.error(error);
  }

}

// ---------- WATCHER HANDLING -----------
function* fetchArticleData() {
  const article_id = Math.floor(Math.random() * 5) + 1
  yield call(article, article_id);
}

export default function* articleSaga() {
  yield takeLatest(FETCH_CONTENT_REQUEST, fetchArticleData)
}

