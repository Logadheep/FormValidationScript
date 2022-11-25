import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import Input from './components/Input';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Input/>}/>
			</Routes>
    	</BrowserRouter>
	)
}

export default App