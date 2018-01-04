import React from 'react'
import ReactDOM from 'react-dom'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import queryString from 'query-string'
import {getWeather} from '../utils/api'
import Loading from './Loading'
import ReactSVG from 'react-svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ForecastItem from './ForecastItem'

function ForecastGrid ({forecastData, city}) {
	return (
		<Row>
			{
				forecastData.map(({weather,dt,main}) => (
					<Link 
						to={{
							pathname: '/details',
							search: `?city=${city}`,
							hash: `#${dt}`,
							state: {weather,dt,main}
						}}
						key={dt}
					>
						<ForecastItem weather={weather[0]} dt={dt} />
					</Link>
				))
			}
		</Row>
	)
}

ForecastGrid.propTypes = {
	forecastData: PropTypes.array.isRequired
}

class Forecast extends React.Component {
	state = {
		city:'',
		forecast: [],
		error: null,
		loading: true
	}

	componentDidMount () {
		const {city} = queryString.parse(this.props.location.search)
		this.updateCity(city)
	}

	componentWillReceiveProps(nextProps) {
    	const {city} = queryString.parse(nextProps.location.search)
    	this.updateCity(city)
  	}

	updateCity = async (city) => {
		const results = await getWeather(city)
		if (results.cod !== "200") {
			return this.setState( () => ({
				city: city,
				error: "Something's up, check the city and try again",
				loading: false
			}))
		}
		this.setState( () => ({
			city: city,
			error: null,
			forecast: results.list,
			loading: false
		}))	
	}

	render () {
		const {error, forecast,city ,loading} = this.state
		if (loading === true) {
			return <Loading />
		}
		if (error) {
			return (
				<Grid className='flex'>
					<Row>
						<Col xs={12}>
							<h1>{error}</h1>
						</Col>
					</Row>
				</Grid>
			)
		}

		return (
			<div>
				<Grid className='flex'>
					<Row>
						<Col xsHidden smHidden>
							<h1 className='header'>{city}</h1>
						</Col>
						<Col mdHidden lgHidden>
							<h1 className='sub-header'>{city}</h1>
						</Col>
					</Row>
				</Grid>
				<Grid className="flex">
					<ForecastGrid forecastData={forecast} city={city} />
				</Grid>
			</div>
		)
	}
}

export default Forecast