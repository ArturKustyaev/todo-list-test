import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'
import TodoList from '../components/TodoList/TodoList'
import { fetchTodos, getTodosCount } from '../store/actions'

const Todos = () => {
	const dispatch = useDispatch()
	const { todos, start, limit, length } = useSelector(state => state.todos)

	useEffect(() => {
		dispatch(getTodosCount())
		dispatch(fetchTodos(start, limit))
	}, [start])

	return <>{todos ? <TodoList todos={todos} limit={limit} length={length} /> : <Loader />}</>
}

export default Todos
