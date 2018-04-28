import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import header from './headerReducer'
import article from './articleReducer'

const rootReducer = combineReducers({
  header,
  article,
  routing,
})

export default rootReducer
