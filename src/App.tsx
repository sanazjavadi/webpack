import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import VendorList from '../src/pages/VendorList/index'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={VendorList} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

export default App
