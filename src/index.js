import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Todos from './components/Todos'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ App } />
				<Route path="/todos" component={ Todos } />
			</Switch>
		</BrowserRouter>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
