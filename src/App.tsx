import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';

import Home from '../src/pages/Home/Index'
import VendorList from '../src/pages/VendorList/index'


const App: React.FC = () => {
	return (
		 <Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/vendor' component={VendorList} />
			</Switch>
		</BrowserRouter>
		</Provider>
	)
}

export default App
