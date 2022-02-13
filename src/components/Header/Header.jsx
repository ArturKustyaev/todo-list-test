import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
import classes from './Header.module.css'

const Header = () => {
	const linkClasses = ({ isActive }) => classes.link + ' ' + (isActive ? classes.link_active : '')

	return (
		<div className={classes.header}>
			<Container>
				<NavLink className={linkClasses} to='/'>
					Главная
				</NavLink>
				<NavLink className={linkClasses} to='/todos'>
					Список todo
				</NavLink>
			</Container>
		</div>
	)
}

export default Header
