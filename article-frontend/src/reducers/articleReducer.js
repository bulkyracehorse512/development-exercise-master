import {
  FETCH_CONTENT_FAILURE,
  FETCH_CONTENT_SUCCESS
 } from '../constants/actionTypes'

const initialState = {
  author: '',
  content: '',
  dateModified: '',
  tags: [],
  feature: '',
  id: '',
  error: null,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_CONTENT_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        author: action.response.author,
        content: action.response.content,
        dateModified: action.response.date_modified,
        tags: action.response.tags,
        feature: action.response.feature,
        id: action.response.id,
        error: null,
      }
    default:
      return state;
  }
}
