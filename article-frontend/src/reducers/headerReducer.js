import {
  UPDATE_EDIT_STATE,
  CHANGE_TITLE_SUCCESS,
  CHANGE_TITLE_FAILURE,
  CANCEL_TITLE_CHANGE,
 } from '../constants/actionTypes'

const initialState = {
  edit: false,
  title: "Are we out of the woods yet?",
  error: null,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case UPDATE_EDIT_STATE:
      console.log("YA HERDDD")
      return {
        ...state,
        edit: !state.edit,
      }
    case CHANGE_TITLE_SUCCESS:
      return {
        ...state,
        title: action.title,
        edit: false,
        error: null,
      }
    case CHANGE_TITLE_FAILURE:
      return {
        ...state,
        title: state.title,
        edit: false,
        error: action.error,
      }
    case CANCEL_TITLE_CHANGE:
      return {
        ...state,
        title: state.title,
        edit: false,
      }
    default:
      return state;
  }
}
