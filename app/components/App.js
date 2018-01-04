import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Forecast from './Forecast'
import Details from './Details'

export default function App() {
	return (
		<Router>
			<div className="full-height">
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/forecast' component={Forecast} />
					<Route exact path='/details' component={Details} />
					<Route render={() => <p>Not Found</p>} />
				</Switch>
			</div>
		</Router>
	)	
}