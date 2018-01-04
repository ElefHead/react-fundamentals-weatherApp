import React from 'react'
import ReactDOM from 'react-dom'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CityInput extends React.Component {
	state = {
		city: ''
	}

	static defaultProps = {
		styleClass: ''
	}

	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}

	handleChange = (event) => {
		const value = event.target.value
		this.setState(() => ({city: value}))
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit (
			this.state.city
		)
	}

	render () {
		const {city} = this.state 
		return (
			<form onSubmit={this.handleSubmit} className={this.props.styleClass}>
				<FormGroup>
		          	<FormControl type="text" placeholder="St. George, Utah" value={city} onChange={this.handleChange} id='city' />
		        </FormGroup>
		        <Link className='' to={{
		        	pathname: '/forecast',
		        	search: `?city=${city}`
		        }}>
		        	<Button bsStyle='success' type="submit" disabled={!city}>Get Weather</Button>
		        </Link>
			</form>
		)
	} 
}

export default CityInput