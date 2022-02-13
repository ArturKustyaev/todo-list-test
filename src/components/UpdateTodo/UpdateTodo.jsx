import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../store/actions'
import classes from './UpdateTodo.module.css'

const UpdateTodo = ({ id, onSubmit }) => {
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')

	const submitHandler = e => {
		e.preventDefault()
		dispatch(updateTodo(id, title))
		setTitle('')
		onSubmit()
	}

	return (
		<form className={classes.container}>
			<input
				className={classes.input}
				placeholder='Введите новое название'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<button className='btn' onClick={e => submitHandler(e)} disabled={title.length === 0}>
				Подтвердить
			</button>
		</form>
	)
}

export default UpdateTodo
