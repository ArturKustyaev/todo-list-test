import React from 'react'
import logo from '../assets/img/logo.png'
import classes from './Main.module.css'

const Main = () => {
	return (
		<div>
			<img className={classes.logo} src={logo} />
			<div>Главная страница</div>
			<p>Приложение Todo для прохождения тестового задания.</p>
		</div>
	)
}

export default Main
