import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions'
import classes from './AddTodo.module.css'

const AddTodo = () => {
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')

	const submitHandler = e => {
		e.preventDefault()
		dispatch(addTodo(title))
		setTitle('')
	}

	return (
		<form className={classes.container}>
			<input className={classes.input} placeholder='Введите название' value={title} onChange={e => setTitle(e.target.value)} />
			<button className='btn'  onClick={e => submitHandler(e)} disabled={title.length === 0}>
				Добавить
			</button>
		</form>
	)
}

export default AddTodo
