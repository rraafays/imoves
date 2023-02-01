import { combineReducers } from 'redux'; // allow us to combine several reducers into one to keep code clean
import { auth } from './auth'

const Reducers = combineReducers({
  auth
})

export default Reducers;
