import React from "react"
import { NavLink } from "react-router-dom"
import {Nav, Navbar, Image} from "react-bootstrap"


const NavigationBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand><Image src="/Img/nav_logo.png" height="30" width="130" /></Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={NavLink} to="/home">
					Home
				</Nav.Link>
				<Nav.Link as={NavLink} to="/mercs">
					Mercs
				</Nav.Link>
				<Nav.Link as={NavLink} to="/guns">
					Weapons
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
