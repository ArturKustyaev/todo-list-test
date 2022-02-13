import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../store/actions'
import UpdateTodo from '../UpdateTodo/UpdateTodo'
import classes from './Todo.module.css'

const Todo = ({ todo }) => {
	const [update, setUpdate] = useState(false)
	const dispatch = useDispatch()

	const onChangeHandler = () => {
		dispatch(toggleTodo(todo.id, todo.completed))
	}

	const handleUpdate = () => {
		setUpdate(true)
	}

	const handleDelete = () => {
		dispatch(deleteTodo(todo.id))
	}

	const handleUpdateSubmit = () => {
		setUpdate(false)
	}

	return (
		<div className={classes.todo}>
			{update ? (
				<UpdateTodo id={todo.id} onSubmit={handleUpdateSubmit} />
			) : (
				<>
					<input type='checkbox' checked={todo.completed} onChange={onChangeHandler} />
					<span className={`${classes.title} ${todo.completed ? classes.todo_completed : ''}`}>
						{todo.title}
					</span>
					<div className={classes.actions}>
						<button className='btn' onClick={handleUpdate}>
							Изменить
						</button>
						<button className={`btn ${classes.btn_delete}`} onClick={handleDelete}>
							x
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Todo
