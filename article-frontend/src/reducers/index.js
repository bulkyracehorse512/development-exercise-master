import { combineReducers } from 'redux'
import headerReducer from './headerReducer'

const rootReducer = combineReducers({
  headerState: headerReducer,
})

export default rootReducer
