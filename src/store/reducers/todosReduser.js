import {
	FETCH_START,
	FETCH_ERROR,
	FETCH_TODOS,
	GET_TODOS_COUNT,
	ADD_TODO,
	UPDATE_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	SET_PAGINATE
} from '../actions/types'

const initialState = {
	error: null,
	isFetching: false,
	length: 0,
	limit: 10,
	start: 0,
	todos: null
}

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START: {
			return {
				...state,
				isFetching: true
			}
		}
		case FETCH_ERROR: {
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		}
		case FETCH_TODOS: {
			return {
				...state,
				isFetching: false,
				error: null,
				todos: [...action.payload]
			}
		}
		case GET_TODOS_COUNT: {
			return {
				...state,
				isFetching: false,
				error: null,
				length: action.payload
			}
		}
		case ADD_TODO:
			return {
				...state,
				isFetching: false,
				error: null,
				todos: [...state.todos, action.payload]
			}
		case UPDATE_TODO:
			return {
				...state,
				isFetching: false,
				error: null,
				todos: [
					...state.todos.map(todo =>
						todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
					)
				]
			}
		case TOGGLE_TODO:
			return {
				...state,
				isFetching: false,
				error: null,
				todos: [
					...state.todos.map(todo =>
						todo.id === action.payload.id ? { ...todo, completed: !action.payload.completed } : todo
					)
				]
			}
		case DELETE_TODO:
			return {
				...state,
				todos: [...state.todos.filter(todo => todo.id !== action.payload)]
			}
		case SET_PAGINATE:
			return {
				...state,
				start: action.payload
			}
		default:
			return state
	}
}

export default todosReducer
