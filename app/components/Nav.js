import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'
import CityInput from './CityInput'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
	state = {
		city: ''
	}

	handleSubmit = (city) => {
		this.setState(() => {city:city})
	}

	render () {
		return (
			<Navbar fixedTop fluid inverse>
				<Navbar.Header className='nav-header'>
			    	<Navbar.Brand>
			    		<Link to={{
			    			pathname:'/'
			    		}}>
			        		Weather App
			        	</Link>
			      	</Navbar.Brand>
			      	<Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      	<Navbar.Form pullRight>
			        	<CityInput styleClass='margin-container' onSubmit={this.handleSubmit} />
			      	</Navbar.Form>
			    </Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Nav