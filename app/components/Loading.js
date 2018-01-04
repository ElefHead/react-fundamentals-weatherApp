import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-bootstrap'

class Loading extends React.Component {
	state = {
		text: this.props.text
	}

	static propTypes = {
		text: PropTypes.string.isRequired,
		speed: PropTypes.number.isRequired
	}

	static defaultProps = {
		text: 'Loading',
		speed: 300
	}

	componentDidMount () {
		const {speed, text} = this.props 
		const stopper = `${text}...`

		this.interval = window.setInterval(() => {
			this.state.text === stopper
				? this.setState (() => ({text: this.props.text}))
				: this.setState((prevState) => ({text:prevState.text + '.'}))
		}, speed)
	}

	componentWillUnmount() {
		window.clearInterval(this.interval)
	}
	render() {
		return (
			<Grid className='flex'>
				<Row>
					<Col xs={12}>
						<h1>{this.state.text}</h1>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Loading