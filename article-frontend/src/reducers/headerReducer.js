import {
  UPDATE_EDIT_STATE,
  CHANGE_TITLE_SUCCESS,
  CHANGE_TITLE_FAILURE,
  CANCEL_TITLE_CHANGE,
  FETCH_CONTENT_SUCCESS,
 } from '../constants/actionTypes'

const initialState = {
  edit: false,
  title: '',
  slug: '',
  error: null,
  initialLoad: true,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case UPDATE_EDIT_STATE:
      return {
        ...state,
        edit: !state.edit,
      }
    case CHANGE_TITLE_SUCCESS:
      return {
        ...state,
        title: action.response.title,
        slug: action.response.slug,
        edit: false,
        error: null,
      }
    case CHANGE_TITLE_FAILURE:
      return {
        ...state,
        title: state.title,
        slug: state.slug,
        edit: false,
        error: action.error,
      }
    case CANCEL_TITLE_CHANGE:
      return {
        ...state,
        title: state.title,
        edit: false,
      }
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        title: action.response.title,
        slug: action.response.slug,
        initialLoad: false,
      }
    default:
      return state;
  }
}
