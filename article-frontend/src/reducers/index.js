import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import header from './headerReducer'

const rootReducer = combineReducers({
  header,
  routing,
})

export default rootReducer
