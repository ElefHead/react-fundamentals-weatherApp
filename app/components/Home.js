import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Grid, Row, Col, FormControl, FormGroup, Button } from 'react-bootstrap'
import CityInput from './CityInput'

class Home extends React.Component {
	handleSubmit = (city) => {
		this.setState(() => {city:city})
	}
	render () {
		return (
			<Grid className='flex-center'>
				<Row>
					<Col xs={12}>
						<h1>Enter a City and State</h1>
						<CityInput onSubmit={this.handleSubmit} />
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Home