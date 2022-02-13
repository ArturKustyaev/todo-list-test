import { combineReducers } from 'redux'
import todosReducer from './todosReduser'

export default combineReducers({
	todos: todosReducer
})
