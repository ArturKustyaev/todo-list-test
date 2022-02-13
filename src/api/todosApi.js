import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'

const todosApi = {
	getTodosCount: () => {
		return axios.get(url)
	},
	getTodos: (start, limit) => {
		return axios.get(`${url}?_start=${start}&_limit=${limit}`)
	},
	addTodo: title => {
		return axios.post(url, {
			userId: 1,
			title,
			completed: false
		})
	},
	updateTodo: (id, title) => {
		return axios.put(`${url}/${id}`, {
			title
		})
	},
	toggleTodo: (id, completed) => {
		return axios.put(`${url}/${id}`, {
			completed
		})
	},
	deleteTodo: id => {
		return axios.delete(`${url}/${id}`)
	}
}

export default todosApi
