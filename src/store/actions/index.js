import * as T from './types'
import todosApi from '../../api/todosApi'

const fetchStart = () => ({
	type: T.FETCH_START
})

const fetchError = error => ({
	type: T.FETCH_ERROR,
	payload: error
})

export const getTodosCount = () => {
	return dispatch => {
		dispatch(fetchStart())
		
		todosApi
			.getTodosCount()
			.then(response => dispatch(getTodosCountSuccess(response.data.length)))
			.catch(error => dispatch(fetchError(error.message)))
	}
}

const getTodosCountSuccess = length => ({
	type: T.GET_TODOS_COUNT,
	payload: length
})

export const fetchTodos = (start, limit) => {
	return dispatch => {
		dispatch(fetchStart())
		
		todosApi
			.getTodos(start, limit)
			.then(response => dispatch(fetchTodosSuccess(response.data)))
			.catch(error => dispatch(fetchError(error.message)))
	}
}

const fetchTodosSuccess = todos => ({
	type: T.FETCH_TODOS,
	payload: todos
})

export const addTodo = title => {
	return dispatch => {
		todosApi
			.addTodo(title)
			.then(response => {
				dispatch(addTodoSuccess(response.data))
			})
			.catch(error => {
				dispatch(fetchError(error.message))
			})
	}
}

const addTodoSuccess = todo => ({
	type: T.ADD_TODO,
	payload: todo
})

export const updateTodo = (id, title) => {
	return dispatch => {
		todosApi
			.updateTodo(id, title)
			.then(response => {
				dispatch(updateTodoSuccess(response.data))
			})
			.catch(error => {
				dispatch(fetchError(error.message))
			})
	}
}

const updateTodoSuccess = ({ id, title }) => ({
	type: T.UPDATE_TODO,
	payload: { id, title }
})

export const toggleTodo = (id, completed) => {
	return dispatch => {
		todosApi
			.toggleTodo(id, completed)
			.then(response => {
				dispatch(toggleTodoSuccess(response.data))
			})
			.catch(error => {
				dispatch(fetchError(error.message))
			})
	}
}

const toggleTodoSuccess = ({ id, completed }) => ({
	type: T.TOGGLE_TODO,
	payload: { id, completed }
})

export const deleteTodo = id => {
	return dispatch => {
		todosApi
			.deleteTodo(id)
			.then(() => {
				dispatch(deleteTodoSuccess(id))
			})
			.catch(error => {
				dispatch(fetchError(error.message))
			})
	}
}

const deleteTodoSuccess = id => ({
	type: T.DELETE_TODO,
	payload: id
})

export const setPaginate = start => ({
	type: T.SET_PAGINATE,
	payload: start
})
