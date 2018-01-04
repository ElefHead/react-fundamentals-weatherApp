import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Image } from 'react-bootstrap'
import {getDate} from '../utils/helpers'
import PropTypes from 'prop-types'

export default function ForecastItem ({weather, dt, children}) {
	return (
		<Col md={4} sm={6} className='forecast-item'>
			<Image src={`./app/img/weather-icons/${weather.icon}.svg`} alt='Weather' className='forecast-img' responsive />
			<h3 className=''>{getDate(dt)}</h3>
			<div className='details-container'> {children} </div>
		</Col>
	)
}

ForecastItem.propTypes = {
	weather: PropTypes.object.isRequired,
	dt: PropTypes.number.isRequired
}