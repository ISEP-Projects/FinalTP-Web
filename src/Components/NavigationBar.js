import React from "react"
import { NavLink } from "react-router-dom"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const NavigationBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>Navbrand</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={NavLink} to="/home">
					Home
				</Nav.Link>
				<Nav.Link as={NavLink} to="/mercs">
					Mercs
				</Nav.Link>
				<Nav.Link as={NavLink} to="/guns">
					Guns
				</Nav.Link>
				<Nav.Link as={NavLink} to="/jobs">
					Jobs
				</Nav.Link>

				<Nav.Link as={NavLink} to="/missions">
					Missions
				</Nav.Link>
			</Nav>
		</Navbar>
	)
}

export default NavigationBar
