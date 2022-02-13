import React from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Pagination from '../Pagination/Pagination'
import Todo from '../Todo/Todo'
import classes from './TodoList.module.css'

const TodoList = ({ todos, limit, length }) => {
	return (
		<div className={classes.container}>
			<AddTodo/>
			{todos.length ? (
				<>
					<div className={classes.todo_list_container}>
						{todos.map(todo => {
							return <Todo key={todo.id} todo={todo} />
						})}
					</div>
					<Pagination limit={limit} length={length} />
				</>
			) : (
				<div className={classes.empty_list}>Задач нет</div>
			)}
		</div>
	)
}

export default TodoList
