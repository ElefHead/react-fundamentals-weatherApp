import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Grid, Row } from 'react-bootstrap'
import { convertTemp, getDate } from '../utils/helpers'
import ForecastItem from './ForecastItem'
import queryString from 'query-string'

export default function Details (props) {
	const {weather, dt, main} = props.location.state
	const {city} = queryString.parse(props.location.search)
	return (
		<Grid className='flex-center'>
			<Row className="flex-center">
				<ForecastItem weather={weather[0]} dt={dt}>
					<p className='sub-header'>{city}</p>
					<div className="details-container-items">
						<p>{weather[0].description}</p>
						<p>Max Temp: {convertTemp(main.temp_max)} &#8457;</p>
						<p>Min Temp: {convertTemp(main.temp_min)} &#8457;</p>
						<p>Humidity: {main.humidity}</p>
					</div>
				</ForecastItem>
			</Row>
		</Grid>
	)
}
