import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Main from './pages/Main'
import Todos from './pages/Todos'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Routes>
					<Route exact path='/' element={<Main />} />
					<Route path='/todos' element={<Todos />} />
				</Routes>
			</Container>
		</BrowserRouter>
	)
}

export default App
