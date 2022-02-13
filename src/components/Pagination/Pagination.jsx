import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos, setPaginate } from '../../store/actions'
import classes from './Pagination.module.css'

const Pagination = ({ length, limit }) => {
	const pageNumberLimit = 5
	const [currentPage, setCurrentPage] = useState(0)
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit - 1)

	const dispatch = useDispatch()

	const pageNumbers = []
	let paginationLength = 0

	if (limit != 0) {
		paginationLength = Math.ceil(length / limit)

		for (let i = 0; i < paginationLength; i++) {
			pageNumbers.push(i)
		}
	}

	const setPaginateStart = newCurrentPage => {
		const start = newCurrentPage * limit
		dispatch(setPaginate(start))
	}

	const handlePrevButton = () => {
		const newCurrentPage = currentPage - 1
		setCurrentPage(newCurrentPage)

		if (currentPage % pageNumberLimit == 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
		}

		setPaginateStart(newCurrentPage)
	}

	const handleNextButton = () => {
		const newCurrentPage = currentPage + 1
		setCurrentPage(newCurrentPage)

		if (newCurrentPage > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
		}

		setPaginateStart(newCurrentPage)
	}

	const clickHandler = value => {
		setCurrentPage(+value)
		setPaginateStart(+value)
	}

	return (
		<div className={classes.container}>
			{limit !== 0 ? (
				<>
					<button
						className={`${classes.btn} ${classes.btn_prev}`}
						onClick={handlePrevButton}
						disabled={currentPage === 0}
					/>
					{pageNumbers.map(number => {
						if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {
							return (
								<button
									className={`${classes.btn} ${number === currentPage ? classes.active : ''}`}
									key={number}
									onClick={e => clickHandler(e.target.value)}
									value={number}
								>
									{number + 1}
								</button>
							)
						} else {
							return null
						}
					})}
					<button
						className={`${classes.btn} ${classes.btn_next}`}
						onClick={handleNextButton}
						disabled={currentPage === paginationLength - 1}
					/>
				</>
			) : (
				''
			)}
		</div>
	)
}

export default Pagination
